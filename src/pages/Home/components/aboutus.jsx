import { ThumbsUp, Phone, Rocket, CreditCard } from "lucide-react";

export default function AboutUs() {
  const loremText =
    "Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis.";

  return (
    <section className="w-full px-12 py-12 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
     
        <div className="bg-[#EDEDED] p-5">
          <div className="bg-white p-8 flex flex-col items-center text-center h-full justify-center">
            <div className="w-14 h-14 rounded-full bg-maincolor flex items-center justify-center text-white mb-6 shrink-0">
              <ThumbsUp size={22} className="fill-current" />
            </div>
            <h3 className="font-playfair text-[28px] text-[#3E3E3E] leading-[36px] mb-3">
              100% Satisfaction <br /> Guaranteed
            </h3>
            <p className="font-lato text-xs font-normal text-gray-500 max-w-[270px]">
              {loremText}
            </p>
          </div>
        </div>

      
        <div className="flex flex-col gap-6 justify-between">
          {/* Top Card */}
          <div className="bg-[#EDEDED] p-5 flex-1 flex items-center">
            <div className="bg-white p-6 w-full flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-maincolor flex items-center justify-center text-white shrink-0">
                <Phone size={22} className="fill-current" />
              </div>
              <div>
                <h3 className="font-playfair text-[28px] text-[#3E3E3E] leading-[36px] mb-1">
                  24/7 Online Service
                </h3>
                <p className="font-lato text-xs font-normal text-gray-500">
                  {loremText}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Card */}
          <div className="bg-[#EDEDED] p-5 flex-1 flex items-center">
            <div className="bg-white p-6 w-full flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-maincolor flex items-center justify-center text-white shrink-0">
                <Rocket size={22} className="fill-current" />
              </div>
              <div>
                <h3 className="font-playfair text-[28px] text-[#3E3E3E] leading-[36px] mb-1">
                  Fast Delivery
                </h3>
                <p className="font-lato text-xs font-normal text-gray-500">
                  {loremText}
                </p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="bg-[#EDEDED] p-5">
          <div className="bg-white p-8 flex flex-col items-center text-center h-full justify-center">
            <div className="w-14 h-14 rounded-full bg-maincolor flex items-center justify-center text-white mb-6 shrink-0">
              <CreditCard size={22} />
            </div>
            <h3 className="font-playfair text-[28px] text-[#3E3E3E] leading-[36px] mb-3">
              Payment With <br /> Secure System
            </h3>
            <p className="font-lato text-xs font-normal text-gray-500 max-w-[270px]">
              {loremText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
