---
description: Stage this repo's changes and commit with the project's attribution convention
---

Bu depo için commit akışını çalıştır:

1. `git status` ve `git diff` ile neyin değiştiğine bak.
2. Eğer `refactor-demo/cart.js` değiştiyse, commit etmeden önce `node refactor-demo/verify.js`
   çalıştır ve çıktının önceki çalıştırmalarla aynı kaldığını doğrula. Farklıysa dur ve bana
   söyle — commit etme.
3. `.env*`, `.vercel/` veya başka bir secret/gizli dosya stage edilmiş mi kontrol et; öyleyse
   `git restore --staged` ile çıkar ve bana haber ver.
4. Değişen dosyaları isim vererek stage et (asla `git add -A` kullanma).
5. Kısa (1-2 cümlelik), "neden" odaklı bir commit mesajı yaz ve şu satırla bitir:
   `Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>`
6. Commit'i oluştur ve `git log -1 --stat` ile sonucu göster.

Push etme — sadece commit'le. Push için ayrıca onay iste.
