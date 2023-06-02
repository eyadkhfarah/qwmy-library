import React, { useState, useEffect } from 'react';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';
import { useTheme } from "next-themes";

export default function DarkButton() {

  const { systemTheme, theme, setTheme } = useTheme();
  const renderThemeChanger = () => {

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <RiSunLine className="text-3xl" role="button" onClick={() => setTheme('light')} />
      )
    }

    else {
      return (
        <RiMoonClearLine className="text-3xl" role="button" onClick={() => setTheme('dark')} />
      )
    }
  };

  return (
    <span
      className={`transition-all duration-300 shadow-2xl p-3 fixed dark:text-white bg-white border dark:border-none dark:bg-dlight left-4 bottom-4 text-lg z-[98] cursor-pointer`}>
      {renderThemeChanger()}
    </span>
  );
}