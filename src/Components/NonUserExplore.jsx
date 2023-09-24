import React from "react";
import { TopMenu } from "./TopMenu";
import { Card, Button, Avatar } from "flowbite-react";
import { AiOutlineLike } from "react-icons/ai";
import { FaComments } from "react-icons/fa";
export const NonUserExplore = () => {
  return (
    <div>
      <div className="flex-grow p-4 w-full">
        <div className="pt-[3.85rem]">
          <TopMenu />
        </div>

        <div className="p-4 h-screen border-2 overflow-y-scroll border-gray-200 border-dashed rounded-lg dark:border-gray-700 flex flex-col gap-3">
          <Card className="h-[220px] flex flex-col">
            <h2 className="text-2xl font-semibold">
              Data Structures - Chapter 1 Lecture notes
            </h2>
            <p>
              This is the handout shared to us by our instructor Mr.X. It is the
              first of 5 chapters for this course...
            </p>
            <div className="flex flex-row gap-2">
              <Button color="gray">Handout</Button>
              <Button color="gray">C++</Button>
              <Button color="gray">Java</Button>
              <Button color="gray">DataBase</Button>
            </div>

            <ul className="flex flex-row gap-4">
              <li className="flex flex-row">
                <Avatar
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
                65 Views
              </li>

              <li className="flex flex-row">
                {" "}
                <AiOutlineLike
                  className="w-[20px] h-[20px] cursor-pointer"
                  //   onClick={likePost}
                />
                100 likes
              </li>
              <li className="flex flex-row">
                {" "}
                <FaComments className="w-[20px] h-[20px] cursor-pointer" />
                12 comments
              </li>
            </ul>
          </Card>

          <Card className="h-[220px] flex flex-col">
            <h2 className="text-2xl font-semibold">
              Data Structures - Chapter 1 Lecture notes
            </h2>
            <p>
              This is the handout shared to us by our instructor Mr.X. It is the
              first of 5 chapters for this course...
            </p>
            <div className="flex flex-row gap-2">
              <Button color="gray">Handout</Button>
              <Button color="gray">C++</Button>
              <Button color="gray">Java</Button>
              <Button color="gray">DataBase</Button>
            </div>

            <ul className="flex flex-row gap-4">
              <li className="flex flex-row">
                <Avatar
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
                65 Views
              </li>

              <li className="flex flex-row">
                {" "}
                <AiOutlineLike
                  className="w-[20px] h-[20px] cursor-pointer"
                  //   onClick={likePost}
                />
                100 likes
              </li>
              <li className="flex flex-row">
                {" "}
                <FaComments className="w-[20px] h-[20px] cursor-pointer" />
                12 comments
              </li>
            </ul>
          </Card>

          <Card className="h-[220px] flex flex-col">
            <h2 className="text-2xl font-semibold">
              Data Structures - Chapter 1 Lecture notes
            </h2>
            <p>
              This is the handout shared to us by our instructor Mr.X. It is the
              first of 5 chapters for this course...
            </p>
            <div className="flex flex-row gap-2">
              <Button color="gray">Handout</Button>
              <Button color="gray">C++</Button>
              <Button color="gray">Java</Button>
              <Button color="gray">DataBase</Button>
            </div>

            <ul className="flex flex-row gap-4">
              <li className="flex flex-row">
                <Avatar
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
                65 Views
              </li>

              <li className="flex flex-row">
                {" "}
                <AiOutlineLike
                  className="w-[20px] h-[20px] cursor-pointer"
                  //   onClick={likePost}
                />
                100 likes
              </li>
              <li className="flex flex-row">
                {" "}
                <FaComments className="w-[20px] h-[20px] cursor-pointer" />
                12 comments
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};
