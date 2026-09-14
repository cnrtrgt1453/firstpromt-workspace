# first-prompt-1

Kişisel öğrenme projesi: bir tek-sayfa site (`index.html`), bir shell cheatsheet, ve
Vercel'e deploy edilmiş küçük bir demo (`vercel-deploy/`).

## Çalıştırma / Test Komutları

- **Refactor demo'yu doğrula:** `node refactor-demo/verify.js` — `cart.js`'deki 5 test
  senaryosunu çalıştırır ve çıktıyı basar. `cart.js`'de herhangi bir değişiklikten sonra
  çalıştır; çıktı satırları değişirse davranış bozulmuş demektir.
- **vercel-deploy'u yerelde önizle:** `cd vercel-deploy && npx serve .`
- **vercel-deploy'u production'a deploy et:** `cd vercel-deploy && vercel deploy --prod -e SITE_GREETING="..."`
  (GitHub entegrasyonu kasıtlı olarak kapalı — bkz. Tuzak.)
- **Formatlama:** Elle çalıştırmana gerek yok, `.claude/hooks/format-on-edit.js` her
  Edit/Write sonrası otomatik `prettier --write` çalıştırıyor.

## Kurallar

- `.env*` ve `.vercel/` asla commit edilmez (`vercel-deploy/.gitignore` içinde).
- `index.html`'e yeni bir bölüm eklerken mevcut kart/liste stiline (`.entry`, `.refactor`
  class'ları, CSS custom properties ile açık/koyu tema) uy — yeni bir tasarım dili icat etme.
- `cart.js` üzerinde refactor yaparken her adımdan sonra `node refactor-demo/verify.js`
  çalıştırıp çıktının aynı kaldığını doğrula, sonra commit et.
- Commit mesajları `Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>` satırıyla biter.

## Tuzak

**Vercel projesi (`shell-cheatsheet-demo`) GitHub reposuna otomatik bağlanmıştı ve bu depoya
yapılan bir push, `vercel-deploy/` yerine repo kökündeki `index.html`'i production'a deploy
etmişti.** Bunu `vercel git disconnect` ile kalıcı olarak kopardık. Yani: bu repoya push etmek
artık `shell-cheatsheet-demo.vercel.app`'i **güncellemiyor** — deploy etmek istiyorsan
`vercel-deploy/` içinden elle `vercel deploy --prod` çalıştırman gerekiyor. Entegrasyonu tekrar
bağlarsan (`vercel git connect`), Root Directory ayarını `vercel-deploy` olarak ayarlamadan asla
push yapma; aksi halde production yine yanlış içerikle üzerine yazılır.
