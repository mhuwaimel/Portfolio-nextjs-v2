import Link from "next/link";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="py-8 text-white xl:py-12 ">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/">
          <h1 className="text-3xl font-semibold font-[family-name:var(--font-rakkas-regular)] ">
            محمد الهويمل <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="items-center hidden gap-8 xl:flex font-[family-name:var(--font-changa-regular)] ">
          <Nav />
        </div>

        {/* Mobile nav */}
        <div className="md:hidden ">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
