import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
}

interface MusicListProps {
  tracks: Track[];
}

export function MusicList({ tracks }: MusicListProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]"></TableHead>
          <TableHead>Título</TableHead>
          <TableHead>Artista</TableHead>
          <TableHead className="text-right">Duração</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tracks.map((track) => (
          <TableRow key={track.id}>
            <TableCell>
              <Button size="icon" variant="ghost">
                <Play className="h-4 w-4" />
              </Button>
            </TableCell>
            <TableCell>{track.title}</TableCell>
            <TableCell>{track.artist}</TableCell>
            <TableCell className="text-right">{track.duration}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
