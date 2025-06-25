import Link from "next/link";
import React from "react";
import {
  FiDollarSign,
  FiHome,
  FiLink,
  FiPaperclip,
  FiPlus,
  FiUsers,
} from "react-icons/fi";
import { IconType } from "react-icons/lib";

const RouteSelect = () => {
  return (
    <div className="flex flex-col space-y-6">
      <Route
        Icon={FiHome}
        href="/dashbboard"
        selected={true}
        title="Dashboard"
      />
      <Route Icon={FiUsers} href="/team" selected={false} title="Team" />
      <Route
        Icon={FiPaperclip}
        href="/invoice"
        selected={false}
        title="Invoice"
      />
      <Route
        Icon={FiLink}
        href="/integration"
        selected={false}
        title="Integration"
      />
      <Route
        Icon={FiDollarSign}
        href="/finance"
        selected={false}
        title="Finance"
      />
    </div>
  );
};

export default RouteSelect;

const Route = ({
  href,
  Icon,
  selected,
  title,
}: {
  href: string;
  Icon: IconType;
  selected: boolean;
  title: string;
}) => {
  return (
    <Link
      href={href}
      className={` flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 bg-transparent text-stone-600 shadow-none"
      }`}
    >
      <Icon className={`${selected ? "text-violet-500" : ""}`} />
      <span>{title}</span>
    </Link>
  );
};
