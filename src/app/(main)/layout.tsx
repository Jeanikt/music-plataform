import { MainNav } from "@/components/layout/main-nav";
import { Sidebar } from "@/components/layout/sidebar";
import { Player } from "@/components/layout/player";
import { PlayerProvider } from "@/providers/player-provider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PlayerProvider>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <MainNav />
          <main className="container mx-auto p-4 md:p-6 lg:p-8">
            {children}
          </main>
        </div>
        <Player />
      </div>
    </PlayerProvider>
  );
}
