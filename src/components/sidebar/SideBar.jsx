/** @format */

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "~/assets/anonymous.jpg";
import { sidebar } from "~/ultils/constant";
import icons from "~/ultils/icons";
import path from "~/ultils/path";
const { FaCaretDown } = icons;
const SideBar = () => {
  const [activeTab, setActiveTab] = useState([]);

  const handleActiveTab = (id) => {
    const active = activeTab.some((tab) => tab === id);
    if (active) {
      const newActiveTab = activeTab.filter((tab) => tab !== id);
      setActiveTab(newActiveTab);
    } else setActiveTab((prev) => [...prev, id]);
  };

  return (
    <div className="h-screen bg-main py-4 font-main flex flex-col">
      <a href="/" className="flex gap-1 items-center justify-center ">
        <img
          src={logo}
          className="w-[50%] object-cover rounded-full"
          alt="logo"
        />
      </a>
      <span className="italic inline text-sm text-white text-center ">
        Workspace
      </span>
      <ul className="flex  py-4 flex-col text-white capitalize">
        {sidebar.map((el) => (
          <li key={el.id}>
            {el.type === "SINGLE" ? (
              <NavLink
                to={el.path}
                className={({ isActive }) =>
                  `flex gap-2 items-center px-4 py-2 hover:bg-main-500  ${
                    isActive && "border-r-4  bg-main-500 border-orange-600"
                  }`
                }
                end={el.path === `/${path.LAYOUT}` ? true : false}
              >
                <span>{el.icon}</span>
                {el.title}
              </NavLink>
            ) : (
              <>
                <div
                  onClick={() => handleActiveTab(el.id)}
                  className="flex justify-between  items-center px-4 py-2 hover:bg-main-500   cursor-pointer"
                >
                  <div className="flex items-center gap-2 select-none">
                    <span>{el.icon}</span>
                    {el.title}
                  </div>
                  <span
                    className={`-rotate-90 duration-200 ease-linear ${
                      activeTab.some((tab) => tab === el.id) && "rotate-0"
                    }`}
                  >
                    <FaCaretDown />
                  </span>
                </div>
                {activeTab.some((tab) => tab === el.id) && (
                  <ul>
                    {el?.sub?.map((sub) => (
                      <NavLink
                        to={sub.path}
                        key={sub.id}
                        className={({ isActive }) =>
                          `flex gap-2 pl-5 items-center px-4 py-2 hover:bg-main-500  ${
                            isActive &&
                            "border-r-4  bg-main-500 border-orange-600"
                          }`
                        }
                      >
                        {sub.title}
                      </NavLink>
                    ))}
                  </ul>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
