import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CommunityCardProps {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  imageUrl: string;
}

export function CommunityCard({
  id,
  name,
  description,
  memberCount,
  imageUrl,
}: CommunityCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-32">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={name}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2">
          <Link href={`/comunidades/${id}`}>{name}</Link>
        </CardTitle>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2" />
            <span className="text-sm">{memberCount} membros</span>
          </div>
          <Button size="sm">Participar</Button>
        </div>
      </CardContent>
    </Card>
  );
}
