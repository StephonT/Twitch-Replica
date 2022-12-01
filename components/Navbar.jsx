import Link from "next/link";
import Image from "next/image";
import React from "react";
import Logo from "../public/assets/images/logo.png";

function Navbar() {
  return (
    <div className="fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px] z-10">
      {/* Left Side */}
      <div className="fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px] z-10">
        {/* Cannot wrap link around another functional component so in this case, I used an "a" tag. I also imported Image from Next.js and used legacyBehavior in Link */}
        <Link href="/" legacyBehavior>
          <a className="flex">
            <Image
              src={Logo}
              alt="Twitch Logo"
              width="36"
              height="36"
              className="cursor-pointer z-10"
            />
          </a>
        </Link>
      </div>

      {/* Middle */}
      {/* Right Side */}
    </div>
  );
}

export default Navbar;
