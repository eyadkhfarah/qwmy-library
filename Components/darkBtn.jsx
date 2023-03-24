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
    <button
      className={`transition-all duration-300 shadow-2xl p-3 fixed text-white bg-primary dark:bg-dprimary left-4 bottom-4 text-lg z-[98] cursor-pointer`}>
      <div className="flex items-center gap-3">
        {renderThemeChanger()}
      </div>
    </button>
  );
}