import { FC } from "react";

import reactLogo from "./assets/react.svg";
import sanjoyRoy from "./assets/sanjoy-roy-300x300.png";
import NavbarTop from "./components/NavbarTop";

import "./App.css";

import { CopySimple } from "phosphor-react";
import { Button, Divider, toast, ToastWrapper } from "keep-react";

const personalInfo = {
  contacts: {
    email: "sanjoylab66@gmail.com",
    phoneNo: "+8801310501646",
  },
};

const App: FC = () => {
  const handleTextCopy = (text: string, toastMessage: string) => {
    // Copy the text inside the text field
    navigator.clipboard.writeText(text);

    // Toast alert the copied text
    toast?.success(toastMessage);
  };

  return (
    <div className="text-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <NavbarTop name={"Teeee"} />
      <div className=" space-y-8 xl:space-y-10">
        <div className=" flex justify-center items-center gap-4 xl:gap-5 pt-10">
          <a
            href="https://github.com/sanjoy-git"
            className="hover:logo-shadow"
            target="_blank"
          >
            <img
              src={sanjoyRoy}
              className="rounded-full w-32 xl:w-36"
              alt="SanjoyRoy"
            />
          </a>
          <a
            href="https://react.dev"
            className=" hover:logo-shadow"
            target="_blank"
          >
            <img
              src={reactLogo}
              className="logo-spin w-20 xl:w-32"
              alt="React-Logo"
            />
          </a>
        </div>
        <Divider color="secondary" size="md" variant="center">
          <h1 className=" font-bold text-2xl xl:text-3xl">Sanjoy Roy</h1>
        </Divider>
        <div className=" space-y-2 text-xl">
          <p>
            React Developer | Founder at{" "}
            <a
              href="http://codeseba.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodeSeba
            </a>
          </p>
          <p className="">
            <a
              href="https://github.com/sanjoy-git"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Github
            </a>{" "}
            |
            <a
              href="https://obsius.site/1g5n4h0n2e19202o6d3h"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Projects
            </a>{" "}
            |
            <a
              href="https://www.youtube.com/@sanjoy-roy"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Youtube
            </a>{" "}
            |
            <a
              href="https://medium.com/@sanjoy-roy"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Blogs
            </a>
          </p>
          <p className="">
            <a href={`mailto:${personalInfo?.contacts?.email}`}>Email </a>
            <Button
              shape="circle"
              className=" hover:text-primary-500"
              onClick={() =>
                handleTextCopy(personalInfo?.contacts?.email, "Email Copied!")
              }
            >
              <CopySimple size={16} />
            </Button>
          </p>
        </div>
      </div>
      <ToastWrapper
        richColors={true}
        toastOptions={{
          classNames: {
            title: "text-body-2 font-medium",
            toast: "rounded-xl shadow-large",
            description: "text-body-3 font-normal",
          },
        }}
      />
    </div>
  );
};

export default App;
