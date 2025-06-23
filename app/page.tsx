import Image from "next/image";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

export default function Home() {
  return (
    <div className="grid grid-cols-[200px_1fr] p-4 gap-4">
      <Sidebar />
      <Dashboard />
    </div>
  );
}
