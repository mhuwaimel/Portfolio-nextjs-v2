import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
const heroContent = {
  heroImage: "img/hero/dark.jpg",
  heroMobileImage: "img-mobile",
  heroTitleName: "محمد بن عبدالعزيز الهويمل",
  heroDesignation: "أب لـــ (ليان – عبدالعزيز – زياد - سعود - ديم)",
  heroDescriptions: `انطلقت رحلتي بست سنوات في عالم البرمجة ....
  ثم مثلها في محاضن التربية والتعليم معلماً......
  والآن منذ خمس سنوات وأنا أمارس دوري القيادي والإشرافي التعليمي......`,
  heroBtn: " Resume المزيد",
};

export default function Home() {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-6 xl:pb-12">
          {/* Text Section */}
          <div className="order-2 text-center xl:text-center xl:order-none">
            <p className="mb-8 text-2xl md:font-extrabold md:text-4xl font-[family-name:var(--font-cairo-regular)]">
              <span className="text-accent ">{heroContent.heroTitleName}</span>
            </p>
            <span className="text-white mb-9 md:mb-6 text-2xl font-[family-name:var(--font-changa-regular)]">
              {heroContent.heroDesignation}
            </span>
            <p
              className="max-w-[500px]  text-3xl md:text-3xl  tracking-wider mx-auto leading-[1.1]  mb-9 mt-6 text-white/80
             text-justify font-[family-name:var(--font-lateef)]"
            >
              {heroContent.heroDescriptions}
            </p>

            {/* Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8 mb-6">
              <a href="/Resume/Mohammed-CV.pdf" target="_blank">
                <Button
                  // onClick={handleClick} //navigate to maintenance
                  variant="outline"
                  className="uppercase flex font-thin text-accent items-center gap-2 bg-dark border-accent rounded-2xl hover:font-bold"
                >
                  <span>Download CV</span>
                  <Download className="text-xl  " />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo Section */}
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
