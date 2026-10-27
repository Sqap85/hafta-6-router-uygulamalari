# Hafta 6 — Expo Router uygulamaları

Uygulama, föydeki üç senaryoyu tek Expo projesinde toplar:

- **Arıza Takip:** `TicketCard`, `StatusBadge`, `/ariza/[id]` dinamik rotası ve kontrollü bilinmeyen ID ekranı.
- **Mini Ürün Kataloğu:** `ProductCard`, FlatList, `/urun/[id]` rotası ve stok durumu.
- **Ders Programı:** `CourseCard`, `/ders/[id]` rotası ve bilinmeyen ders ID mesajı.

## Çalıştırma

```bash
npm install
npm start
```

Ana menüden üç uygulamadan biri seçilebilir. Her detay ekranındaki geri bağlantısı listeyi yeniden kullanılabilir durumda bırakır.

## Test tablosu

| No | İşlem | Beklenen sonuç |
|---|---|---|
| T1 | Ana menüden Arıza Takip'e git | Arıza listesi açılır |
| T2 | 101 numaralı arızayı aç | Başlık, konum, durum görünür |
| T3 | Detaydan geri dön | Liste yeniden görünür |
| T4 | `/ariza/999` aç | Uyarı görünür, uygulama çökmez |
| T5 | Mekanik Klavye'yi aç | `Stokta yok` görünür |
| T6 | Başka ürün seç | Doğru ürün ayrıntıları görünür |
| T7 | Farklı derse bas | Seçilen dersin tüm bilgileri görünür |

## Hata notu

**Sorun:** Dinamik detay rotasında olmayan bir ID aranırsa doğrudan alanlarına erişmek uygulamanın çökmesine neden olabilir.  
**Neden:** `find` sonucu `undefined` olabilir.  
**Çözüm:** Her detay ekranı önce kaydın bulunup bulunmadığını kontrol ediyor ve anlamlı bir bilgi kartı gösteriyor.

## Yapay zekâdan nerede yararlandım?

Yapay zekâdan Expo Router klasör yapısı, dinamik rota kullanımı ve ortak kart bileşenlerinin ayrıştırılması konusunda yararlandım. Veri modeli, ekran akışı ve renk tercihlerini föydeki gereksinimlere göre uyguladım.

## Tasarım kararı

Üç uygulamayı birbirinden ayırmak için arıza ekranında mavi, katalogda mor ve ders programında turkuaz vurgu renkleri kullandım. Beyaz kartlar ve geniş dokunma alanları, farklı ekranlarda aynı okunabilirlik ve kullanım hissini koruyor.
