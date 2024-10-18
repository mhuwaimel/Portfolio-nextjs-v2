import { Button } from "@/components/ui/button";
import React from "react";

const NotFound = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h1 className="mb-4 font-extrabold tracking-tight text-7xl lg:text-9xl text-accent dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-400 md:text-4xl dark:text-white">
            خطأ
          </p>
          <p className="mb-4 text-lg font-light text-gray-400 dark:text-gray-400">
            الصفحة المطلوبة غير صحيحة
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <a href="/">
          <Button
            variant="outline"
            className="flex items-center gap-2 uppercase rounded-lg bg-dark border-accent"
          >
            عودة
          </Button>
        </a>
      </div>
    </section>
  );
};

export default NotFound;
