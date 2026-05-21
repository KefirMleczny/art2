import { stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const assets = [
  { file: 'assets/artpuff-logo-full.png', widths: [250, 500], quality: 86 },
  { file: 'assets/artpuff-logo-nav.png', widths: [156, 232], quality: 72 },
  { file: 'assets/artpuff-logo.png', widths: [128, 180], quality: 78 },
  { file: 'assets/artpuff-wordmark.png', widths: [555, 1110], quality: 86 },
  { file: 'assets/lazienka-after.png', widths: [360, 440], quality: 82 },
  { file: 'assets/lazienka-before.png', widths: [360, 440], quality: 82 },
  { file: 'assets/portfolio-agroturystyka.png', widths: [480, 800], quality: 80 },
  { file: 'assets/portfolio-boho.png', widths: [480, 800], quality: 80 },
  { file: 'assets/portfolio-kaszubska.png', widths: [360, 480], quality: 76 },
  { file: 'assets/portfolio-myhome.png', widths: [480, 800], quality: 80 },
  { file: 'assets/portfolio-terminarz.png', widths: [480, 800], quality: 80 },
  { file: 'assets/service-korekta.png', widths: [240, 360, 480], quality: 74 },
  { file: 'assets/service-post.png', widths: [240, 360, 480], quality: 74 },
  { file: 'assets/service-www.png', widths: [240, 360, 480], quality: 74 },
];

async function exists(file) {
  try {
    await stat(file);
    return true;
  } catch {
    return false;
  }
}

for (const asset of assets) {
  const parsed = path.parse(asset.file);
  const image = sharp(asset.file);
  const metadata = await image.metadata();
  const widths = asset.widths.filter((width) => width <= metadata.width);

  for (const width of widths) {
    const suffix = width === metadata.width ? '' : `-${width}`;
    const out = path.join(parsed.dir, `${parsed.name}${suffix}.webp`);
    await sharp(asset.file)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: asset.quality, effort: 5 })
      .toFile(out);
  }

  const defaultOut = path.join(parsed.dir, `${parsed.name}.webp`);
  if (!(await exists(defaultOut))) {
    await sharp(asset.file)
      .webp({ quality: asset.quality, effort: 5 })
      .toFile(defaultOut);
  }
}
