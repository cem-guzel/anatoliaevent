import { Cormorant_Garamond } from "next/font/google";
import "./blog.css";

// Blog'a özel dergi başlık yazı tipi. Sitenin geri kalanını etkilemez.
const editorial = Cormorant_Garamond({
  variable: "--font-editorial",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <div className={editorial.variable}>{children}</div>;
}
