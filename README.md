# ArtPUFF

Statyczna strona ArtPUFF z formularzem kontaktowym wysyłanym przez `/api/contact`.

## Konfiguracja formularza

Ustaw zmienne środowiskowe na hostingu, na którym działa endpoint Node/Vercel. Wymagane jest tylko `SMTP_PASS`; pozostałe wartości mają domyślne ustawienia dla skrzynki `kontakt@artpuff.pl`, ale można je nadpisać:

```env
SMTP_HOST=s185.cyber-folks.pl
SMTP_PORT=465
SMTP_USER=kontakt@artpuff.pl
SMTP_PASS=haslo_do_skrzynki
CONTACT_TO=kontakt@artpuff.pl
```

Hasła nie należy commitować do repozytorium. Lokalnie można skopiować `.env.example` do `.env.local` i uzupełnić hasło tylko na swoim komputerze.
