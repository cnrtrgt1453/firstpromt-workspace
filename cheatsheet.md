# Shell Cheatsheet: İlk 10 Komut

Başlangıç seviyesi için öğrenilmesi gereken 10 temel shell komutu.

## 1. `pwd`
Bulunduğun dizinin tam yolunu gösterir.
**Örnek:** Bir proje klasöründe kayboldun ve şu an tam olarak neredesin bilmiyorsun; `pwd` yazarak "aslında `/home/caner/projeler/site` içindeyim" diye görürsün.

## 2. `ls`
Bulunduğun dizindeki dosya ve klasörleri listeler.
**Örnek:** İndirdiğin bir zip dosyasını açtın, içine ne çıktığını görmek için `ls` çalıştırırsın.

## 3. `cd`
Başka bir dizine geçmeni sağlar (change directory).
**Örnek:** Masaüstündeki bir projeye girmek için `cd Desktop/proje-adi` yazarsın.

## 4. `mkdir`
Yeni bir klasör oluşturur.
**Örnek:** Yeni bir ödev için `mkdir odev-3` yazarak boş bir klasör açarsın.

## 5. `touch`
Boş bir dosya oluşturur (veya var olan dosyanın tarihini günceller).
**Örnek:** Yeni bir Python dosyasına başlamadan önce `touch main.py` ile boş dosyayı oluşturursun.

## 6. `cp`
Bir dosyayı veya klasörü kopyalar.
**Örnek:** `config.json` dosyasını bozmadan denemeler yapmak için `cp config.json config.backup.json` ile yedeğini alırsın.

## 7. `mv`
Bir dosyayı taşır veya yeniden adlandırır.
**Örnek:** `taslak.txt` dosyasını `rapor.txt` olarak yeniden adlandırmak için `mv taslak.txt rapor.txt` kullanırsın.

## 8. `rm`
Bir dosyayı (veya `-r` ile klasörü) siler. **Dikkat:** Geri dönüşü yoktur, çöp kutusuna gitmez.
**Örnek:** Artık ihtiyacın olmayan geçici bir log dosyasını silmek için `rm temp.log` yazarsın.

## 9. `cat`
Bir dosyanın içeriğini terminalde gösterir.
**Örnek:** Bir hata ayıklarken `.env` dosyasının içinde ne yazdığını hızlıca görmek için `cat .env` çalıştırırsın.

## 10. `grep`
Dosya içinde veya metinde belirli bir kelimeyi/örüntüyü arar.
**Örnek:** Büyük bir log dosyasında sadece "ERROR" geçen satırları bulmak için `grep "ERROR" app.log` kullanırsın.
