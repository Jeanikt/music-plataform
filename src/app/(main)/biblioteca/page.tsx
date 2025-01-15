import React from "react";
import { PlaylistCard } from "@/components/playlists/playlist-card";

const playlists = [
  {
    id: "1",
    title: "Minha Playlist 1",
    description: "Músicas para relaxar",
    imageUrl: "/placeholder.svg",
    likes: 15,
  },
  {
    id: "2",
    title: "Minha Playlist 2",
    description: "Músicas para treinar",
    imageUrl: "/placeholder.svg",
    likes: 8,
  },
  {
    id: "3",
    title: "Minha Playlist 3",
    description: "Músicas para festa",
    imageUrl: "/placeholder.svg",
    likes: 23,
  },
];

export default function BibliotecaPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Minha Biblioteca</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {playlists.map((playlist) => (
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
