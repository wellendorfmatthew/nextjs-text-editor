import Image from "next/image";
import AppSidebar from "./components/app-sidebar/app-sidebar";
import SettingsSidebar from "./components/settings-sidebar/settings-sidebar";

export default function Home() {
  return (
    <div className="h-dvh w-dvw flex items-center justify-between">
      <AppSidebar />
      <SettingsSidebar />
    </div>
  );
}
