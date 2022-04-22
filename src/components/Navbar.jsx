import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-neutral-900 h-20 flex items-center px-12 fixed top-0 letf-0 w-full z-40">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        {/* Brand */}
        <span className="flex items-center">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="self-center text-xl font-black whitespace-nowrap ml-3">
            Connect N Play
          </span>
        </span>
        <ul className={`flex gap-4 items-center`}>
          <li>
            <Navlink link={"/"} content={`About`} />
          </li>
          <li>
            <Navlink link={"/sign-in"} content={`Sign in`} />
          </li>
          <Link to={`/sign-up`}>
            <li>
              <button
                className={`font-medium px-4 py-2 bg-purple-700/75 hover:bg-purple-700 rounded-xl transition`}
              >
                Sign Up
              </button>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

const Navlink = ({ link, content }) => {
  return (
    <Link to={link}>
      <li>
        <button
          className={`font-medium px-4 py-1 hover:bg-purple-700/75 rounded-2xl transition`}
        >
          {content}
        </button>
      </li>
    </Link>
  );
};
