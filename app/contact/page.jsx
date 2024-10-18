"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendContactForm } from "@/lib/api";
import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Map, Mail } from "lucide-react";

const info = [
  { icon: <Phone />, title: "تلفون", Description: "(+966) 505 436 532" },
  {
    icon: <Mail />,
    title: "بريد الكتروني",
    Description: "alhuwaimel.m@gmail.com",
  },
  {
    icon: <Map />,
    title: "Address",
    Description: "Riaydh  الرياض Saudi Arabia",
  },
];

const initValues = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  message: "",
};

const initState = {
  values: initValues,
  isLoading: false,
  isSent: false,
  isError: false,
};

const Contact = () => {
  const [state, setState] = useState(initState);

  // Destructure values and state
  const { values, isLoading, isSent, isError } = state;

  // Handle input change
  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  // Handle form submission
  const onSubmit = async (e) => {
    // Prevent default form submission
    e.preventDefault();

    // Check if the form is valid
    const isValid = Object.values(values).every((value) => value.trim() !== "");

    if (!isValid) {
      setState((prev) => ({ ...prev, isError: true }));
      return; // Prevent submission if not valid
    }

    // Set loading state to true before submission
    setState((prev) => ({ ...prev, isLoading: true }));

    try {
      // Attempt to send the contact form
      await sendContactForm(values);

      // If successful, set isSent to true and reset loading and error state
      setState((prev) => ({
        ...prev,
        isLoading: false,
        isSent: true,
        isError: false,
      }));
    } catch (error) {
      // If error occurs, set isError to true and reset loading
      setState((prev) => ({
        ...prev,
        isLoading: false,
        isSent: false,
        isError: true,
      }));
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto mb-24">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] md:w-[62%] order-2  xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent font-[family-name:var(--font-almarai)]">
                إتصـل بي
              </h3>{" "}
              {/* input*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="الاسم الأول"
                  required
                  value={values.firstname}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="اسم العائلة"
                  required
                  value={values.lastname}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="البريد "
                  required
                  value={values.email}
                  onChange={handleChange}
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="رقم الهاتف"
                  value={values.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="اكتب رسالتك...."
                requirevalue={values.message}
                rows={6}
                required
                onChange={handleChange}
              />
              {/* btn*/}
              <Button
                variant="outline"
                className="  max-w-40 flex font-thin text-accent font-[family-name:var(--font-cairo-regular)] items-center gap-2 bg-dark border-accent rounded-2xl hover:font-bold "
                onClick={onSubmit}
                disabled={isLoading} // Disable button while submitting
              >
                {isLoading ? "الرجاء الانتظار..." : "إرسـال"}
              </Button>
              {/* Display feedback message based on form submission status */}
              {isSent && (
                <p className="text-green-500">
                  تم ارسال الرسالة ، شكراً على تواصلك
                </p>
              )}
              {isError && (
                <p className="text-red-500">لم يتم ارسال الرسالة هناك خطأ</p>
              )}
            </form>
          </div>
          {/* info*/}
          <div className=" flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex gap-6 items-center">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 dir="ltr" className="text-xl">
                        {item.Description}
                      </h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
