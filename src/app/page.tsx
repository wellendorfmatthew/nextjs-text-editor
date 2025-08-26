import Image from "next/image";
import AppSidebar from "./components/app-sidebar/app-sidebar";

export default function Home() {
  return (
    <div className="h-dvh w-dvw flex items-center justify-center">
      <AppSidebar />
    </div>
  );
}
