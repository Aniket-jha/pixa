import React from "react";
import { NavLink, Link } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../assets/logonew.png";
import { categories } from "../utils/data";
const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
const isActiveStyle =
  "flex items-center px-5 gap-3 font-extrabold border-black  transition-all duration-200 ease-in-out capitalize";



const Sidebar = (props) => {
  const handleCloseSidebar = () => {
    if (props.closeToogle) props.closeToogle(false);
  };

  return (
    <div className="flex flex-col justify-between h-full bg-white overflow-y-scrikk min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Link
          to="/"
          onClick={handleCloseSidebar}
          className="flex px-5 gap-2 my-6 pt-1 w-190 items-center "
        >
          <img src={logo} alt="logo" className="w-2xl" />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink
            to="/"
            onClick={handleCloseSidebar}
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            <RiHomeFill />
            Home
          </NavLink>
          <h3 className="mt-3 px-5 text-base 2xl:text-xl">
            Discover Categories
          </h3>
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              onClick={handleCloseSidebar}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              key={category.name}
            >
            <img src={category.image} className="w-8 h-8 rounded-full shadow-sm" alt="category" />
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
      {props.user && (
        <Link
          className="flex my-5 mb-3 gap-2 p-2 items-center bg-white rounder-lg shadow-lg mx-3"
          to={`user-profile/${props.user._id}`}
          onClick={handleCloseSidebar}
        >
          <img
            src={props.user.image}
            className="w-10 h-10 rounder-full"
            alt="user-profile"
          />
          <p>{props.user.userName}</p>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
