"use client";
import { useEffect, useState } from "react";
import { Loader } from "./loader";

const PressAnyKey = () => {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const isMobileDevice = window.innerWidth <= 768;
    setIsMobile(isMobileDevice);
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShow(true);
      localStorage.setItem("hasVisited", "true");
    }
    // setShow(true);
  }, []);

  const handleStart = () => {
    setShow(false);
    console.log("Key pressed!");
  };

  const addEventListeners = () => {
    if (isMobile) {
      window.addEventListener("touchstart", handleStart);
    } else {
      window.addEventListener("keydown", handleStart);
    }
  };

  const removeEventListeners = () => {
    if (isMobile) {
      window.removeEventListener("touchstart", handleStart);
    } else {
      window.removeEventListener("keydown", handleStart);
    }
  };

  useEffect(() => {
    if (show) {
      addEventListeners();
    }

    return () => {
      removeEventListeners();
    };
  }, [show]);

  if (!show) return <Loader />;

  return (
    <div className="fixed font-heading font-bold inset-0 z-50 flex items-center justify-center text-white border-2 border-white p-8">
      <p className="text-3xl sm:text-6xl animate-pulse text-center">
        {isMobile ? "Tap to Start" : "Press Any Key to Start..."}
      </p>
    </div>
  );
};

export default PressAnyKey;
