/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import { Play, Heart, MoreHorizontal } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface PlaylistCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  likes: number;
}

export function PlaylistCard({
  id,
  title,
  description,
  imageUrl,
  likes,
}: PlaylistCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group relative overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-square">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
            <Button
              size="icon"
              className="absolute bottom-4 right-4 h-12 w-12 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
            >
              <Play className="h-6 w-6" />
            </Button>
          </div>
          <div className="p-4">
            <h3 className="line-clamp-1 text-lg font-semibold">{title}</h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {description}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost">
                  <Heart className="h-4 w-4" />
                </Button>
                <span className="text-sm text-muted-foreground">{likes}</span>
              </div>
              <Button size="icon" variant="ghost">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
