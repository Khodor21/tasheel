import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Workspace from "./components/Workspace";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFAF4] text-[#1B4332] p-4 sm:p-8 lg:p-10 selection:bg-[#C9A84C] selection:text-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <Header />

        <main className="flex flex-col lg:flex-row gap-8 w-full">
          <Sidebar />
          <Workspace />
        </main>
      </div>سس
    </div>
  );
}
