export default function Footer() {
  return (
    <footer className="w-full bg-maincolor text-white px-10.75 pt-57.5 pb-12">
      <div className="w-full  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col gap-8">
            <h2 className="font-playfair text-5xl uppercase tracking-wider ">
              MODEVA
            </h2>
            <div className="font-lato text-xs font-normal space-y-2">
              <p className="flex">
                <span className="w-20 shrink-0">WhatsApp</span>
                <span>: +62 859 9999 999</span>
              </p>
              <p className="flex">
                <span className="w-20 shrink-0">Email</span>
                <span>: hello@modeva.com</span>
              </p>
              <p className="flex">
                <span className="w-20 shrink-0">Address</span>
                <span>
                  : Lorem ipsum street Block B Number 08, Jakarta, Indonesia,
                  12345
                </span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">Menu</h3>
            <ul className="font-lato text-xs font-normal space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Sale
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Formal Men
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Formal Woman
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Casual Men
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Casual Woman
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">Get Help</h3>
            <ul className="font-lato text-xs font-normal space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Refund and Return
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">Account</h3>
            <ul className="font-lato text-xs font-normal space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  My Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Vouchers and Discounts
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center font-lato text-xs font-light space-y-1">
          <p>All rights reserved</p>
          <p>Copyright 2026 By Modeva Fashion</p>
        </div>
      </div>
    </footer>
  );
}
