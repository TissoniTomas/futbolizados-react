import { useState, useEffect } from "react";
import logo from "../../assets/Logo/logo.png";
import { Link, useParams } from "react-router-dom";


const NavBar = () => {
  const [theme, setTheme] = useState("light");
  const [menu, setMenu] = useState(false);
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [dataFiltrada, setDataFiltrada] = useState([]);

  useEffect(() => {
    fetch("../../../remeras.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  const toggleMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };

  useEffect(() => {
    console.log(menu);
  }, [menu]);

  const filterInput = (e) => {
    let dataInput = e.target.value;
    setInput(dataInput);
  };

  useEffect(() => {
    console.log(input);
    filteredInput(input);
  }, [input]);

  const filteredInput = (input) => {
    let arrayFilter = data.filter((item) =>
      item.titleRemera.toLowerCase().includes(input.toLowerCase())
    );
    console.log(arrayFilter);
    setDataFiltrada(arrayFilter);
  };

  const toggleCategories = () => {
    return (
      <ul className="bg-red-500 text-3xl">
        <li>Boca</li>
        <li>River</li>
        <li>Velez</li>
        <li>San Lorenzo</li>
        <li>Independiente</li>
      </ul>
    );
  };

  return (
    <>
      <div
        className={`w-full flex-col p-10 ${
          theme === "light" ? "bg-white" : "bg-blue-950"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/">
            <img className="w-1/2 md:w-1/5" src={logo} alt="logo-navbar" />
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
            className={`flex flex-col items-center h-96 animate__backInRight  ${
              menu
                ? "block transition-all ease-in-out duration-1000 delay-1000 text-black text-opacity-1 top-5"
                : "hidden transition-all ease-in-out duration-1000"
            }`}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <Link to="/">
              <li
                className="font-TungstenBold text-6xl p-2 mt-4 animate__backInRight"
                onClick={toggleMenu}
              >
                Home
              </li>
            </Link>
            <Link to="/products">
              <li
                className="font-TungstenBold text-3xl p-2"
                onClick={toggleMenu}
              >
                Products
              </li>
            </Link>
            <li
              className="font-TungstenBold text-3xl p-2"
              onClick={toggleCategories}
            >
              Categories{}
            </li>
            <li className="font-TungstenBold text-3xl p-2" onClick={toggleMenu}>
              Contact
            </li>
            <li className="font-TungstenBold text-3xl p-2" onClick={toggleMenu}>
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
            <li className="font-TungstenBold text-3xl p-2">
              <button type="button" onClick={toggleTheme}>
                {theme === "light" ? (
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
      
      <div className="flex items-center justify-center my-10">
        <input onChange={filterInput} type="text" name="filter" id="filter" />
        <Link to={`/search/${input}`}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 ml-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </Link>
      </div>
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
