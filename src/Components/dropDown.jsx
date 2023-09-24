import React from "react";
import { Avatar, Dropdown } from "flowbite-react";

const CustomDropdown = ({ label, children }) => {
  return (
    <div className="">
      <Dropdown
        label={label}
        size="xs"
        pill="true"
        color="gray"
        className="py-3 px-16 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-green-100 border rounded-md border-black hover:bg-green-400 hover:text-white hover:border-hidden "
      >
        {children}
      </Dropdown>
    </div>
  );
};

export const DropDown = () => {
  const AccountItems = () => {
    return (
      <div>
        <Avatar
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded
        >
          <div className="space-y-1 font-medium dark:text-white">
            <div>Jese Leos</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Joined in August 2014
            </div>
          </div>
        </Avatar>
      </div>
    );
  };

  return (
    <CustomDropdown label={<AccountItems />}>
      <Dropdown.Item>My Account</Dropdown.Item>
      <Dropdown.Item>Sign Out</Dropdown.Item>
    </CustomDropdown>
  );
};
