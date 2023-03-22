import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="bg-black shadow">
        <div className="container mx-auto px-6 py-2 ">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-between items-center">
              <div className="text-xl font-semibold text-gray-700">
                <a
                  href="#"
                  className="text-white text-xl font-bold hover:text-gray-200 md:text-2xl"
                >
                  RELEVANT
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <button
                  type="button"
                  onClick={handleMenuToggle}
                  className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-100"
                  aria-label="toggle menu"
                >
                  {isMenuOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
              className={`md:flex md:items-center ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <a
                href="#"
                className="block mx-4 md:mx-3 lg:mx-4 mt-3 md:mt-0 text-sm md:text-md text-white capitalize hover:text-gray-400"
              >
                Services
              </a>
              <a
                href="#"
                className="block mx-4 md:mx-3 lg:mx-4 mt-3 md:mt-0 text-sm md:text-md text-white capitalize hover:text-gray-400"
              >
                Pricing
              </a>
              <a
                href="#"
                className="block mx-4 md:mx-3 lg:mx-4 mt-3 md:mt-0 text-sm md:text-md text-white capitalize hover:text-gray-400"
              >
                Portfolio
              </a>
              <a
                href="#"
                className="block mx-4 md:mx-3 lg:mx-4 mt-3 md:mt-0 text-sm md:text-md text-white capitalize hover:text-gray-400"
              >
                Industries
              </a>
              <a
                href="#"
                className="block mx-4 md:mx-3 lg:mx-4 mt-3 md:mt-0 text-sm md:text-md text-white capitalize hover:text-gray-400"
              >
                Company
              </a>
              <a
                href="#"
                className="block mx-4 md:mx-3 lg:mx-4 mt-3 md:mt-0 text-sm md:text-md text-white capitalize hover:text-gray-400"
              >
                Insights
              </a>
              <a
                href="#"
                className="block ml-4 mt-3 md lg-3 md:mt-0 text-sm md:text-md text-black bg-white capitalize hover:text-white hover:bg-black pb-[5px] pt-[4px] px-[8px] rounded-3xl border-2 border-white whitespace-nowrap w-[100px] md:w-[100px]"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
