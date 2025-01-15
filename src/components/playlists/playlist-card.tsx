/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import { Play, Heart, MoreHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

interface PlaylistCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  likes: number;
  isLoading?: boolean;
}

export function PlaylistCard({
  id,
  title,
  description,
  imageUrl,
  likes,
  isLoading = false,
}: PlaylistCardProps) {
  if (isLoading) {
    return <PlaylistCardSkeleton />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group relative overflow-hidden hover-card glass-card">
        <CardContent className="p-0">
          <div className="relative aspect-square">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
            <Button
              size="icon"
              className="absolute bottom-4 right-4 h-12 w-12 rounded-full opacity-0 transition-opacity group-hover:opacity-100 gradient-primary"
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

function PlaylistCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Skeleton className="aspect-square" />
        <div className="p-4 space-y-4">
          <Skeleton className="h-5 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-4 w-12" />
            </div>
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
