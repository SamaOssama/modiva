import { useState, useEffect } from "react";
import { Star, ArrowRight } from "lucide-react";

export default function OutfitSlider() {
  const [outfits, setOutfits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOutfits = async () => {
      try {
        const response = await fetch("https://6aa12e542703577aa1e361e3.mockapi.io/outfits");
        
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        
        let data = await response.json();

        if (data.length === 1 && Array.isArray(data[0])) {
          data = data[0];
        }

        setOutfits(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching outfits:", error);
        setLoading(false);
      }
    };

    fetchOutfits();
  }, []);

  return (
    <section className="w-full px-12 py-16 max-w-[1440px] mx-auto">
      
      <h2 className="text-[48px] md:text-[56px] font-serif uppercase leading-[1.1] mb-12 w-full text-[#333333]" style={{ fontFamily: "'Playfair Display', serif" }}>
        BEST OUTFIT FOR YOUR HAPPINESS
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-[400px]">
          <p className="text-xl text-gray-500">Loading outfits...</p>
        </div>
      ) : outfits.length === 0 ? (
        <div className="flex justify-center items-center h-[400px]">
          <p className="text-xl text-red-500">we don't have any outfits to show</p>
        </div>
      ) : (
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
         {outfits.map((item, index) => (
<div key={item.id || index} className="min-w-[280px] md:min-w-[320px] snap-start flex flex-col group cursor-pointer">              
              <div className="relative w-full h-[420px] mb-5 overflow-hidden bg-gray-100">
                <img 
                  src={item.image || "https://images.unsplash.com/photo-1515347619362-67fd1db41459?w=500&q=80"} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                
                <div className="absolute top-4 right-4 bg-[#00a79d] text-white text-xs font-bold px-2.5 py-1 flex items-center gap-1">
                  <Star size={12} fill="currentColor" className="text-white" />
                  4.95 
                </div>
              </div>

              <p className="text-[10px] text-[#888888] uppercase tracking-[0.15em] mb-1">
                {item.category || "PRODUCT CATEGORY"}
              </p>
              <h3 className="font-serif text-[22px] text-[#333333] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                {item.name || "Product Name"}
              </h3>
              <p className="text-sm text-[#888888]">
                ${item.price || "0.00"}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8">
        <button className="bg-[#00a79d] text-white px-8 py-3.5 text-sm font-semibold tracking-wider flex items-center gap-2 hover:bg-[#008f86] transition-colors">
          SEE MORE <ArrowRight size={16} />
        </button>
      </div>

    </section>
  );
}