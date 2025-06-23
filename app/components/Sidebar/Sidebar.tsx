import React from "react";
import AccountToggle from "./AccountToggle";
import Search from "./Search";

const Sidebar = () => {
  return (
    <div className="bg-stone-100">
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
        {/* main sidebar */}
        <AccountToggle />
        <Search />
      </div>

      <div className="bg-blue-400 h-[48px]">
        {/* toggle and all the options */}
      </div>
    </div>
  );
};

export default Sidebar;
