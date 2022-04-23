import React, { useState } from "react";
import background from "../images/background2.jpg";

export default function Dashboard() {
  const [showUserD, setShowUserD] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const styles = {
    header: {
      backgroundImage: `url('${background}')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
  };

  const UserDropdown = () => {
    return (
      <>
        {/* Dropdown */}
        <div
          onClick={() => {
            setShowUserD(false);
          }}
          className={`absolute top-0 left-0 z-20 h-screen w-screen ${
            showUserD ? "" : "hidden"
          }`}
        ></div>
        <div className="relative z-30">
          <button
            onClick={() => {
              setShowUserD(!showUserD);
            }}
            className={`bg-purple-500/75 hover:bg-purple-700 transition rounded-full p-1`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>

          <div
            className={`absolute top-10 right-0 overflow-hidden bg-purple-700/50 backdrop-blur-sm shadow-sm rounded-lg ${
              showUserD ? "" : "hidden"
            }`}
          >
            <button className="block hover:bg-purple-700 py-2 px-4">
              Tournaments
            </button>
            <button className="block hover:bg-purple-700 w-full py-2 px-4">
              Giveaways
            </button>
          </div>
        </div>
      </>
    );
  };

  const TabButton = (props) => {
    return (
      <button
        onClick={() => {
          setActiveTab(props.text);
        }}
        className={`rounded-lg px-4 py-1 capitalize hover:bg-purple-500/50 transition ${
          activeTab === props.text
            ? "bg-purple-700/50 backdrop-blur-md shadow-md"
            : ""
        }`}
      >
        {props.text}
      </button>
    );
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div
        className={`mx-12 h-[70vh] rounded-b-3xl overflow-hidden relative`}
        style={styles.header}
      >
        <div
          className={`bg-purple-700/50 absolute top-0 left-0 w-full h-full`}
        ></div>
        <nav className="h-20 flex items-center px-12 relative z-10">
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
              <UserDropdown setShowUserD={setShowUserD} />
            </ul>
          </div>
        </nav>
        <div className="absolute bottom-0 left-0 w-full mb-12 z-10">
          <div className="flex px-12 gap-8 items-center">
            <div className={`w-32 h-32 rounded-full bg-green-500`}></div>
            <div className={``}>
              <h1 className={`text-5xl font-black`}>Welcome User</h1>
              <p className={`text-white/50  text-xl text-left`}>@user</p>
              <div className={`flex justify-start`}>
                <span
                  className={`text-white/75 text-lg text-left font-semibold`}
                >
                  Following: 143
                </span>
                <span
                  className={`ml-4 text-white/75 text-lg text-left font-semibold`}
                >
                  Followers: 15,000
                </span>
              </div>
            </div>
          </div>
          <div className={`mx-12 flex justify-end gap-6 items-center`}>
            <TabButton text={`followers`} />
            <TabButton text={`following`} />
            <TabButton text={`tournaments`} />
            <TabButton text={`giveaways`} />
          </div>
        </div>
      </div>
    </div>
  );
}
