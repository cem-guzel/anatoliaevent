import { PrismaClient } from '@prisma/client';
import { generateEmbedding } from './lib/embeddings';

const prisma = new PrismaClient();

const knowledgeChunks = [
  // KONUM & GENEL
  {
    category: 'konum',
    content: 'Anatolia Event, İstanbul Avrupa Yakası\'nda Eyüpsultan Kemerburgaz\'da, şehrin gürültüsünden uzak, asırlık ağaçlarla çevrili doğal bir alanda yer alıyor. Adres: Mithatpaşa, Kumsu Sk. No:55, 34075 Eyüpsultan/İstanbul.'
  },
  {
    category: 'iletisim',
    content: 'Anatolia Event iletişim bilgileri: Telefon ve WhatsApp 0533 305 89 97, e-posta anatoliaevent@gmail.com, Instagram @anatoliaeventkirdugunu.'
  },
  {
    category: 'calisma_saatleri',
    content: 'Anatolia Event çalışma saatleri: Pazartesi-Cuma 09:00-19:00, Cumartesi 10:00-17:00. Pazar günleri randevuya göre görüşme yapılabilir.'
  },
  {
    category: 'hakkinda',
    content: 'Anatolia Event 2021 yılından beri hizmet vermektedir.'
  },

  // KAPASİTE & MEKAN
  {
    category: 'kapasite',
    content: 'Anatolia Event 50 kişilik samimi bir aile buluşmasından 500 kişinin üzerindeki büyük kır düğünlerine kadar esnek kapasite sunar. Misafir sayısına göre en uygun düzen birlikte belirlenir.'
  },
  {
    category: 'acik_kapali_alan',
    content: 'Mekan hem açık hava hem kapalı alan imkanı sunar. Özel açılır kapanır pergole çatı sistemi sayesinde ani hava değişimlerinde bile etkinlik aksamadan devam eder.'
  },
  {
    category: 'otopark',
    content: 'Anatolia Event\'te geniş ve güvenli otopark alanı bulunur. Özel etkinliklerde talep edilirse valet hizmeti de organizasyona eklenebilir.'
  },
  {
    category: 'engelli_erisim',
    content: 'Mekan engelli erişimine uygun olarak tasarlanmıştır, rampalı geçişler ve özel alanlar mevcuttur.'
  },
  {
    category: 'ayni_gun_etkinlik',
    content: 'Anatolia Event\'te aynı gün sadece tek bir etkinlik gerçekleştirilir, birden fazla etkinlik paylaştırılmaz. Bu sayede ekibin tüm ilgisi o günkü etkinliğe ayrılır.'
  },
  {
    category: 'hazirlik_odalari',
    content: 'Gelin ve damat için ayrı, aynalı ve aydınlık hazırlık odaları mevcuttur. Gelinlik giyiminden son rötuşa kadar tüm hazırlıklar bu odalarda konforlu şekilde yapılabilir.'
  },
  {
    category: 'yagmur_durumu',
    content: 'Anatolia Event\'in açılır kapanır pergole sistemi sayesinde yağmurlu havalarda mekan tamamen korunaklı hale gelir, etkinlik hava koşullarından bağımsız devam eder.'
  },

  // REZERVASYON & TARİH
  {
    category: 'rezervasyon_zamanlama',
    content: 'İlkbahar ve yaz sezonunda popüler tarihler hızlı dolduğu için, tarihi güvence altına almak amacıyla en az 6 ile 12 ay öncesinden iletişime geçilmesi öneriliyor. Erken rezervasyonlarda özel avantajlar sunulabiliyor.'
  },
  {
    category: 'etkinlik_saatleri',
    content: 'Etkinlik başlangıç ve bitiş saatleri tercihlere ve yerel yönetmeliklere göre belirlenir. Standart paketlerde gece 23:00\'a kadar müzik ve eğlence imkanı sunuluyor, uzatma talepleri önceden görüşülerek değerlendirilebiliyor.'
  },
  {
    category: 'sozlesme_degisiklik',
    content: 'Sözleşme sonrasında yapılan değişiklikler (menü, kişi sayısı gibi) güncel fiyatlar üzerinden sözleşmeye tekrar yansıtılır, bu yüzden tüm detaylar önceden netleştirilir.'
  },

  // ÖDEME
  {
    category: 'kdv',
    content: 'Anatolia Event fiyatlarına KDV dahil değildir. Teklif aşamasında net tutar ve KDV\'li toplam birlikte sunulur, sürpriz maliyet olmaz.'
  },
  {
    category: 'nakit_indirim',
    content: 'Nakit ödemelerde toplam fiyat üzerinden yüzde 5 ekstra indirim uygulanır. Ödeme yöntemi rezervasyon görüşmesinde belirlenir.'
  },
  {
    category: 'kapora',
    content: 'Sözleşme imzalanırken toplam fiyat üzerinden yüzde 50 oranında kapora alınır. Kalan tutar, etkinlik öncesinde belirlenen tarihe kadar tamamlanır.'
  },

  // YEMEK & MENÜ
  {
    category: 'yemek_hizmeti',
    content: 'Yemek hizmeti Anatolia Event\'in kendi mutfak ekibi ve güvenilir catering ortaklarıyla organize edilir. İsteyen kendi anlaşmalı catering firmasını da getirebilir.'
  },
  {
    category: 'menu_tadimi',
    content: 'Düğün öncesinde menü tadım randevusu ayarlanarak yemekler birlikte deneyimlenebilir ve kişisel tercihlere göre menü özelleştirilebilir.'
  },
  {
    category: 'ozel_diyet',
    content: 'Vejetaryen, vegan, glütensiz ve alerjiye duyarlı menü seçenekleri mevcuttur. Misafirlerin özel beslenme ihtiyaçlarının önceden bildirilmesi yeterlidir.'
  },
  {
    category: 'menu_paketleri',
    content: 'Anatolia Event\'te 6 farklı menü paketi bulunur: Kokteyl, Ordövr, Tavuk Tabak, Et Tabak, Tavuk Set ve Et Set. Bu paketlerin tamamı minimum 250 kişilik etkinlikler için geçerlidir.'
  },
  {
    category: 'dugun_pastasi',
    content: 'Anlaşmalı pasta ustalarıyla konsepte uygun özel tasarım düğün pastası hazırlanabilir. İsteyen kendi pastasını dışarıdan da getirebilir.'
  },

  // DEKORASYON
  {
    category: 'dekorasyon_secenekleri',
    content: 'Rustik kır estetiğinden modern minimalist tasarıma, çiçek ağırlıklı romantik konseptlerden bohem doğa temalarına kadar geniş bir dekorasyon portföyü sunulur. Tercihlere göre tamamen kişiselleştirilmiş konsept hazırlanır.'
  },
  {
    category: 'kendi_dekor',
    content: 'Kişisel dekor malzemeleri ve temaya ait materyaller etkinliğe getirilebilir, ekip bu unsurları mekanın genel estetiğiyle uyumlu şekilde yerleştirir.'
  },

  // HİZMETLER
  {
    category: 'hizmet_turleri',
    content: 'Anatolia Event kır düğünü, davet ve organizasyon (baby shower, doğum günü, mezuniyet, kurumsal etkinlik), isteme, söz, nişan, evlilik teklifi, yıldönümü ve workshop/lansman etkinlikleri düzenlemektedir.'
  },
  {
    category: 'micro_wedding',
    content: 'Anatolia Event, maksimum 200 kişiye kadar olan düğünler için Micro Wedding paketi sunmaktadır.'
  },

  // SÜREÇ
  {
    category: 'surec',
    content: 'Anatolia Event\'te etkinlik süreci şu adımlardan oluşur: ilk görüşme, mekan turu, konsept ve teklif belirleme, ardından etkinlik günü.'
  },
  {
    category: 'mekan_ziyareti',
    content: 'Mekanı ziyaret edip detaylı bilgi almak mümkündür, tanışma ve mekan turu için her zaman randevu alınabilir.'
  }
];

async function seed() {
  console.log(`${knowledgeChunks.length} adet bilgi parçası işlenecek...`);

  for (const chunk of knowledgeChunks) {
    const embedding = await generateEmbedding(chunk.content);
    const vectorString = `[${embedding.join(',')}]`;

    await prisma.$executeRaw`
      INSERT INTO "KnowledgeChunk" (id, content, category, embedding, "createdAt")
      VALUES (gen_random_uuid()::text, ${chunk.content}, ${chunk.category}, ${vectorString}::vector, NOW())
    `;

    console.log(`✓ Eklendi: ${chunk.category}`);
  }

  console.log('Tüm bilgi parçaları başarıyla yüklendi!');
}

seed()
  .catch((e) => {
    console.error('Hata:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });