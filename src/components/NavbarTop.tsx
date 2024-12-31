import { Switch } from "keep-react";
import { useEffect, useState } from "react";

type Props = { name: string };

const NavbarTop = ({ name }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Dark Mode Check
    if (localStorage?.getItem("darkMode") == "on") {
      document.body.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  // Handle DarkMode Function
  const handleDarkMode = () => {
    document.body.classList.toggle("dark");
    if (isDarkMode) {
      localStorage.removeItem("darkMode");
      setIsDarkMode(false);
    } else {
      localStorage?.setItem("darkMode", "on");
      setIsDarkMode(true);
    }
  };

  return (
    <div className=" text-red-600">
      <span className=" flex justify-end p-5 xl:p-8">
        <Switch variant="icon" onCheckedChange={() => handleDarkMode()} />
      </span>
    </div>
  );
};

export default NavbarTop;
