import "./globals.css";

import Header from "@/components/Shared/Header";
import StairTransition from "@/components/Animations/StairTransition";
import Transition from "@/components/Animations/Transition";
import { Footer } from "@/components/Shared/Footer";
import {
  almaraiFont,
  cairoRegular,
  changaRegular,
  lateefRegular,
  rakkasRegular,
  tajawalRegular,
} from "@/lib/fonts";
import { siteConfig } from "@/lib/seo";

// Define your fonts as local variables and use them in your components.
export const metadata = {
  metadataBase: new URL(siteConfig.url),
  robots: {
    index: true,
    follow: true,
  },
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  verification: {
    google: "",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,

  authors: [
    {
      name: "محمد الهويمل",
      url: "https://github.com/mhuwaimel",
    },
  ],

  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body
        dir="rtl"
        suppressHydrationWarning
        className={` ${almaraiFont.variable}
          ${cairoRegular.variable}  ${changaRegular.variable}
          ${rakkasRegular.variable} ${tajawalRegular.variable} 
         ${lateefRegular.variable}
          antialiased`}
      >
        <Header />
        <StairTransition />
        <Transition>{children} </Transition>
        <Footer />
      </body>
    </html>
  );
}
