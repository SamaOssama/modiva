import { ChevronDown } from "lucide-react";
import Navbar from "./navbar";

export default function Welcome() {
  return (
    <section className="relative w-full max-w-full h-screen mx-auto bg-cover bg-center bg-[url('/assets/images/Frame%201361.png')] flex flex-col justify-between text-white font-sans">
      <div className="w-full z-10">
        <div className="bg-maincolor w-full py-3 text-center">
          Discount 20% For New Member, ONLY FOR TODAY!!
        </div>

        <Navbar />
      </div>

      <div className="w-full flex flex-col gap-8 p-8 md:p-12">
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-4xl space-y-4 text-left">
            <p className="text-sm  uppercase tracking-[0.2em] text-white">
              Made in Indonesia, Dedicated to Indonesia
            </p>
            <h1 className="text-7xl font-medium font-playfair tracking-wide leading-tight uppercase">
              Discover The Art Of Dressing Up
            </h1>
          </div>

          <div className="flex flex-col gap-4 text-black shrink-0">
         
            <div className="bg-white flex  gap-4 w-110.5 h-50 shadow-md">
              <img
                src="/assets/images/Rectangle 3.png"
                alt="Product"
                className="w-50 h-50 object-cover"
              />
              <div className=" text-left w-51 py-3">
                <h3 className="font-playfair leading-tight text-[28px] ">
                  Product Name in Here
                </h3>
                <p className="text-base text-gray-500 mt-4">$300.000</p>
                <span className="inline-block text-sm font-lato tracking-wider underline uppercase text-[#3E3E3E] mt-11">
                  Shop Now
                </span>
              </div>
            </div>

            <div className="bg-white flex gap-4 w-110.5 h-50 shadow-md">
              <div className="text-left w-51 py-3 pl-4">
                <h3 className="font-playfair leading-tight text-[28px]">
                  Product Name in Here
                </h3>
                <p className="text-base text-gray-500 mt-4">$300.000</p>
                <a
                  href="#"
                  className="inline-block text-sm font-lato tracking-wider underline uppercase text-[#3E3E3E] mt-11"
                >
                  Shop Now
                </a>
              </div>

              <img
                src="/assets/images/Rectangle 3.png"
                alt="Product"
                className="w-50 h-50 object-cover"
              />
            </div>
          </div>
        </div>

        {/* زر Scroll Down */}
        <div className="flex items-center justify-center gap-2 text-base  uppercase tracking-widest text-white">
          <span>Scroll Down</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </section>
  );
}
