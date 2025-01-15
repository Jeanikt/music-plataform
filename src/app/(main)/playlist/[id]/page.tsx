import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MusicList } from "@/components/music/music-list";

export default function PlaylistPage({ params }: { params: { id: string } }) {
  const playlist = {
    id: params.id,
    title: "Minha Playlist Favorita",
    description: "Uma coleção das minhas músicas favoritas",
    imageUrl: "/placeholder.svg",
    creator: "João Silva",
    trackCount: 15,
  };

  const tracks = [
    { id: "1", title: "Música 1", artist: "Artista 1", duration: "3:45" },
    { id: "2", title: "Música 2", artist: "Artista 2", duration: "4:20" },
    { id: "3", title: "Música 3", artist: "Artista 3", duration: "3:10" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/3">
        <Card>
          <CardHeader>
            <Avatar className="w-full h-auto aspect-square">
              <AvatarImage src={playlist.imageUrl} alt={playlist.title} />
              <AvatarFallback>{playlist.title[0]}</AvatarFallback>
            </Avatar>
            <CardTitle className="text-2xl">{playlist.title}</CardTitle>
            <p className="text-gray-500">{playlist.description}</p>
          </CardHeader>
          <CardContent>
            <p>Criada por: {playlist.creator}</p>
            <p>{playlist.trackCount} músicas</p>
            <Button className="w-full mt-4">Reproduzir</Button>
          </CardContent>
        </Card>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-4">Músicas</h2>
        <MusicList tracks={tracks} />
      </div>
    </div>
  );
}
