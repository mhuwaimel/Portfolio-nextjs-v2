"use client";

import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { experienceData } from "@/data/experience";

const Services = () => {
  return (
    <div className="container px-4 py-8 mx-auto min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
        className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-accent before:to-transparent md:before:mx-auto md:before:translate-x-0"
      >
        {experienceData.map((item, index) => (
          <div
            key={index}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 border border-accent rounded-full shadow bg-accent shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="text-accent-foreground font-bold text-black">
                {experienceData.length - index}
              </span>
            </div>
            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl tracking-wide font-bold font-[family-name:var(--font-almarai)]">
                  {item.position}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="pb-2 text-lg font-medium text-accent">
                  {item.Start}-{item.EndJob}
                </p>

                <ul className="pl-4 space-y-2 text-justify font-[family-name:var(--font-cairo-regular)]">
                  {/* {item.Description} */}
                  {item.Place.length > 0 && item.Place + " - "}{" "}
                  {item.Description}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
