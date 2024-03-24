import { useState, useEffect, useContext } from "react";
import logo from "../../assets/Logo/logo.png";
import { Link} from "react-router-dom";
import { ModeContext } from "../../context/ModeContext";
import SeachBar from "../SearchBar/SeachBar";
import { InputContext } from "../../context/InputContext";

const NavBar = () => {
  const { mode, setMode } = useContext(ModeContext);
  const [menu, setMenu] = useState(false);
  const [categorias, setCategorias] = useState(false);
  const {input} =useContext(InputContext)
 



  const toggleTheme = () => {
    mode === "light" ? setDarkMode() : setLightMode();
  };

  const setDarkMode = () => {
    setMode("dark");
    sessionStorage.setItem("theme", "dark");
  };

  const setLightMode = () => {
    setMode("light");
    sessionStorage.setItem("theme", "light");
  };

  const toggleMenu = () => {
    setMenu(!menu);
  
  };
  
    const toggleCategories = () => {
      setCategorias(!categorias);
    };



  useEffect(() => {
    console.log(input);
  }, [input]);



  return (
    <>
      <div
        className={`w-full flex-col p-10  ${
          mode === "light" ? "bg-white" : "bg-gray-900"
        }`}
      >
        <div className="flex items-center justify-between ">
          <Link to="/">
            <img
              onClick={() => setMenu(false)}
              className="w-1/2 md:w-1/5"
              src={logo}
              alt="logo-navbar"
            />
          </Link>
          <button onClick={toggleMenu}>
            {menu === true ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
                onClick={() => setCategorias(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        <ul
          className={`flex flex-col items-start h-96 relative  ${
            menu
              ? "block text-black text-opacity-1 top-5 animate-fade-left animate-ease-in "
              : "hidden"
          }`}
        >
          <Link to="/">
            <li
              className={`font-MontserratBold text-3xl p-2 ${
                mode === "light" ? "text-gray-900" : "text-gray-200"
              }`}
              onClick={toggleMenu}
            >
              Home
            </li>
          </Link>
          <Link to="/products">
            <li
              className={`font-MontserratBold text-3xl p-2 ${
                mode === "light" ? "text-gray-900" : "text-gray-200"
              }`}
              onClick={toggleMenu}
            >
              Products
            </li>
          </Link>
          <li
            className={`font-MontserratBold text-3xl p-2 cursor-pointer ${
              mode === "light" ? "text-gray-900" : "text-gray-200"
            }`}
            onClick={toggleCategories}
          >
            Categorias
            {categorias && (
              <ul
                className={`text-3xl absolute top-0 h-full z-999  animate-fade-left animate-ease-in flex flex-col justify-between  ${
                  mode === "light" ? "bg-white" : "bg-gray-900"
                } `}
              >
                <Link to="/category/boca">
                <li
                  className={`font-MontserratBold text-3xl p-2 cursor-pointer ${
                    mode === "light" ? "text-gray-900" : "text-gray-200"
                  }`}
                 
                  >
                  Boca
                </li>
                  </Link>
                  <Link to="/category/river">
                <li
                  className={`font-MontserratBold text-3xl p-2 cursor-pointer ${
                    mode === "light" ? "text-gray-900" : "text-gray-200"
                  }`}
                  >
                  River
                </li>
                  </Link>

                  <Link to="/category/velez">
                <li
                  className={`font-MontserratBold text-3xl p-2 cursor-pointer ${
                    mode === "light" ? "text-gray-900" : "text-gray-200"
                  }`}
                  >
                  Velez
                </li>
                  </Link>
                  <Link to="/category/san lorenzo">
                <li
                  className={`font-MontserratBold text-3xl p-2 cursor-pointer ${
                    mode === "light" ? "text-gray-900" : "text-gray-200"
                  }`}
                  >
                  San Lorenzo
                </li>
                  </Link>
                  <Link to="/category/independiente">

                <li
                  className={`font-MontserratBold text-3xl p-2 cursor-pointer ${
                    mode === "light" ? "text-gray-900" : "text-gray-200"
                  }`}
                  >
                  Independiente
                </li>
                  </Link>
                <li
                  className={`font-MontserratBold text-3xl p-2 cursor-pointer text-red-800`}
                  onClick={toggleCategories}
                >
                  Volver al menu
                </li>
              </ul>
            )}
          </li>
          <Link to="/contact">
          <li
            className={`font-MontserratBold text-3xl p-2 cursor-pointer ${
              mode === "light" ? "text-gray-900" : "text-gray-200"
            }`}
            onClick={toggleMenu}
            >
            Contact
          </li>
            </Link>
          <li
            className={`font-MontserratBold text-3xl p-2 cursor-pointer ${
              mode === "light" ? "text-gray-900" : "text-gray-200"
            }`}
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </li>
          <li
            className={`font-MontserratBold text-3xl p-2 cursor-pointer ${
              mode === "light" ? "text-gray-900" : "text-gray-200"
            }`}
          >
            <button type="button" onClick={toggleTheme}>
              {mode === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              )}
            </button>
          </li>
        </ul>
      </div>

      <SeachBar/>

     
    </>
  );
};

export default NavBar;

/**
 *  bg-gray-900
 * text-gray-400
 * Titulos: font-extra-bold
 * font-sans
 *
 */
