"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const routes = [
  {
    href: "/biblioteca",
    label: "Biblioteca",
  },
  {
    href: "/explorar",
    label: "Explorar",
  },
  {
    href: "/comunidades",
    label: "Comunidades",
  },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="flex h-16 items-center gap-4 px-6">
      <div className="flex gap-6 md:gap-10">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === route.href ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {route.label}
          </Link>
        ))}
      </div>
      <div className="ml-auto flex items-center gap-4">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar..." className="pl-8" />
        </div>
        <Button size="icon" variant="ghost">
          <Bell className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
