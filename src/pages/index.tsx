import Image from "next/image";
import { Inter } from "next/font/google";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState(0);
  const incrementCountHandler = () => {
    setCount((prevCount) => {
      return prevCount + 1
    })
  }
  const decrementCountHandler = () => {
    setCount((prevCount) => {
      return prevCount - 1;
    })
  }
  return (
    <div className="min-h-screen bg-my-grey-light flex justify-center items-center">
      <div className="bg-my-grey-dark rounded-lg shadow-lg p-8 max-w-sm w-full">
        <div className="flex items-center justify-center">
          <h1 className="text-gray-100 font-semibold text-lg ml-2">Count = {count}</h1>
        </div>
        {/* <p className="text-gray-600 mt-4">Click the button below to login with your Google account.</p> */}
        <div className="flex justify-center mt-6">
          <button onClick={incrementCountHandler}
          className="m-3 bg-my-green-light hover:bg-my-green-dark text-white font-semibold py-2 px-4 rounded flex items-center">
            Increment
          </button>
          <button onClick={decrementCountHandler}
          className="m-3 bg-my-green-light hover:bg-my-green-dark text-white font-semibold py-2 px-4 rounded flex items-center">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
