import { groq } from '@ai-sdk/groq';
import { streamText, tool, convertToModelMessages, stepCountIs } from 'ai';
import { z } from 'zod';
import { searchKnowledge } from '@/lib/embeddings';

export const maxDuration = 120;
export async function POST(req: Request) {
  const { messages } = await req.json();
  const converted = await convertToModelMessages(messages);

  const bugununTarihi = new Date().toLocaleDateString('tr-TR', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  const SYSTEM_PROMPT = `Sen Anatolia Event kır düğünü ve etkinlik mekanının resmi yapay zeka asistanısın.

BUGÜNÜN TARİHİ: ${bugununTarihi}

ÖNEMLİ KURALLAR:
- Asla <function> tag'i veya başka format kullanma. Sadece tool_call formatını kullan.

GERÇEK İŞLETME BİLGİLERİ (sadece bunları kullan, başka bilgi üretme):
- Adres: Mithatpaşa, Kumsu Sk. No:55, 34075 Eyüpsultan/İstanbul
- Telefon / WhatsApp: 0533 305 89 97
- E-posta: anatoliaevent@gmail.com
- Instagram: @anatoliaeventkirdugunu
- Çalışma saatleri: Pazartesi-Cuma 09:00-19:00, Cumartesi 10:00-17:00, Pazar randevuya göre

YANITLAMA FORMATI:
- Asla * veya ** kullanma (bold, italic, liste işareti olarak).
- Madde sıralarken * yerine - kullan ya da düz cümle yaz.
- Vurgu yapmak istediğinde "tırnak içine al" veya büyük harf kullan.
- Emoji kullanabilirsin ama az ve yerinde kullan.
- Kısa, sade ve okunması kolay cümleler yaz.

GÖREVLERİN (BUNLARA KESİNLİKLE UYACAKSIN):
1. BİLGİ SORULARI: Kullanıcı kapasite, mekan, menü, dekorasyon, ödeme, rezervasyon süreci gibi herhangi bir konuda soru sorduğunda MUTLAKA searchFAQ tool'unu kullan, kendi bilgine göre tahmini cevap verme.
2. REZERVASYON/TARİH TALEBİ: Kullanıcı "rezervasyon yapmak istiyorum", "tarih ayırtmak istiyorum", "randevu almak istiyorum" derse KESİNLİKLE tool kullanma. Doğrudan +90 533 305 89 97 numaralı telefon/WhatsApp hattımızdan iletişime geçmesini veya bize e-posta atmasını söyle.
3. BİLİNMEYEN/BELİRSİZ SORULAR: searchFAQ sonucu soruyla alakasızsa veya yetersizse, kesinlikle tahmini/uydurma cevap verme. Bunun yerine +90 533 305 89 97 numaralı telefon/WhatsApp hattımıza yönlendir.
4. KISA VE PROFESYONEL OL: Yanıtların her zaman sıcak, samimi, profesyonel ve kısa olmalı.`;

  const models = [
    groq('qwen/qwen3.6-27b'),
    groq('openai/gpt-oss-120b'),
    groq('openai/gpt-oss-20b'),
  ];

  for (let i = 0; i < models.length; i++) {
    try {
      const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000); // 25 saniye

      const result = streamText({
        model: models[i],
        system: SYSTEM_PROMPT,
        messages: converted,
        stopWhen: stepCountIs(5),
        maxOutputTokens: 4096,
        abortSignal: controller.signal,
         onStepFinish: ({ text, toolCalls, toolResults, finishReason }) => {
          clearTimeout(timeoutId);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🔹 ADIM TAMAMLANDI');
    console.log('Bitiş sebebi:', finishReason);
    if (toolCalls.length > 0) {
      console.log('📞 Çağrılan tool(lar):', toolCalls.map(tc => ({
        name: tc.toolName,
        args: tc.input
      })));
    }
    if (toolResults.length > 0) {
      console.log('📦 Tool sonuçları:', JSON.stringify(toolResults, null, 2));
    }
    if (text) {
      console.log('💬 Üretilen metin:', text);
    }
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  },
        tools: {
          searchFAQ: tool({
            description: 'Anatolia Event\'in kapasite, mekan, menü, dekorasyon, ödeme, rezervasyon süreci gibi konularda sıkça sorulan sorularda bilgi arar.',
            inputSchema: z.object({
              question: z.string().describe('Kullanıcının sorduğu soru veya konu'),
            }),
            execute: async ({ question }) => {
  try {
    console.log('🔍 searchFAQ çağrıldı, soru:', question);
    const results = await searchKnowledge(question, 3);
    console.log('📊 Bulunan sonuçlar:', JSON.stringify(results, null, 2));

    if (results.length === 0) {
      return 'Bu konuda sistemde bilgi bulunamadı.';
    }

    return results.map(r => r.content).join(' ');
  } catch (err) {
    console.error('❌ searchFAQ hatası:', err);
    return 'Bilgi tabanı sorgusu sırasında bir hata oluştu.';
  }
},
          }),
        },
      });

       return result.toUIMessageStreamResponse();

  } catch (err: unknown) {
    const isRateLimit = err instanceof Error && (
      err.message.includes('429') ||
      err.message.includes('rate') ||
      err.message.includes('limit')
    );
    const isTimeout = err instanceof Error && err.name === 'AbortError';

    if ((isRateLimit || isTimeout) && i < models.length - 1) {
      console.warn(`Model ${i} ${isTimeout ? 'zaman aşımına uğradı' : 'rate limit yedi'}, sonraki deneniyor...`);
      continue;
    }

    throw err;
  }
}

  throw new Error('Tüm modeller başarısız.');
}