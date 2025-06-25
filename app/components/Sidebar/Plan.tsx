import React from "react";

const Plan = () => {
  return (
    <div className="flex sticky top-[calc(100vh-32px-48px)] flex-col h-[48px] border-t px-2 border-stone-300 justify-end text-xs">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold">Enterprise</p>
          <p className="text-stone-500">Pay as you go</p>
        </div>

        <button className="px-2 py-1.5 fonnt-medium bg-stone-200 hover:bg-stone-300 transition-colors rounded">
          Support
        </button>
      </div>
    </div>
  );
};

export default Plan;
