"use client";

import { useState, useEffect } from "react";

export default function Main() {
  const myName = "Hi, I'm Adrian";
  const [visibleLetters, setMoreVisibleLetters] = useState("");

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      if (index <= myName.length) {
        setMoreVisibleLetters(myName.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  const adrianStart = myName.indexOf(" Adrian");
  const beforeAdrian = visibleLetters.slice(0, adrianStart);
  const adrianPart = visibleLetters.slice(adrianStart);

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <p className="text-blue-500 text-sm md:text-base font-semibold mb-6">
        WELCOME TO MY PORTFOLIO
      </p>

      <h1 className="text-white text-5xl md:text-7xl font-bold mb-6">
        {beforeAdrian}
        <span className="text-blue-500">{adrianPart}</span>
        <span className="bg-blue-500 inline-block w-1 md:w-2 h-10 md:h-14  ml-2 animate-pulse rounded-full align-middle"></span>
      </h1>

      <p className="text-gray-400 text-base md:text-lg max-w-xl mb-8">
        A passionate in IT and Cybersecurity.
      </p>

      <div className="flex gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors cursor-pointer">
          View My Work
        </button>
        <button className="border border-gray-600 hover:border-gray-400 text-white font-medium px-6 py-3 rounded-lg transition-colors cursor-pointer">
          Contact Me
        </button>
      </div>
    </div>
  );
}
