import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// 1. GET: Tüm içerikleri getir
export async function GET() {
  try {
    const items = await prisma.galleryImage.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(items);
  } catch (error) {
    console.error("GET API HATASI:", error);
    return NextResponse.json({ error: "İçerikler getirilemedi." }, { status: 500 });
  }
}

// 2. POST: Yeni yüklenen içeriği (resim/video) kaydet
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { publicId, url, altText, resourceType } = body;

    const newItem = await prisma.galleryImage.create({
      data: {
        publicId,
        url,
        altText: altText || "Anatolia Event Galeri",
        resourceType: resourceType || "image", // YENİ: Cloudinary'den gelen tipi kaydet
      },
    });

    return NextResponse.json(newItem);
  } catch (error) {
    console.error("POST API HATASI:", error);
    return NextResponse.json({ error: "İçerik kaydedilemedi." }, { status: 500 });
  }
}

// 3. DELETE: Seçilen içeriği sil
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
    return NextResponse.json({ error: "İçerik silinemedi." }, { status: 500 });
  }
}