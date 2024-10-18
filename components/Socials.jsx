import Link from "next/link";
import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

const Socials = ({ containerStyles, iconStyles }) => {
  const socials = [
    {
      path: "https://github.com/mhuwaimel",
      icon: <Github />,
    },
    { path: "https://www.linkedin.com/in/mhuwimmel/", icon: <Linkedin /> },

    { path: "https://www.instagram.com/mhuwaimel/", icon: <Instagram /> },
  ];

  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
