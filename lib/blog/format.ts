// Saf yardımcı fonksiyonlar: hem sunucu hem tarayıcı bileşenlerinde güvenle kullanılabilir.

export function formatDate(iso: string): string {
  return new Date(iso + "T12:00:00").toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatMonthYear(iso: string): string {
  return new Date(iso + "T12:00:00").toLocaleDateString("tr-TR", {
    month: "long",
    year: "numeric",
  });
}

/** Başlıklardan içindekiler bağlantısı (id) üretir. */
export function slugifyHeading(text: string): string {
  const map: Record<string, string> = { ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u", â: "a", î: "i", û: "u" };
  return text
    .toLocaleLowerCase("tr-TR")
    .replace(/[çğıöşüâîû]/g, (c) => map[c] ?? c)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** [metin](/adres) ve **kalın** işaretlerini düz metne çevirir (sayım, meta açıklama vb. için). */
export function stripInline(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");
}
