import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export default function CommunityPage({ params }: { params: { id: string } }) {
  const community = {
    id: params.id,
    name: "Amantes de Rock",
    description: "Para os fãs de rock clássico e moderno",
    memberCount: 1500,
    imageUrl: "/placeholder.svg",
  };

  const posts = [
    {
      id: "1",
      author: "João Silva",
      content: "Alguém conhece alguma banda nova de rock alternativo?",
      timestamp: "2h atrás",
    },
    {
      id: "2",
      author: "Maria Santos",
      content: "Acabei de ouvir o novo álbum dos Foo Fighters. Incrível!",
      timestamp: "5h atrás",
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="w-20 h-20">
          <AvatarImage src={community.imageUrl} alt={community.name} />
          <AvatarFallback>{community.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold">{community.name}</h1>
          <p className="text-gray-500">{community.description}</p>
          <p className="text-sm">{community.memberCount} membros</p>
        </div>
        <Button className="ml-auto">Participar</Button>
      </div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Criar Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex gap-2">
            <Input placeholder="O que você está pensando?" />
            <Button type="submit">Postar</Button>
          </form>
        </CardContent>
      </Card>
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarFallback>{post.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{post.author}</CardTitle>
                  <p className="text-sm text-gray-500">{post.timestamp}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{post.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
