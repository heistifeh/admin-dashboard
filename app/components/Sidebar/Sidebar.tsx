import React from "react";
import AccountToggle from "./AccountToggle";
import Search from "./Search";
import RouteSelect from "./RouteSelect";
import Plan from "./Plan";

const Sidebar = () => {
  return (
    <div className="bg-stone-100">
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
        {/* main sidebar */}
        <AccountToggle />
        <Search />
        <RouteSelect />
      </div>

     <Plan />
    </div>
  );
};

export default Sidebar;
