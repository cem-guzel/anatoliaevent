import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// 1. GET: Tüm fotoğrafları veritabanından getir (En yeniler en üstte)
export async function GET() {
  try {
    const images = await prisma.galleryImage.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(images);
 } catch (error) {
    console.error("GET API HATASI:", error); // <-- BUNU EKLE
    return NextResponse.json({ error: "Fotoğraflar getirilemedi." }, { status: 500 });
  }
}

// 2. POST: Yeni yüklenen fotoğrafın linkini veritabanına kaydet
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { publicId, url, altText } = body;

    const newImage = await prisma.galleryImage.create({
      data: {
        publicId,
        url,
        altText: altText || "Anatolia Event Galeri",
      },
    });

    return NextResponse.json(newImage);
 } catch (error) {
    console.error("POST API HATASI:", error); // <-- BUNU EKLE
    return NextResponse.json({ error: "Fotoğraf kaydedilemedi." }, { status: 500 });
  }
}

// 3. DELETE: Seçilen fotoğrafı veritabanından sil
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    
    if (!id) return NextResponse.json({ error: "ID bulunamadı." }, { status: 400 });

    await prisma.galleryImage.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Fotoğraf silinemedi." }, { status: 500 });
  }
}