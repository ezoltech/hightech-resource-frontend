import React from "react";
import { TopMenu } from "./TopMenu";
import { Avatar, Button, Card } from "flowbite-react";
import { AiOutlineLike } from "react-icons/ai";
import { FaComments } from "react-icons/fa";
import toast from "react-hot-toast";
import { NonUserExplore } from "./NonUserExplore";
export const Overview = () => {
  function likePost() {
    toast.success("liked");
  }
  return (
    <div className="flex flex-col sm:flex-row">
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className="top-20 left-0 sticky self-start z-20 w-64 h-[76vh] transition-transform -translate-x-full sm:translate-x-0 sm:w-1/5"
        aria-label="Sidebar"
      >
        {/* Sidebar content */}
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#FBFBFB] dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-[12px] text-gray-400 rounded-lg dark:text-white group"
              >
                <span className="ml-2 font-sans">DEPARTMENT</span>
              </a>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  setopen(!open);
                }}
                className="flex items-center w-full p-2 text-base  text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                {/* <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                     <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                  </svg> */}
                <span className="flex-1 font-sans text-sm ml-3 text-left whitespace-nowrap">
                  Department
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-Width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <ul
                id="dropdown-example"
                className={`${open ? "active" : "hidden"} py-2 space-y-2`}
              >
                <li>
                  <a
                    href="#"
                    className="flex font-sans text-sm items-start bg-btn border-2 border-black  w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-7 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Computer science
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex font-sans text-sm items-start w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-7 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Computer Engineering
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex font-sans text-sm items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-7 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Accounting & Finance
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <hr></hr>
            </li>
            <li>
              <div className="flex items-center p-2 text-[12px] text-gray-400 rounded-lg dark:text-white  group">
                <span className="ml-2 font-sans">MY ACCOUNT</span>
              </div>
            </li>
            <li>
              <a
                to="/profile"
                className="flex justify-items-start p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 font-sans ml-3 text-left whitespace-nowrap">
                  Profile
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <NonUserExplore />
    </div>
  );
};
