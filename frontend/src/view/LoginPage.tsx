import React, { useState } from "react";

function LoginPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleInput = () => {
    console.log(name, email, password);
    if (password == "12345678") {
      setMessage("You are successfully logged in!");
    }
  };

  return (
    <div>
      <div className="bg-[#e6e2da] h-screen overflow-hidden flex items-center justify-center">
        <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF"></svg>
          </div>
          <form className="p-12 md:p-24">
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <svg
                className="absolute ml-3"
                width="24"
                viewBox="0 0 24 24"
              ></svg>
              <input
                type="text"
                id="username"
                className="bg-gray-200 pl-3 py-2 md:py-4 focus:outline-none w-full"
                placeholder="Username"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <svg
                className="absolute ml-3"
                viewBox="0 0 24 24"
                width="24"
              ></svg>
              <input
                type="text"
                id="email"
                className="bg-gray-200 pl-3 py-2 md:py-4 focus:outline-none w-full"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <svg
                className="absolute ml-3"
                viewBox="0 0 24 24"
                width="24"
              ></svg>
              <input
                type="password"
                id="password"
                className="bg-gray-200 pl-3 py-2 md:py-4 focus:outline-none w-full"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-gray-900 hover:bg-gray-600 from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full"
              onClick={(e) => {
                e.preventDefault();
                handleInput();
              }}
            >
              Login
            </button>
            {message}
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
