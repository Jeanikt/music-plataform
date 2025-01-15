import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlayerControls } from "@/components/music/player-controls";

export default function MusicaPage({ params }: { params: { id: string } }) {
  const music = {
    id: params.id,
    title: "Nome da Música",
    artist: "Nome do Artista",
    album: "Nome do Álbum",
    imageUrl: "/placeholder.svg",
    duration: "3:45",
  };

  const comments = [
    {
      id: "1",
      author: "João Silva",
      content: "Essa música é incrível!",
      timestamp: "2h atrás",
    },
    {
      id: "2",
      author: "Maria Santos",
      content: "Adoro essa parte aos 2:30",
      timestamp: "5h atrás",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="w-24 h-24">
            <AvatarImage src={music.imageUrl} alt={music.title} />
            <AvatarFallback>{music.title[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold">{music.title}</h1>
            <p className="text-xl">{music.artist}</p>
            <p className="text-gray-500">{music.album}</p>
          </div>
        </div>
        <PlayerControls />
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Comentários</h2>
          <div className="space-y-4">
            {comments.map((comment) => (
              <Card key={comment.id}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarFallback>{comment.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">
                        {comment.author}
                      </CardTitle>
                      <p className="text-sm text-gray-500">
                        {comment.timestamp}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{comment.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <Card>
          <CardHeader>
            <CardTitle>Adicionar à Playlist</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Adicionar à Playlist</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
