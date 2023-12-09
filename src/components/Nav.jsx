import { useState } from "react";

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleLinkClick = () => {
    setShowLinks(false);
  };

  return (
    <nav className="relative bg-black text-white h-20 flex items-center justify-between p-4 gap-10">
      <img className="h-auto w-40" src="/jhserenoLogo.png" alt="" />

      <div
        className={`hidden text-center lg:flex justify-center items-center space-x-4 lg:gap-8 ${
          showLinks ? "lg:hidden " : ""
        }`}
      >
        <a className="hover:underline" href="#" onClick={handleLinkClick}>
          Meet The Team
        </a>
        <a className="hover:underline" href="#" onClick={handleLinkClick}>
          Search For Homes
        </a>
        <a className="hover:underline" href="#" onClick={handleLinkClick}>
          Our Communities
        </a>
        <a className="hover:underline" href="#" onClick={handleLinkClick}>
          Home Valuation
        </a>
        <a className="hover:underline" href="#" onClick={handleLinkClick}>
          Services
        </a>
        <a className="hover:underline" href="#" onClick={handleLinkClick}>
          Homes Across America
        </a>
        <a className="hover:underline" href="#" onClick={handleLinkClick}>
          Testimonials
        </a>
        <a className="hover:underline" href="#" onClick={handleLinkClick}>
          Contact Us
        </a>
      </div>
      <div className=" z-20  flex flex-row text-center ">
        <div className="lg:hidden">
          <button onClick={toggleLinks}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {showLinks && (
          <div className="lg:hidden bg-black absolute top-16 right-0 h-30 flex flex-col space-y-2 ">
            <a className="hover:underline" href="#" onClick={handleLinkClick}>
              Meet The Team
            </a>
            <a className="hover:underline" href="#" onClick={handleLinkClick}>
              Search For Homes
            </a>
            <a className="hover:underline" href="#" onClick={handleLinkClick}>
              Our Communities
            </a>
            <a className="hover:underline" href="#" onClick={handleLinkClick}>
              Home Valuation
            </a>
            <a className="hover:underline" href="#" onClick={handleLinkClick}>
              Services
            </a>
            <a className="hover:underline" href="#" onClick={handleLinkClick}>
              Homes Across America
            </a>
            <a className="hover:underline" href="#" onClick={handleLinkClick}>
              Testimonials
            </a>
            <a className="hover:underline" href="#" onClick={handleLinkClick}>
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
