import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MusicCardProps {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
}

export function MusicCard({ id, title, artist, imageUrl }: MusicCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative aspect-square">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
          <Button
            size="icon"
            className="absolute bottom-2 right-2 rounded-full"
          >
            <Play className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-1">
          <Link href={`/musica/${id}`}>{title}</Link>
        </CardTitle>
        <p className="text-sm text-gray-500">{artist}</p>
      </CardContent>
    </Card>
  );
}
