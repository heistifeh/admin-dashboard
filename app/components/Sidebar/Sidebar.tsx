import React from "react";
import AccountToggle from "./AccountToggle";

const Sidebar = () => {
  return (
    <div className="bg-stone-100">
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)] bg-red-400">
        {/* main sidebar */}
        <AccountToggle />
      </div>

      <div>{/* toggle and all the options */}</div>
    </div>
  );
};

export default Sidebar;
