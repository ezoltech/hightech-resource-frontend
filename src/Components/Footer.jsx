import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="bg-green-100 dark:bg-gray-900 h-[50vh] flex items-center">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                <span className="self-center text-3xl font-semibold whitespace-nowrap uppercase dark:text-white">
                  Res share
                </span>
              </a>
            </div>
            <div>
              <div className=" h-full w-px bg-black"></div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <h2>Made with ❤️by Hightech </h2>
            </div>
          </div>
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © Setptember 2023, All Rights Reserved
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
