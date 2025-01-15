/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Link from "next/link";
import { Home, Library, Plus, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  return (
    <div className="flex h-full w-[240px] flex-col border-r bg-card">
      <div className="flex h-16 items-center gap-2 border-b px-6">
        <div className="h-8 w-8 rounded-lg bg-primary" />
        <span className="font-semibold">MusicHub</span>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid gap-2 px-4">
          <Link href="/biblioteca">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Library className="h-5 w-5" />
              Biblioteca
            </Button>
          </Link>
          <Link href="/perfil">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <User className="h-5 w-5" />
              Perfil
            </Button>
          </Link>
          <Link href="/playlist/criar">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Plus className="h-5 w-5" />
              Nova Playlist
            </Button>
          </Link>
        </nav>
      </div>
    </div>
  );
}
