import { useState } from "react";
import { UserCircleIcon } from "../../icons";
import { General } from "./General";
import { ChangePassword } from "./ChangePassword";

export default function Profile() {
  const tabs = [
    { name: "General", icon: <UserCircleIcon />, content: <General/> },
    { name: "Change Password", icon: <UserCircleIcon />, content: <ChangePassword/> },
    { name: "Notification", icon: <UserCircleIcon />, content: "Notification details" },
  ];

  const [activeTab, setActiveTab] = useState("General");

  return (
    <div className="">
      {/* Profile Heading */}
      <h3 className="font-semibold text-gray-800 mb-4">Profile</h3>

      {/* Tabs */}
      <div className="border-b">
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-4 py-2 text-gray-600 border-b-2 ${
                activeTab === tab.name ? "border-blue-500 text-blue-600 font-semibold" : "border-transparent"
              } hover:text-blue-500 transition-all`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Box */}
      <div className="sm:p-1 mt-4">
        <p className="text-gray-600 mt-2">{tabs.find((tab) => tab.name === activeTab)?.content}</p>
      </div>
    </div>
  );
}
