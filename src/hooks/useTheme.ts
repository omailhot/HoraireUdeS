import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.theme = theme;
  };

  return { theme, themeHandler };
};

export default useTheme;
