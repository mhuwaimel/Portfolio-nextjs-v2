"use client";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignLeft } from "lucide-react";
import Link from "next/link";

const links = [
  { name: "عنًِـي", path: "/" },

  { name: "الخبرات المهنية", path: "/experience" },
  { name: "أعمالي", path: "/projects" },
  { name: "تواصل", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center ">
        <AlignLeft className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col ">
        <SheetTitle></SheetTitle>
        <SheetDescription></SheetDescription>
        <div className="mb-40 text-2xl text-center mt-35">
          <Link href="/">
            <h1 className="text-3xl  font-[family-name:var(--font-rakkas-regular)] font-semibold">
              محمد الهويمل <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col items-center justify-center gap-4">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={` font-[family-name:var(--font-changa-regular)] ${
                link.path === pathname && "text-accent border-b-2 border-accent"
              }text-xl capitilized  hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
