import React from "react";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";

const StatCards = () => {
  return (
    <>
      <StatCard
        title="Gross Revenue"
        value="$12,345"
        pillText="+5%"
        trend="up"
        period="Last 30 days"
      />
      <StatCard
        title="Average Order Value"
        value="$67.89"
        pillText="-2%"
        trend="down"
        period="Last 30 days"
      />
      <StatCard
        title="Trailing Year"
        value="$123,456"
        pillText="+10%"
        trend="up"
        period="Last 12 months"
      />
    </>
  );
};

export default StatCards;

const StatCard = ({
  title,
  value,
  pillText,
  trend,
  period,
}: {
  title?: string;
  value?: string;
  pillText?: string;
  trend?: "up" | "down";
  period?: string;
}) => {
  return (
    <div className="rounded-lg shadow p-4 col-span-12 md:col-span-6 lg:col-span-4 border border-stone-300">
      <div className="flex mb-4 items-start justify-between">
        <div>
          <h3 className="text-stone-500 text-sm">{title}</h3>
          <p className="text-3xl font-semibold">{value}</p>
          {/* <p className="text-xs text-stone-500 ">{period}</p> */}
        </div>
        <span
          className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded ${
            trend === "up"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {trend === "up" ? <FiTrendingUp /> : <FiTrendingDown />}
          {pillText}
        </span>
      </div>
      <p className="text-xs text-stone-500">{period}</p>
    </div>
  );
};
