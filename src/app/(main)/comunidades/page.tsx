import { CommunityCard } from "@/components/community/community-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ComunidadesPage() {
  const communities = [
    {
      id: "1",
      name: "Amantes de Rock",
      description: "Para os fãs de rock clássico e moderno",
      memberCount: 1500,
      imageUrl: "/placeholder.svg",
    },
    {
      id: "2",
      name: "Eletrônica Brasil",
      description: "Comunidade de música eletrônica brasileira",
      memberCount: 2300,
      imageUrl: "/placeholder.svg",
    },
    {
      id: "3",
      name: "Samba e Pagode",
      description: "O melhor do samba e pagode nacional",
      memberCount: 1800,
      imageUrl: "/placeholder.svg",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Comunidades</h1>
        <Button asChild>
          <Link href="/comunidades/criar">Criar Comunidade</Link>
        </Button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {communities.map((community) => (
          <CommunityCard key={community.id} {...community} />
        ))}
      </div>
    </div>
  );
}
