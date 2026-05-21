const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

function readLocalEnv() {
  const envPath = path.join(process.cwd(), '.env.local');
  if (!fs.existsSync(envPath)) return {};
  return fs.readFileSync(envPath, 'utf8')
    .split(/\r?\n/)
    .reduce((env, line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return env;
      const eq = trimmed.indexOf('=');
      if (eq === -1) return env;
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim();
      env[key] = value.replace(/^["']|["']$/g, '');
      return env;
    }, {});
}

const localEnv = readLocalEnv();

const mailConfig = {
  host: process.env.SMTP_HOST || localEnv.SMTP_HOST || 's185.cyber-folks.pl',
  port: Number(process.env.SMTP_PORT || localEnv.SMTP_PORT || 465),
  user: process.env.SMTP_USER || localEnv.SMTP_USER || 'kontakt@artpuff.pl',
  pass: process.env.SMTP_PASS || localEnv.SMTP_PASS,
  to: process.env.CONTACT_TO || localEnv.CONTACT_TO || process.env.SMTP_USER || localEnv.SMTP_USER || 'kontakt@artpuff.pl',
};

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function textValue(value = '') {
  return String(value || '').trim();
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Metoda niedozwolona.' });
  }

  if (!mailConfig.pass) {
    return res.status(500).json({
      ok: false,
      error: 'Brakuje hasła SMTP w konfiguracji hostingu. Ustaw zmienną SMTP_PASS i spróbuj ponownie.',
    });
  }

  const name = textValue(req.body?.name);
  const email = textValue(req.body?.email);
  const phone = textValue(req.body?.phone);
  const topic = textValue(req.body?.topic);
  const message = textValue(req.body?.message);

  if (!name || !email || !topic || !message) {
    return res.status(400).json({ ok: false, error: 'Uzupełnij wymagane pola formularza.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'Podaj poprawny adres e-mail.' });
  }

  const transporter = nodemailer.createTransport({
    host: mailConfig.host,
    port: mailConfig.port,
    secure: mailConfig.port === 465,
    auth: {
      user: mailConfig.user,
      pass: mailConfig.pass,
    },
  });

  const subject = `Nowe zapytanie ArtPUFF: ${topic}`;
  const plainText = [
    'Nowa wiadomość z formularza ArtPUFF',
    '',
    `Imię: ${name}`,
    `E-mail: ${email}`,
    `Telefon: ${phone || '-'}`,
    `Temat: ${topic}`,
    '',
    'Wiadomość:',
    message,
  ].join('\n');

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#181818">
      <h2>Nowa wiadomość z formularza ArtPUFF</h2>
      <p><strong>Imię:</strong> ${escapeHtml(name)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
      <p><strong>Telefon:</strong> ${escapeHtml(phone || '-')}</p>
      <p><strong>Temat:</strong> ${escapeHtml(topic)}</p>
      <p><strong>Wiadomość:</strong></p>
      <p style="white-space:pre-line">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"ArtPUFF formularz" <${mailConfig.user}>`,
      to: mailConfig.to,
      replyTo: email,
      subject,
      text: plainText,
      html,
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact form email failed:', error);
    return res.status(500).json({ ok: false, error: 'Nie udało się wysłać wiadomości.' });
  }
};
