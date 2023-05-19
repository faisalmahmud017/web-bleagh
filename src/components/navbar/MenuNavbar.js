import React, { useState } from "react";
import { Navbar, Button } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
// import Logo from "../../assets/svg/logoWeb.svg";

const MenuNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <div className=""> */}
        <nav className="bg-white shadow-lg fixed dark:bg-gray-900 fixedd w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-0"
                alt="Flowbite Logo"
              />
            </a>
            <div className="flex md:order-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <aside
          id="sidebar-multi-level-sidebar"
          className={
            isOpen
              ? "fixed top-0 right-0 z-40 w-64 h-screen transition-transform -translate-x-full translate-x-0"
              : "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full "
          }
          aria-label="Sidebarr"
        >
          <div className="h-full px-3 py-3 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <button onClick={() => setIsOpen(false)} className="animate-spin ">
              <span className="fw-bold">X</span>
            </button>
            <hr />
            <ul className="space-y-2 mt-2 font-medium">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </aside>
      {/* </div> */}

      {/* <Navbar className="w-full z-20 top-0 left-0 right-0 fixed shadow-lg"> */}

      {/* <Link to="/"> */}
      {/* <Navbar.Brand> */}
      {/* <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Logo" /> */}
      {/* </Navbar.Brand> */}
      {/* </Link> */}

      {/* <Navbar.Toggle />
        <Navbar.Collapse>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "#1A56DB" : "" };
            }}
            to="/"
            className="text-lg p-2 hover:scale-110 duration-200 transition-transform ease-in"
          >
            Beranda
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "#1A56DB" : "" };
            }}
            to="/job-vacancy"
            className="text-lg p-2 hover:scale-110 duration-200 transition-transform ease-in"
          >
            Lowongan Pekerjaan
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "#1A56DB" : "" };
            }}
            to="/login"
            className="text-lg p-2 hover:scale-110 duration-200 transition-transform ease-in"
          >
            Login
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "#1A56DB" : "" };
            }}
            to="/register"
            className="text-lg p-2 hover:scale-110 duration-200 transition-transform ease-in"
          >
            Register
          </NavLink>
        </Navbar.Collapse>
   
      </Navbar> */}

    </>
  );
};

export default MenuNavbar;
