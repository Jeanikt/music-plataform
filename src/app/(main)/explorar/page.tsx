import React from "react";
import { PlaylistCard } from "@/components/playlists/playlist-card";

const recommendedPlaylists = [
  {
    id: "1",
    title: "Playlist Recomendada 1",
    description: "Músicas para você",
    imageUrl: "/placeholder.svg",
    likes: 42,
  },
  {
    id: "2",
    title: "Playlist Recomendada 2",
    description: "Novos lançamentos",
    imageUrl: "/placeholder.svg",
    likes: 31,
  },
  {
    id: "3",
    title: "Playlist Recomendada 3",
    description: "Top hits",
    imageUrl: "/placeholder.svg",
    likes: 56,
  },
];

export default function ExplorarPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Explorar</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recommendedPlaylists.map((playlist) => (
          <PlaylistCard
            key={playlist.id}
            id={playlist.id}
            title={playlist.title}
            description={playlist.description}
            imageUrl={playlist.imageUrl}
            likes={playlist.likes}
          />
        ))}
      </div>
    </div>
  );
}
