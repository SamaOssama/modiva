import { Search, ShoppingCart, UserRound, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    {
      name: "Sale",
      path: "#",
    },
    {
      name: "New Arrival",
      path: "#",
    },
    {
      name: "About",
      path: "#",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
  ];

  return (
    <nav className="flex gap-9 items-center px-8 md:px-12 py-4">
      <h1 className="text-5xl font-medium font-playfair">
        <span className="text-maincolor">M</span>ODEVA
      </h1>
      <div className="flex items-center gap-1">
        Catalog
        <ChevronDown size={15} />
      </div>
      <ul className="flex gap-4">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <div className=" flex gap-3 items-center">
   
        <div className="relative">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 "
          />

          <input
            type="text"
            placeholder="Search"
            className="pl-9 bg-white placeholder:text-gray-400 py-1 text-black border-none outline-none"
          />
        </div>

        <UserRound />
        <ShoppingCart />
      </div>
    </nav>
  );
}
