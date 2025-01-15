import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Users, Headphones } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Headphones className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">MusicHub</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#recursos"
          >
            Recursos
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#sobre"
          >
            Sobre
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/entrar"
          >
            Entrar
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Conecte-se através da música
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Descubra, compartilhe e crie playlists. Junte-se a comunidades
                  de amantes da música como você.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/cadastro">Comece agora</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/explorar">Explorar</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="recursos"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Recursos
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Music className="h-8 w-8 mb-2" />
                  <CardTitle>Playlists Personalizadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Crie e compartilhe playlists únicas baseadas em seus gostos
                    musicais.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 mb-2" />
                  <CardTitle>Comunidades</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Conecte-se com outros fãs de música e descubra novos
                    artistas e gêneros.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Headphones className="h-8 w-8 mb-2" />
                  <CardTitle>Integração com Spotify</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Sincronize suas playlists favoritas e descubra recomendações
                    personalizadas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Sobre o MusicHub
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-center">
              O MusicHub é uma plataforma inovadora que une amantes da música de
              todo o Brasil. Nossa missão é criar um espaço onde você possa
              descobrir novas músicas, compartilhar suas playlists favoritas e
              conectar-se com pessoas que compartilham sua paixão musical.
            </p>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 MusicHub. Todos os direitos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Termos de Serviço
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  );
}
