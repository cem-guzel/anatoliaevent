import type { BlogPost } from "./types";
import MEDIA from "@/lib/media";

// ─────────────────────────────────────────────────────────────
// BLOG YAZILARI
// Yeni yazı eklemek için bu diziye yeni bir nesne eklemeniz yeterli.
//
// GÖRSELLER: Sitenin geri kalanı gibi lib/media.ts üzerinden seçilir.
//   coverImage: MEDIA.photos.kina,
// Yeni bir fotoğraf kullanmak için önce dosyayı public/ klasörüne koyun,
// sonra lib/media.ts içindeki "photos" bölümüne ekleyin.
// (Dosya adlarında Türkçe karakter ve boşluk kullanmayın.)
//
// "featured: true" olan yazı, blog sayfasında öne çıkan yazı olur.
// Metin içinde: [bağlantı metni](/menuler)  ve  **kalın metin**
// ─────────────────────────────────────────────────────────────

export const posts: BlogPost[] = [
  // ───────────────────────── 1
  {
    slug: "kir-dugunu-fiyatlari",
    title: "Kır Düğünü Fiyatları 2026: Bütçeyi Belirleyen 7 Kalem",
    excerpt:
      "Kır düğünü fiyatı tek bir rakamdan oluşmaz. Kişi sayısından menüye, ödeme şeklinden ekstra hizmetlere kadar teklifinizi neyin belirlediğini açıkça anlattık.",
    category: "Planlama",
    coverImage: MEDIA.photos.jpeg7,
    coverAlt: "Bahçede kurulmuş, çiçeklerle süslenmiş düğün masaları",
    author: "Anatolia Event",
    publishedAt: "2026-10-01",
    content: [
      {
        type: "p",
        text: "Düğün hazırlığına başlayan hemen her çiftin ilk sorusu aynıdır: Kır düğünü ne kadar tutar? Dürüst cevap, bunun tek bir rakam olmadığıdır. İki düğün aynı mekânda, aynı tarihte yapılsa bile kişi sayısı, menü ve ek hizmetler yüzünden bambaşka tekliflerle sonuçlanabilir. Bu yazıda bir kır düğünü teklifini oluşturan kalemleri tek tek açıyoruz; böylece hem bütçenizi daha gerçekçi planlarsınız hem de farklı mekânlardan aldığınız teklifleri doğru karşılaştırırsınız.",
      },
      { type: "h2", text: "1. Misafir sayısı" },
      {
        type: "p",
        text: "Bütçeyi en çok etkileyen kalem kişi sayısıdır, çünkü menü fiyatları kişi başı hesaplanır. Bu yüzden ilk iş, davetli listenizi kabaca da olsa çıkarmak olmalı. Anatolia Event'te açık alanımız **1.300 kişiye**, kapalı alanımız **350 kişiye** kadar hizmet veriyor. Menülerimiz ise minimum 250 kişi için geçerli. Daha küçük bir kutlama düşünüyorsanız 200 kişiye kadar olan [Micro Wedding paketimize](/blog/micro-wedding-kucuk-dugun) göz atabilirsiniz.",
      },
      { type: "h2", text: "2. Menü seçimi" },
      {
        type: "p",
        text: "İkinci büyük kalem menüdür. Kokteyl menüsünden et set menüye kadar uzanan seçenekler arasında hem içerik hem fiyat farkı vardır. Ayakta ikram ağırlıklı bir kokteyl menü daha hafif bir bütçeyle planlanırken, başlangıç tabağı ve ana yemekten oluşan set menüler daha kapsamlıdır. Tüm seçenekleri içerikleriyle birlikte [Menülerimiz](/menuler) sayfasında görebilirsiniz; hangisinin size uygun olduğunu düşünürken [menü seçimi rehberimiz](/blog/dugun-menusu-secimi) de işinize yarayabilir.",
      },
      { type: "h2", text: "3. Pakete dahil olanlar" },
      {
        type: "p",
        text: "Teklifleri karşılaştırırken en sık yapılan hata, sadece toplam rakama bakmaktır. Bir mekânın fiyatı düşük görünse de masa, sandalye, ses sistemi ya da DJ gibi temel kalemler ayrıca ücretlendiriliyor olabilir. Bizim paketlerimizde şunlar standart olarak yer alır:",
      },
      {
        type: "list",
        items: [
          "180 cm yuvarlak organizasyon masaları ve 2 adet rezerve aile masası",
          "Beyaz Tiffany sandalyeler, şeffaf boncuk supla, masa örtüsü ve masa ortası çiçek dekorları",
          "Yürüyüş yolu süslemesi, nikâh kürsüsü, gelin-damat köşesi ve arka fon",
          "Ses-ışık sistemleri, DJ performansı ve volkan eşliğinde çıkış",
          "Özel gelin-damat hazırlık odası",
          "Baştan sona sizinle ilgilenen profesyonel bir organizasyon planlayıcı",
        ],
      },
      { type: "h2", text: "4. Ekstra hizmetler" },
      {
        type: "p",
        text: "Bazı hizmetler tercihe bağlıdır ve ayrıca fiyatlandırılır. Bunları baştan bilmek, son dakika sürprizlerini önler. Fotoğraf ve video çekimi, otopark vale hizmeti, VIP hazırlık odası, sahne ve podyum, kumaş kaplama ve ekstra ışık-dekor seçenekleri, menü kartı, davetiye, hediyelik ve kumaş peçete seçenekleri bu gruptadır. İhtiyacınız olmayanı eklemeyerek bütçenizi rahatlatabilirsiniz.",
      },
      { type: "h2", text: "5. Tarih ve sezon" },
      {
        type: "p",
        text: "İlkbahar ve yaz hafta sonları en çok talep gören tarihlerdir ve erken dolar. Tarih esnekliğiniz varsa farklı günleri de sorun; seçenekleriniz genişler. Hangi ayın size uygun olduğunu düşünüyorsanız [mevsimlere göre kır düğünü rehberimizi](/blog/mevsimlere-gore-kir-dugunu) okuyabilirsiniz. Erken rezervasyonlarda özel avantajlarımızdan da yararlanabilirsiniz.",
      },
      { type: "h2", text: "6. Ödeme şekli ve koşullar" },
      {
        type: "p",
        text: "Teklifi değerlendirirken ödeme koşullarını da hesaba katın. Bizde sözleşme imzalanırken toplam tutarın **%50'si kapora** olarak alınır, kalan tutar etkinlikten önce belirlenen tarihe kadar tamamlanır. Fiyatlarımıza KDV dahil değildir; teklif aşamasında net tutarı ve KDV'li toplamı birlikte paylaşırız. **Nakit ödemelerde toplam fiyat üzerinden %5 ek indirim** uygulanır.",
      },
      { type: "h2", text: "7. Sözleşme sonrası değişiklikler" },
      {
        type: "p",
        text: "Kişi sayısı ya da menü gibi kalemlerde sözleşme sonrası yapılan değişiklikler, güncel fiyatlar üzerinden sözleşmeye yansıtılır. Bu yüzden misafir listenizi ve menü tercihinizi sözleşmeden önce olabildiğince netleştirmek, bütçenizi korumanın en kolay yoludur.",
      },
      {
        type: "quote",
        text: "İyi bir teklif en düşük rakam değil, içinde ne olduğunu net olarak bildiğiniz rakamdır.",
      },
      { type: "h2", text: "Net fiyat için ne yapmalı?" },
      {
        type: "p",
        text: "Tarihinizi, yaklaşık kişi sayınızı ve aklınızdaki menüyü bize ilettiğinizde size özel, kalem kalem açık bir teklif hazırlıyoruz. Mekânı görmek ve teklifinizi yüz yüze konuşmak için [iletişim sayfamızdan](/iletisim) randevu alabilirsiniz. Diğer sorularınızın cevabı büyük ihtimalle [Sıkça Sorulan Sorular](/sss) sayfamızda da vardır.",
      },
    ],
  },

  // ───────────────────────── 2
  {
    slug: "mevsimlere-gore-kir-dugunu",
    title: "Hangi Mevsim Sizin? Kır Düğünü İçin Ay Ay Rehber",
    excerpt:
      "Mayısın taze yeşilinden eylülün altın ışığına, her mevsim bahçeye başka bir hava getirir. Tarih seçerken bilmeniz gerekenleri derledik.",
    category: "İlham",
    coverImage: MEDIA.photos.birciftFotoAlbum,
    coverAlt: "Gün batımında ağaçların altında kurulmuş düğün masaları",
    author: "Anatolia Event",
    publishedAt: "2026-09-28",
    featured: true,
    content: [
      {
        type: "p",
        text: "Bir kır düğününün tarihi, davetiyedeki bir satırdan çok daha fazlasıdır. Işığın rengini, masalardaki çiçekleri, misafirlerin kıyafetlerini, hatta gecenin kaçta serinleyeceğini belirler. Kemerburgaz'ın ormanla çevrili havası her mevsim farklı bir yüz gösterir; doğru ayı seçmek, hayal ettiğiniz atmosferin yarısını baştan kurmak demektir.",
      },
      { type: "h2", text: "İlkbahar: Taze yeşil, yumuşak ışık" },
      {
        type: "p",
        text: "Nisan sonundan haziran ortasına kadar bahçe en canlı hâlindedir. Ağaçlar yeni yapraklanmış, çimler gür ve parlaktır. Hava gündüz ılık, akşamları hafif serindir; bu yüzden ince bir şal ya da misafirler için battaniye sepetleri hem pratik hem de fotoğraflarda çok şık durur.",
      },
      {
        type: "list",
        items: [
          "Şakayık, ranunculus ve beyaz güller bu dönemin en güzel çiçekleridir.",
          "Pastel tonlar ve açık renk keten masa örtüleri doğanın tazeliğiyle uyum içinde olur.",
          "Mayıs ve haziran hafta sonları en çok talep gören tarihlerdir; 6-12 ay önceden rezervasyon yapmak gerekir.",
        ],
      },
      { type: "h2", text: "Yaz: Uzun akşamlar, bitmeyen dans" },
      {
        type: "p",
        text: "Temmuz ve ağustos, güneşin geç battığı ve gecenin sıcak kaldığı aylardır. Tören için gün batımına yakın bir saat seçmek, öğle sıcağından kaçınmanızı ve altın saatin ışığını yakalamanızı sağlar. Bunun nasıl planlanacağını [altın saat yazımızda](/blog/altin-saatte-dugun-fotografi) anlattık. Akşam yemeği yıldızların altında, ağaçlara asılı ışıklarla devam eder.",
      },
      {
        type: "quote",
        text: "Yaz düğünlerinde en güzel an, güneş batarken ışıkların yanmaya başladığı o birkaç dakikadır.",
      },
      { type: "h2", text: "Sonbahar: Altın tonlar ve sıcak bir sofra" },
      {
        type: "p",
        text: "Eylül ve ekim, pek çok çiftin gizli favorisidir. Sıcaklık yumuşar, ışık altın sarısına döner ve doğa kendiliğinden toprak tonlarında bir dekor hazırlar. Bordo, hardal ve koyu yeşil gibi renkler; kuru otlar, mumlar ve ahşap detaylarla birleşince sofra kendiliğinden davetkâr bir hâl alır.",
      },
      {
        type: "image",
        src: MEDIA.photos.ciftFotografi,
        alt: "Mum ve kuru çiçeklerle süslenmiş sonbahar düğün masası",
        caption: "Sonbaharda mum ışığı, dekorasyonun en ekonomik ve en etkili parçasıdır.",
      },
      { type: "h2", text: "Hava değişirse?" },
      {
        type: "p",
        text: "Hangi mevsimi seçerseniz seçin, açık havada aklınıza ilk gelen soru yağmur olur. Mekânımızdaki **açılır kapanır pergole sistemi** sayesinde ani bir yağmurda alan dakikalar içinde korunaklı hâle gelir; ayrıca 350 kişilik kapalı alanımız da bulunuyor. Ayrıntıları [yağmur planı yazımızda](/blog/yagmur-yagarsa-kir-dugunu) bulabilirsiniz.",
      },
      { type: "h2", text: "Kış için bir not" },
      {
        type: "p",
        text: "Soğuk aylarda açık hava töreni yerine kapalı alanda samimi kutlamalar öne çıkar. [Söz, nişan ya da isteme](/blog/soz-nisan-isteme-organizasyonu) gibi daha küçük ölçekli davetler için bu dönem hem daha sakin hem de tarih seçeneği açısından çok daha esnektir.",
      },
      {
        type: "p",
        text: "Hangi mevsimi seçerseniz seçin, mekânı o mevsimde görmek en doğru karar aracıdır. [Ziyaret planlamak için bize ulaşın](/iletisim); bahçenin farklı saatlerdeki hâlini yerinde anlatalım.",
      },
    ],
  },

  // ───────────────────────── 3
  {
    slug: "yagmur-yagarsa-kir-dugunu",
    title: "Yağmur Yağarsa Ne Olur? Kır Düğününde Hava Durumu Planı",
    excerpt:
      "Açık havada düğün yapmak isteyen herkesin aklındaki soru. Pergole sistemi, kapalı alan ve B planı ile hava ne olursa olsun düğününüz nasıl aksamadan devam eder?",
    category: "Planlama",
    coverImage: MEDIA.photos.ciftinvarildeki,
    coverAlt: "Üzeri kapalı pergole altında kurulmuş düğün masaları",
    author: "Anatolia Event",
    publishedAt: "2026-09-22",
    content: [
      {
        type: "p",
        text: "Kır düğünü hayal eden çiftlerin neredeyse tamamı aynı endişeyi taşır: Ya o gün yağmur yağarsa? Bu endişe yüzünden pek çok çift, aslında gönlünün istediği açık hava düğününden vazgeçip kapalı salona yöneliyor. Oysa doğru mekânda, doğru planla yağmur bir felaket değil, sadece bir detaydır.",
      },
      { type: "h2", text: "Açılır kapanır pergole: Doğada ama korunaklı" },
      {
        type: "p",
        text: "Anatolia Event'te açık alanımız **açılır kapanır pergole sistemiyle** donatılmıştır. Güneşli bir günde çatı açık kalır ve gökyüzünün altında olursunuz. Hava bozduğunda ise sistem kapanır ve alan tamamen korunaklı hâle gelir. Böylece masaları taşımak, misafirleri başka bir alana yönlendirmek ya da programı değiştirmek gerekmez. Doğanın ortasında olmanın keyfini, hava koşullarından bağımsız yaşarsınız.",
      },
      { type: "h2", text: "Kapalı alan seçeneği" },
      {
        type: "p",
        text: "Pergolenin yanı sıra 350 kişiye kadar hizmet veren kapalı bir alanımız da bulunuyor. Özellikle sonbahar sonu ve kış aylarında, ya da daha küçük ölçekli davetlerde bu alan sıcak ve samimi bir seçenek sunar.",
      },
      { type: "h2", text: "Kendi B planınızı da hazırlayın" },
      {
        type: "p",
        text: "Mekânın altyapısı ne kadar güçlü olursa olsun, sizin tarafınızda da birkaç küçük hazırlık işleri kolaylaştırır:",
      },
      {
        type: "list",
        items: [
          "Düğünden bir hafta önce hava tahminini organizasyon planlayıcınızla birlikte takip edin; kararları son güne bırakmayın.",
          "Gelin ayakkabısının yanında, fotoğraf çekimi için daha rahat bir yedek ayakkabı bulundurun.",
          "Dış çekimler için şeffaf şemsiyeler hazırlayın; yağmurlu kareler çoğu zaman albümün en özel fotoğrafları olur.",
          "Akşam serinliğine karşı misafirler için şal ya da ince battaniye sepetleri düşünün.",
          "Davetiyenize ya da düğün sitenize, misafirlerin kıyafet seçimine yardımcı olacak kısa bir not ekleyin.",
        ],
      },
      {
        type: "quote",
        text: "Yağmurlu bir düğün gününün fotoğrafları, çoğu zaman en çok konuşulan fotoğraflar olur.",
      },
      { type: "h2", text: "Fotoğraf çekimini hava durumuna göre esnetin" },
      {
        type: "p",
        text: "Bulutlu havalar fotoğrafçıların gizli dostudur; sert gölgeler kaybolur, yüzler daha yumuşak aydınlanır. Hava kapalı olsa bile kısa bir aralık yakaladığınızda dış çekim için hazır olmanız yeterli. Güneşli bir günde ise [altın saati yakalamak](/blog/altin-saatte-dugun-fotografi) için programınızı ışığa göre kurabilirsiniz.",
      },
      { type: "h2", text: "Sonuç: Hava, kararınızı belirlemesin" },
      {
        type: "p",
        text: "Kır düğünü istiyorsanız hava durumu yüzünden bu hayalden vazgeçmenize gerek yok. Önemli olan, mekânın bu ihtimale baştan hazır olması. Pergole sistemini ve kapalı alanı yerinde görmek için [bizi ziyaret edin](/iletisim); merak ettiğiniz diğer konular için [Sıkça Sorulan Sorular](/sss) sayfamıza da göz atabilirsiniz.",
      },
    ],
  },

  // ───────────────────────── 4
  {
    slug: "altin-saatte-dugun-fotografi",
    title: "Altın Saat: Doğal Işıkta Unutulmaz Düğün Fotoğrafları",
    excerpt:
      "Gün batımından önceki o kısa zaman dilimi, kır düğününün en değerli anıdır. Programınızı ışığa göre kurmanın püf noktaları.",
    category: "Fotoğraf",
    coverImage: MEDIA.photos.ciftFotografi,
    coverAlt: "Gün batımı ışığında el ele yürüyen gelin ve damat",
    author: "Anatolia Event",
    publishedAt: "2026-09-15",
    content: [
      {
        type: "p",
        text: "Fotoğrafçıların “altın saat” dediği zaman, güneşin batmadan önceki yaklaşık bir saatlik dilimidir. Bu sürede ışık yumuşar, gölgeler uzar ve her şey sıcak bir tona bürünür. Salonda yapay ışıkla elde edilmesi neredeyse imkânsız olan bu etki, kır düğününün en büyük ayrıcalıklarından biridir.",
      },
      { type: "h2", text: "Programı ışığa göre kurun" },
      {
        type: "p",
        text: "En sık yapılan hata, çift çekimlerini yemekten sonraya bırakmaktır. O saatte ışık çoktan gitmiş olur. Bunun yerine günü geriye doğru planlayın: önce gün batımı saatini öğrenin, sonra çift çekimini ondan 45-60 dakika öncesine yerleştirin.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Düğün tarihiniz için gün batımı saatini kontrol edin.",
          "Çift çekimine 30-40 dakika ayırın; acele çekilen kareler gergin görünür.",
          "Töreni çekimden hemen önceye ya da hemen sonraya koyun.",
          "Aile fotoğraflarını ışık hâlâ güçlüyken tamamlayın.",
        ],
      },
      { type: "h2", text: "Bahçenin farklı köşelerini keşfedin" },
      {
        type: "p",
        text: "Geniş bir bahçede her köşe günün farklı saatinde parlar. Asırlık ağaçların gölgesi öğleden sonra yumuşak ve eşit bir ışık verirken, açık alanlar gün batımına doğru arkadan aydınlatmalı, siluet çekimler için idealdir. Fotoğrafçınızla düğünden önce mekânı birlikte gezmek, o gün dakikalar kazandırır. Önceki düğünlerden kareleri [galerimizde](/galeri) görebilirsiniz.",
      },
      {
        type: "quote",
        text: "En güzel kareler genellikle planlananlar değil, ışığın doğru olduğu anda kendiliğinden yaşananlardır.",
      },
      { type: "h2", text: "Hazırlık anlarını da unutmayın" },
      {
        type: "p",
        text: "Günün en duygusal karelerinin bir kısmı törenden önce çekilir. Mekânımızdaki aynalı ve aydınlık **gelin-damat hazırlık odası**, gelinliğin giyildiği, son rötuşların yapıldığı anları rahatça fotoğraflamak için tasarlandı. Fotoğrafçınızın bu odaya erken gelmesini sağlayın.",
      },
      { type: "h2", text: "Fotoğrafçı seçimi hakkında" },
      {
        type: "p",
        text: "Fotoğraf ve video çekimi pakete dahil değildir; çekimler anlaşmalı ekibimiz tarafından yapılır. Bu ekipler mekânı, ışığın gün içindeki hareketini ve en iyi çekim noktalarını çok iyi tanır. Talep etmeniz hâlinde güvendiğimiz ekiplerin bilgilerini sizinle paylaşırız.",
      },
      { type: "h2", text: "Gece için de bir planınız olsun" },
      {
        type: "p",
        text: "Işık gittikten sonra sahne değişir. Ağaçlara asılı ampuller, masalardaki mumlar ve dans pistinin ışıkları bambaşka bir atmosfer yaratır. Fotoğrafçınızdan gece için birkaç uzun pozlama ya da ışık izli kare istemek, albümünüze sinematik bir kapanış ekler. Hava kapalı olursa ne yapacağınızı merak ediyorsanız [yağmur planı yazımız](/blog/yagmur-yagarsa-kir-dugunu) tam size göre.",
      },
    ],
  },

  // ───────────────────────── 5
  {
    slug: "kir-dugunu-ne-giyilir",
    title: "Kır Düğününe Davetliyseniz: Ne Giyilir, Nelere Dikkat Edilir?",
    excerpt:
      "Çimende yürümeye uygun ayakkabıdan akşam serinliğine, renk seçiminden aksesuara kadar kır düğünü misafirleri için pratik bir kıyafet rehberi.",
    category: "Misafirler",
    coverImage: MEDIA.photos.kapalıAlan,
    coverAlt: "Bahçe düğününde şık kıyafetleriyle sohbet eden misafirler",
    author: "Anatolia Event",
    publishedAt: "2026-09-08",
    content: [
      {
        type: "p",
        text: "Salon düğünü için ne giyeceğinizi bilirsiniz; ama davetiyede “kır düğünü” yazınca işler biraz değişir. Açık hava, çim zemin, gün batımından sonra serinleyen hava ve uzun bir gece... Hem şık hem rahat olmanın dengesini kurmak için bilmeniz gereken her şeyi derledik.",
      },
      { type: "h2", text: "Ayakkabı: En önemli karar" },
      {
        type: "p",
        text: "Kır düğününde en çok hata ayakkabıda yapılır. İnce stiletto topuklar çimene batar, hem yürümeyi zorlaştırır hem de ayakkabıya zarar verir. Bunun yerine şu seçenekleri düşünün:",
      },
      {
        type: "list",
        items: [
          "Kalın ve geniş topuklu ayakkabılar ya da dolgu tabanlar",
          "Şık babetler ve sandaletler",
          "Erkekler için loafer ya da klasik deri ayakkabı; çok açık renk süet tercih etmeyin",
          "Dans için çantanızda katlanabilir yedek bir babet",
        ],
      },
      { type: "h2", text: "Kumaş ve renk seçimi" },
      {
        type: "p",
        text: "Keten, ipek, şifon ve pamuk gibi nefes alan kumaşlar açık havada en rahat seçeneklerdir. Renklerde doğanın tonlarıyla uyum içinde olan pastel, toprak ve yeşil tonları fotoğraflarda çok güzel durur. Beyaz ve krem tonlarını gelinin rengi olduğu için tercih etmemek, misafir adabının bilinen bir kuralıdır. Çok yoğun parlak kumaşlar ise gün ışığında fotoğraflarda yansıma yapabilir.",
      },
      {
        type: "quote",
        text: "Kır düğününde en şık misafir, gecenin sonunda hâlâ rahat olandır.",
      },
      { type: "h2", text: "Akşam serinliğine hazırlıklı olun" },
      {
        type: "p",
        text: "Ağaçlarla çevrili alanlarda güneş battıktan sonra hava, şehir merkezine göre daha hızlı serinler. İnce bir şal, blazer ceket ya da şık bir hırka çantanızda yer kaplamaz ama gecenin ikinci yarısında çok işinize yarar. Uzun kollu bir elbise ya da kombin de iyi bir alternatiftir.",
      },
      { type: "h2", text: "Erkekler için" },
      {
        type: "p",
        text: "Davetiyede özel bir dress code yoksa kır düğünleri için açık tonlarda takım, keten pantolon ve ceket kombinleri idealdir. Kravat yerine papyon ya da açık yaka gömlek daha rahat ve mevsime uygun bir seçim olabilir. Koyu lacivert ve gri her zaman güvenli tercihlerdir.",
      },
      { type: "h2", text: "Çanta ve aksesuar" },
      {
        type: "p",
        text: "Küçük bir çapraz çanta ya da el çantası, uzun gecede elinizi serbest bırakır. Rüzgârlı havalarda geniş kenarlı şapkalar ya da çok uzun duvaklar zahmetli olabilir. Saçlar için gevşek topuz ya da örgüler hem açık havaya uygun hem de gece boyunca formunu korur.",
      },
      { type: "h2", text: "Pratik bilgiler" },
      {
        type: "p",
        text: "Anatolia Event'te geniş ve güvenli bir otopark bulunur; bazı düğünlerde vale hizmeti de sağlanır. Mekânımızda kadın-erkek WC ve mescit mevcuttur, alan engelli erişimine uygun olarak tasarlanmıştır. Kalabalık bir düğünde misafir deneyimini nasıl planladığımızı merak ediyorsanız [bu yazımıza](/blog/kalabalik-dugunde-misafir-deneyimi) göz atabilirsiniz. Yol tarifi için [iletişim sayfamızı](/iletisim) kullanabilirsiniz.",
      },
    ],
  },

  // ───────────────────────── 6
  {
    slug: "kir-dugunu-planlama-takvimi",
    title: "Kır Düğünü Planlarken: On İki Aylık Sakin Bir Takvim",
    excerpt:
      "Son dakika telaşı olmadan, adım adım ilerleyen bir hazırlık süreci. Hangi kararı ne zaman vermeniz gerektiğini tek bir yerde topladık.",
    category: "Planlama",
    coverImage: MEDIA.photos.kina,
    coverAlt: "Ahşap masa üzerinde düğün davetiyesi ve çiçekler",
    author: "Anatolia Event",
    publishedAt: "2026-08-30",
    content: [
      {
        type: "p",
        text: "Düğün hazırlığı, doğru sırayla yapıldığında yorucu değil keyifli bir süreçtir. Kararların büyük çoğunluğu birbirine bağlıdır: mekân tarihi belirler, tarih tedarikçileri, tedarikçiler de bütçeyi. Bu yüzden önce büyük taşları yerleştirip ayrıntılara sonra geçmek en sağlıklı yoldur.",
      },
      { type: "h2", text: "12-9 ay önce: Temeli atın" },
      {
        type: "list",
        items: [
          "Yaklaşık misafir sayısını ve bütçe aralığını belirleyin. Bütçeyi neyin belirlediğini [fiyat rehberimizde](/blog/kir-dugunu-fiyatlari) anlattık.",
          "Mekânları gezin ve tarihinizi kesinleştirin. Popüler ilkbahar ve yaz tarihleri 6-12 ay önceden dolar.",
          "Fotoğrafçı ve müzik gibi en çabuk dolan tedarikçileri ayırtın.",
        ],
      },
      {
        type: "p",
        text: "Mekân gezisine giderken yanınıza bir soru listesi almayı unutmayın. Neleri sormanız gerektiğini [bu yazımızda](/blog/dugun-mekani-gezerken-sorulacak-sorular) tek tek sıraladık.",
      },
      { type: "h2", text: "8-5 ay önce: Hikâyeyi şekillendirin" },
      {
        type: "p",
        text: "Artık düğününüzün nasıl hissettireceğine karar verme zamanı. Renk paleti, dekorasyon tarzı ve menü bu dönemde netleşir. Menü tadımı hem en keyifli hem de en çok şey öğreneceğiniz adımlardan biridir; tadım sırasında servis düzenini ve masa yerleşimini de konuşmayı unutmayın. Seçenekleri [Menülerimiz](/menuler) sayfasında inceleyebilirsiniz.",
      },
      { type: "h2", text: "4-2 ay önce: Ayrıntılar" },
      {
        type: "list",
        items: [
          "Davetiyeleri gönderin ve katılım takibine başlayın.",
          "Gelinlik ve damatlık provalarını planlayın.",
          "Gün akışını taslak hâlinde yazın: hazırlık, tören, kokteyl, yemek, dans.",
          "Misafirlere kıyafet konusunda yol göstermek isterseniz [davetli kıyafet rehberimizi](/blog/kir-dugunu-ne-giyilir) paylaşabilirsiniz.",
        ],
      },
      {
        type: "quote",
        text: "İyi bir düğün planı, o gün sizin hiçbir şey düşünmemenizi sağlayan plandır.",
      },
      { type: "h2", text: "Son ay: Bırakın, tadını çıkarın" },
      {
        type: "p",
        text: "Son haftalarda kesin misafir sayısını bildirin, oturma planını tamamlayın ve gün akışını organizasyon planlayıcınızla son kez gözden geçirin. Kişi sayısı ve menü gibi değişikliklerin sözleşmeye güncel fiyatlarla yansıdığını unutmayın; bu yüzden kesin rakamları erken netleştirmek bütçenizi korur.",
      },
      {
        type: "p",
        text: "Sonrası ekibin işi. Anatolia Event'te ilk görüşmeden son dansa kadar her detayı aynı organizasyon planlayıcısı takip eder ve aynı gün mekânda yalnızca sizin düğününüz olur. Düğün gününüz geldiğinde tek göreviniz, o anın içinde olmak. Hazırsanız [ilk adımı buradan atabilirsiniz](/iletisim).",
      },
    ],
  },

  // ───────────────────────── 7
  {
    slug: "micro-wedding-kucuk-dugun",
    title: "Micro Wedding: Sadece En Sevdiklerinizle Küçük Bir Düğün",
    excerpt:
      "Kalabalık yerine samimiyet, uzun misafir listesi yerine anlamlı anlar. 200 kişiye kadar küçük düğünlerin neden giderek daha çok tercih edildiğini anlattık.",
    category: "İlham",
    coverImage: MEDIA.photos.kina2,
    coverAlt: "Ağaçların altında az sayıda misafirle yapılan samimi nikâh töreni",
    author: "Anatolia Event",
    publishedAt: "2026-08-21",
    content: [
      {
        type: "p",
        text: "Son yıllarda pek çok çift, yüzlerce kişilik düğünler yerine daha küçük ve samimi kutlamaları tercih ediyor. Dünyada “micro wedding” olarak bilinen bu yaklaşımda amaç, misafir sayısını azaltıp her misafirle gerçekten zaman geçirebilmek. Kır düğünü atmosferiyle birleştiğinde ise ortaya hem sıcak hem de son derece şık bir gün çıkıyor.",
      },
      { type: "h2", text: "Micro wedding kimler için uygun?" },
      {
        type: "list",
        items: [
          "Kalabalıktan çok, aile ve yakın arkadaş çevresiyle kutlamak isteyen çiftler",
          "Bütçesinin büyük kısmını balayına, eve ya da deneyime ayırmak isteyenler",
          "İkinci evliliklerde ya da yeniden söz verme törenlerinde sade bir kutlama arayanlar",
          "Nikâhı ve kutlamayı aynı yerde, birkaç saatlik keyifli bir davet olarak planlayanlar",
        ],
      },
      { type: "h2", text: "Anatolia Event Micro Wedding paketi" },
      {
        type: "p",
        text: "Micro Wedding paketimiz **maksimum 200 kişilik** davetler için tasarlandı. Pakette kilise düzeninde sandalye dizimi ile nikâh seremonisi, aile masaları, bistro masalar, dip soslar ile sebze buketi, kuruyemiş ve soft içecek ikramı ile DJ performansı yer alıyor. Paketin güncel ayrıntılarını ve uygun saatleri [Menülerimiz](/menuler) sayfasında bulabilirsiniz.",
      },
      {
        type: "quote",
        text: "Küçük bir düğünde her misafir, gecenin bir parçası değil, hikâyenin bir parçası olur.",
      },
      { type: "h2", text: "Küçük düğünde büyük fark yaratan detaylar" },
      {
        type: "p",
        text: "Misafir sayısı azaldığında, detaylara ayıracağınız özen artar. Her misafire el yazısıyla bir not, masalarda isim kartları, kısa ama içten konuşmalar ya da ailenizin sevdiği bir şarkıyla yapılan giriş... Bunlar büyük düğünlerde çoğu zaman kaybolan, küçük düğünlerde ise en çok hatırlanan anlardır.",
      },
      {
        type: "p",
        text: "Dekorasyonda da aynı ilke geçerli: Bahçenin kendisi zaten güçlü bir sahne. Az sayıda masayla kurulan bir düzende, her masanın kendine ait bir hikâyesi olabilir. Fikir almak için [bahçe düğünü dekorasyonu yazımıza](/blog/bahce-dugunu-dekorasyonu) göz atabilirsiniz.",
      },
      { type: "h2", text: "Planlamada dikkat edilecekler" },
      {
        type: "list",
        items: [
          "Misafir listesini erkenden netleştirin; küçük düğünde her isim daha çok önem taşır.",
          "Tören ve kutlama saatlerini ışığa göre planlayın. Gün batımı saatleri micro wedding için idealdir.",
          "Fotoğrafçınızdan daha samimi, belgesel tarzı bir çekim isteyin.",
          "Aynı gün mekânda yalnızca sizin davetiniz olacağı için alanın tamamından yararlanabilirsiniz.",
        ],
      },
      {
        type: "p",
        text: "Küçük ama unutulmaz bir düğün planlıyorsanız, tarih ve ayrıntılar için [bize ulaşın](/iletisim). Daha büyük bir kutlama düşünüyorsanız 1.300 kişiye kadar hizmet veren açık alanımız da sizi bekliyor.",
      },
    ],
  },

  // ───────────────────────── 8
  {
    slug: "bahce-dugunu-dekorasyonu",
    title: "Az Ama Öz: Bahçe Düğünlerinde Doğayla Yarışmayan Dekorasyon",
    excerpt:
      "Ağaçlar, çimen ve gökyüzü zaten sahnenin büyük kısmını kuruyor. Dekorasyonun görevi onlarla yarışmak değil, onları çerçevelemek.",
    category: "Dekorasyon",
    coverImage: MEDIA.photos.koltuklular,
    coverAlt: "Ağaçların arasında beyaz çiçeklerle süslenmiş tören alanı",
    author: "Anatolia Event",
    publishedAt: "2026-08-12",
    content: [
      {
        type: "p",
        text: "Kapalı bir salonda dekorasyon her şeyi sıfırdan inşa etmek zorundadır. Bahçede ise durum tersidir: sahnenin büyük kısmı hazırdır. Bu yüzden kır düğünlerinde en etkileyici dekorasyonlar, genellikle en sade olanlardır.",
      },
      { type: "h2", text: "Doğal malzemeleri seçin" },
      {
        type: "p",
        text: "Ahşap, keten, taş ve cam; bahçenin dokusuyla kendiliğinden uyum sağlar. Plastik ya da çok parlak yüzeyler ise doğal ışıkta yapay görünür. Masa örtüsünden peçete halkasına kadar dokunun önemsendiği bir sofra, fotoğraflarda da kendini belli eder.",
      },
      {
        type: "image",
        src: MEDIA.photos.luksmasaduzen,
        alt: "Keten örtülü masa ve sade çiçek düzenlemeleri",
        caption: "Sade çiçek düzenlemeleri, bahçenin doğal güzelliğini öne çıkarır.",
      },
      { type: "h2", text: "Pakete dahil olan temel dekor" },
      {
        type: "p",
        text: "Paketlerimizde beyaz Tiffany sandalyeler, şeffaf boncuk supla, masa örtüsü ve masa ortası çiçek dekorları, yürüyüş yolu süslemesi, nikâh kürsüsü, gelin-damat köşesi ve arka fon standart olarak yer alır. Yani temel dekorasyon için ayrıca bir firma aramanıza gerek kalmaz. Daha fazlasını isterseniz kumaş kaplama, ekstra ışık ve dekor seçenekleri de sunuyoruz.",
      },
      { type: "h2", text: "Çiçekte mevsime güvenin" },
      {
        type: "p",
        text: "Mevsiminde olan çiçekler hem daha taze hem daha uygun fiyatlıdır, ayrıca bahçedeki doğal renklerle de uyum içindedir. Her masaya büyük aranjmanlar yerine farklı yüksekliklerde küçük vazolar kullanmak daha zarif ve samimi bir görüntü yaratır. Hangi ayda hangi çiçeklerin öne çıktığını [mevsim rehberimizde](/blog/mevsimlere-gore-kir-dugunu) bulabilirsiniz.",
      },
      { type: "h2", text: "Konseptinizi seçin" },
      {
        type: "p",
        text: "Rustik kır estetiğinden modern minimalist tasarıma, çiçek ağırlıklı romantik konseptlerden bohem doğa temalarına kadar geniş bir yelpazede çalışıyoruz. Kendi dekor malzemelerinizi ya da temanıza ait objeleri getirmeniz de mümkün; ekibimiz bunları mekânın genel estetiğiyle uyumlu şekilde yerleştirmenize yardımcı olur.",
      },
      { type: "h2", text: "Işık, en güçlü dekor" },
      {
        type: "list",
        items: [
          "Ağaçlara asılı sıcak beyaz ampuller, gece boyunca alanı tanımlar.",
          "Masalarda cam fanus içinde mumlar, rüzgâra karşı da güvenlidir.",
          "Tören alanında az ama doğru yerleştirilmiş ışık, alanın sınırlarını çizer.",
        ],
      },
      {
        type: "quote",
        text: "Kır düğününde dekorasyonun görevi doğayı süslemek değil, ona çerçeve olmaktır.",
      },
      {
        type: "p",
        text: "Önceki düğünlerimizden dekorasyon örneklerini [galerimizde](/galeri) görebilir, kendi konseptinizi konuşmak için [bize ulaşabilirsiniz](/iletisim).",
      },
    ],
  },

  // ───────────────────────── 9
  {
    slug: "dugun-mekani-gezerken-sorulacak-sorular",
    title: "Düğün Mekânı Gezerken Sorulması Gereken 12 Soru",
    excerpt:
      "Mekân gezisinde gözünüz atmosferde kalırken önemli detaylar kolayca unutulur. Sözleşmeden önce mutlaka netleştirmeniz gereken soruları listeledik.",
    category: "Planlama",
    coverImage: MEDIA.photos.masaCicekSabah,
    coverAlt: "Düğün mekânının bahçesini gezen bir çift",
    author: "Anatolia Event",
    publishedAt: "2026-08-03",
    content: [
      {
        type: "p",
        text: "Bir düğün mekânını ilk kez gezdiğinizde ağaçlar, ışıklar ve atmosfer insanı hemen etkiler. Bu çok doğal; ama sözleşme imzalanmadan önce bazı pratik soruların cevabını mutlaka almalısınız. İşte yanınızda götürebileceğiniz bir kontrol listesi. Her sorunun altına, kendi mekânımız için cevabını da ekledik.",
      },
      { type: "h2", text: "Kapasite ve alan" },
      {
        type: "list",
        items: [
          "**Misafir sayıma uygun alan var mı?** Bizde açık alan 1.300, kapalı alan 350 kişiye kadar hizmet veriyor; 200 kişiye kadar davetler için Micro Wedding paketi var.",
          "**Yağmur yağarsa ne olacak?** Açılır kapanır pergole sistemimiz alanı dakikalar içinde korunaklı hâle getiriyor. Ayrıntılar [yağmur planı yazımızda](/blog/yagmur-yagarsa-kir-dugunu).",
          "**Aynı gün başka bir düğün olacak mı?** Bizde hayır. Aynı gün mekânda yalnızca tek bir etkinlik yapılır.",
        ],
      },
      { type: "h2", text: "Yemek ve ikram" },
      {
        type: "list",
        items: [
          "**Menü seçenekleri neler, tadım yapılabiliyor mu?** Altı farklı menü seçeneğimiz var ve düğünden önce tadım randevusu ayarlıyoruz. Tümü [Menülerimiz](/menuler) sayfasında.",
          "**Özel diyetler için seçenek var mı?** Vejetaryen, vegan, glütensiz ve alerjiye duyarlı menü seçeneklerimiz mevcut.",
          "**Düğün pastası nasıl ayarlanıyor?** Anlaşmalı pasta ustalarımızla özel tasarım pasta hazırlanabiliyor; dilerseniz kendi pastanızı da getirebilirsiniz.",
        ],
      },
      { type: "h2", text: "Fiyat ve sözleşme" },
      {
        type: "list",
        items: [
          "**Pakete neler dahil, neler ekstra?** Masa, sandalye, temel dekor, ses-ışık, DJ ve hazırlık odası dahil; fotoğraf-video ve vale gibi hizmetler ekstra. Tam liste [fiyat rehberimizde](/blog/kir-dugunu-fiyatlari).",
          "**Ödeme planı nasıl?** Sözleşmede %50 kapora alınır, kalan tutar etkinlik öncesi tamamlanır. Nakit ödemede %5 ek indirim uygulanır, fiyatlara KDV dahil değildir.",
          "**Sözleşmeden sonra değişiklik yapabilir miyim?** Evet, ancak kişi sayısı ve menü gibi değişiklikler güncel fiyatlar üzerinden sözleşmeye yansıtılır.",
        ],
      },
      { type: "h2", text: "Gün akışı ve konfor" },
      {
        type: "list",
        items: [
          "**Etkinlik kaçta bitiyor?** Standart paketlerimizde müzik ve eğlence gece 23:00'a kadar sürer; uzatma talepleri önceden görüşülür.",
          "**Gelin ve damat için hazırlık odası var mı?** Evet, aynalı ve aydınlık gelin hazırlık odası ile damat odası mevcut.",
          "**Otopark, erişim ve temel ihtiyaçlar nasıl?** Geniş ve güvenli otopark, istenirse vale hizmeti, engelli erişimine uygun rampalı geçişler, kadın-erkek WC ve mescit bulunuyor.",
        ],
      },
      {
        type: "quote",
        text: "Doğru mekân, sorduğunuz her soruya net ve yazılı bir cevap verebilen mekândır.",
      },
      { type: "h2", text: "Son bir tavsiye" },
      {
        type: "p",
        text: "Mekânı mümkünse düğün yapacağınız saatte ve mevsimde gezin. Işığın nereden geldiğini, akşam havanın nasıl değiştiğini ve misafirlerin nereden giriş yapacağını görmek, kararınızı çok kolaylaştırır. Gezi randevusu için [bize ulaşın](/iletisim); aklınıza takılan diğer sorular için [Sıkça Sorulan Sorular](/sss) sayfamız da hazır.",
      },
    ],
  },

  // ───────────────────────── 10
  {
    slug: "dugun-menusu-secimi",
    title: "Düğün Menüsü Nasıl Seçilir? Kokteylden Set Menüye Rehber",
    excerpt:
      "Kokteyl mi, tabak menü mü, set menü mü? Davetinizin saatine, misafir profilinize ve bütçenize göre doğru menüyü seçmenin yolları.",
    category: "Lezzet",
    coverImage: MEDIA.photos.masaDuzeniJPG,
    coverAlt: "Özenle servis edilmiş düğün yemeği tabakları",
    author: "Anatolia Event",
    publishedAt: "2026-07-27",
    content: [
      {
        type: "p",
        text: "Misafirlerin düğünden aklında kalan ilk şeylerden biri yemektir. Ama doğru menüyü seçmek sadece neyin lezzetli olduğuna karar vermek değildir; davetin saati, süresi, misafir profili ve bütçe de bu kararın bir parçasıdır. Anatolia Event'teki altı menü seçeneği üzerinden, hangisinin kime uygun olduğunu anlatalım.",
      },
      { type: "h2", text: "Kokteyl ve ordövr menüler: Hafif ve sosyal" },
      {
        type: "p",
        text: "**Kokteyl Menü**, misafirlerin ayakta sohbet ettiği, akışın serbest olduğu davetler için idealdir. Sebze buketi, kuruyemiş, çiğ köfte, su böreği, mini pizza ve dilim pasta gibi lezzetlerden oluşur. **Ordövr Menü** ise buna zeytinyağlı yaprak sarma, Amerikan salatası, havuç tarator gibi seçenekler ekleyerek sofrayı biraz daha zenginleştirir. Öğleden sonra yapılan ya da daha kısa süren davetler için iyi birer seçimdir.",
      },
      { type: "h2", text: "Tabak menüler: Klasik ve doyurucu" },
      {
        type: "p",
        text: "Akşam yemeği saatine denk gelen düğünlerde misafirler doyurucu bir sofra bekler. **Tavuk Tabak Menü**, özel soslu tavuk pirzola, tereyağlı pirinç pilavı ve baharatlı patatesle en çok tercih edilen menümüzdür. Kırmızı et sevenler için **Et Tabak Menü**, sebzeli baharatlı et sote ile aynı yapıyı sunar.",
      },
      { type: "h2", text: "Set menüler: En kapsamlı deneyim" },
      {
        type: "p",
        text: "**Tavuk Set** ve **Et Set** menüler, ana yemeğin öncesine dilim su böreği, Antakya usulü ezme, kaşar peyniri ve haydariden oluşan bir başlangıç tabağı ekler. Uzun süren, oturmalı ve servisli bir akşam yemeği hayal ediyorsanız en kapsamlı seçenek budur.",
      },
      {
        type: "p",
        text: "Tüm menüler karşılamada sebze buketi ve kuruyemiş, sonunda dilim pasta ve soft içecek içerir ve minimum 250 kişi için geçerlidir. İçeriklerin tamamını [Menülerimiz](/menuler) sayfasında görebilirsiniz.",
      },
      {
        type: "quote",
        text: "Doğru menü, misafirlerinizi doyuran değil, gecenin akışına eşlik eden menüdür.",
      },
      { type: "h2", text: "Karar verirken sorulacak sorular" },
      {
        type: "list",
        items: [
          "**Davet kaçta başlıyor?** Öğleden sonra davetlerinde hafif, akşam davetlerinde doyurucu menüler öne çıkar.",
          "**Misafirler oturacak mı, ayakta mı olacak?** Ayakta sosyalleşme ağırlıklıysa kokteyl, oturmalı yemekse tabak veya set menü.",
          "**Misafirlerin arasında özel beslenenler var mı?** Vejetaryen, vegan, glütensiz ve alerjiye duyarlı seçenekleri önceden bildirmeniz yeterli.",
          "**Bütçe nasıl dağılıyor?** Menü, kişi başı hesaplandığı için toplam bütçeyi en çok etkileyen kalemdir. Ayrıntılar [fiyat rehberimizde](/blog/kir-dugunu-fiyatlari).",
        ],
      },
      { type: "h2", text: "Tadım: Kararın en keyifli kısmı" },
      {
        type: "p",
        text: "Seçiminizi kâğıt üzerinde yapmak zorunda değilsiniz. Düğününüzden önce menü tadım randevusu ayarlayarak yemekleri birlikte deneyimleyebilir, tercihlerinize göre menünüzü özelleştirebilirsiniz. Tadım randevusu için [bizimle iletişime geçin](/iletisim).",
      },
    ],
  },

  // ───────────────────────── 11
  {
    slug: "kalabalik-dugunde-misafir-deneyimi",
    title: "Kalabalık Bir Düğünde Her Misafiri Ağırlamak",
    excerpt:
      "Yüzlerce kişilik bir davette bile misafirlerin kendini özel hissetmesi mümkün. Akış, oturma düzeni ve küçük jestler üzerine notlar.",
    category: "Misafirler",
    coverImage: MEDIA.photos.masaDuzeni,
    coverAlt: "Bahçede kurulmuş uzun masalarda sohbet eden misafirler",
    author: "Anatolia Event",
    publishedAt: "2026-07-20",
    content: [
      {
        type: "p",
        text: "Misafir sayısı arttıkça düğünün samimiyetini korumak zorlaşıyor gibi görünür. Oysa iyi kurgulanmış bir akışta, kalabalık bir davet bile her misafire ayrı ayrı ilgi gösterilmiş gibi hissettirebilir. Sır, misafirin gözünden düşünmekte.",
      },
      { type: "h2", text: "İlk beş dakika her şeydir" },
      {
        type: "p",
        text: "Misafir mekâna vardığında nereye gideceğini bilmeli. Rahat bir otopark, girişte karşılayan biri, açık yönlendirmeler ve bekleme sırasında ikram edilen bir içecek, gecenin geri kalanının tonunu belirler. Geniş otoparkımız misafirlerinizi rahatça karşılar; çok kalabalık davetlerde vale hizmeti de ekleyebilirsiniz.",
      },
      { type: "h2", text: "Oturma planını hikâye gibi kurun" },
      {
        type: "list",
        items: [
          "Birbirini tanıyan grupları yakın, ama tamamen ayrı adacıklar hâlinde değil yerleştirin.",
          "Yaşlı misafirleri müzikten biraz uzak, ulaşımı kolay masalara alın. Rampalı geçişler, hareket kısıtı olan misafirlerin de rahatça dolaşmasını sağlar.",
          "Çocuklu aileleri çıkışlara ve açık alana yakın tutun.",
          "Pakette yer alan 2 rezerve aile masasını, ailelerinizin en yakınlarına ayırın.",
        ],
      },
      {
        type: "quote",
        text: "Misafirleriniz düğünü sizin yaşadığınız gibi değil, oturdukları masadan yaşar.",
      },
      { type: "h2", text: "Alanı akışa göre bölün" },
      {
        type: "p",
        text: "Geniş bir bahçenin en büyük avantajı burada ortaya çıkar: alan, kalabalığı dağıtır. Kokteyl için bir köşe, yemek için ayrı bir alan ve dans için başka bir sahne kurulduğunda, yüzlerce kişi aynı anda nefes alabilir. 1.300 kişiye kadar hizmet veren açık alanımız bu tür bir akış için tasarlandı.",
      },
      { type: "h2", text: "Küçük jestler, büyük etkiler" },
      {
        type: "p",
        text: "El yazısıyla isim kartları, akşam serinliği için hazırlanmış şallar ya da gece sonunda verilen küçük bir hatıra; bunların hiçbiri büyük bütçe gerektirmez ama misafirlerin hatırladığı şeyler genellikle bunlardır. Menü kartı, hediyelik ve kumaş peçete gibi seçenekleri de organizasyonunuza ekleyebilirsiniz.",
      },
      {
        type: "p",
        text: "Misafirlerinize önceden kıyafet konusunda yol göstermek isterseniz [davetli kıyafet rehberimizi](/blog/kir-dugunu-ne-giyilir) paylaşabilirsiniz. Daha küçük ve samimi bir kutlama düşünüyorsanız [Micro Wedding yazımız](/blog/micro-wedding-kucuk-dugun) ilginizi çekebilir.",
      },
    ],
  },

  // ───────────────────────── 12
  {
    slug: "soz-nisan-isteme-organizasyonu",
    title: "İsteme, Söz ve Nişan: Düğün Öncesi Kutlamalar İçin Bahçe Rehberi",
    excerpt:
      "Geleneklerin en güzel yansıması olan isteme, söz ve nişan törenlerini doğanın içinde, samimi ama şık bir atmosferde nasıl planlayabilirsiniz?",
    category: "Organizasyon",
    coverImage: MEDIA.photos.yukarıdanGece,
    coverAlt: "Çiçeklerle süslenmiş, nişan için hazırlanmış zarif masa düzeni",
    author: "Anatolia Event",
    publishedAt: "2026-07-10",
    content: [
      {
        type: "p",
        text: "Düğün, uzun bir yolculuğun en görkemli durağıdır; ama bu yolculuk çok daha önce, iki ailenin ilk kez bir araya geldiği o özel günlerle başlar. İsteme, söz ve nişan törenleri hem geleneklerimizin en güzel yansıması hem de ailelerin birbirini tanıdığı ilk büyük buluşmalardır. Bu yüzden atmosferi en az düğün kadar özen ister.",
      },
      { type: "h2", text: "İsteme ve söz: Butik ve samimi" },
      {
        type: "p",
        text: "İsteme ve söz törenleri genellikle sadece en yakın aile ve arkadaşlarla yapılır. Bu yüzden kalabalık bir salon yerine, sıcak ve sakin bir ortam çok daha anlamlıdır. Bu törenler için butik oturma düzeni, özel Türk kahvesi sunumu, çiçek süslemeli arka fon ve misafirleri karşılayan bir ekip hazırlıyoruz. Geleneklerin hakkını veren ama lüksünden hiçbir şey kaybetmeyen bir davet.",
      },
      {
        type: "quote",
        text: "Bir fincan Türk kahvesi, iki ailenin birbirine verdiği ilk sözdür.",
      },
      { type: "h2", text: "Nişan: Zarif bir başlangıç" },
      {
        type: "p",
        text: "Nişan, evliliğe atılan ilk büyük adım ve genellikle istemeye göre daha kalabalık bir kutlamadır. Konsept tasarımı, özel fotoğraf çekim alanları, zarif masa süslemeleri ve DJ ile müzik organizasyonu bu günü taçlandıran detaylardır. Romantik aydınlatmalar ve doğanın sunduğu doğal dekorla nişanınız, düğününüzün habercisi olur.",
      },
      { type: "h2", text: "Planlama ipuçları" },
      {
        type: "list",
        items: [
          "Tarihi iki ailenin de rahat edebileceği bir güne koyun; hafta sonu öğleden sonraları genellikle en uygun saatlerdir.",
          "İsteme için uzun bir program yerine, kahve, tatlı ve sohbet etrafında şekillenen kısa bir akış planlayın.",
          "Nişanda fotoğraf çekimini gün ışığı varken yapın; ipuçları için [altın saat yazımıza](/blog/altin-saatte-dugun-fotografi) göz atın.",
          "Soğuk aylarda kapalı alanımız, sıcak ve samimi bir ortam sunar.",
          "Düğününüzü de aynı mekânda düşünüyorsanız, nişan aynı zamanda mekânı tanımak için güzel bir fırsattır.",
        ],
      },
      { type: "h2", text: "Sadece düğün değil" },
      {
        type: "p",
        text: "Bahçemiz evlilik teklifinden yıldönümüne, kahvaltı organizasyonundan doğum gününe, mezuniyetten kurumsal etkinliklere kadar pek çok özel güne ev sahipliği yapıyor. Tüm organizasyon türlerini [Hizmetlerimiz](/hizmetlerimiz) sayfasında bulabilirsiniz.",
      },
      {
        type: "p",
        text: "İsteme, söz ya da nişanınızı planlamak için [bize ulaşın](/iletisim). Ailelerinizin bir araya geleceği bu günü, birlikte en güzel hâliyle hazırlayalım.",
      },
    ],
  },
];
