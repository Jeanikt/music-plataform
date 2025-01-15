import { Button } from "@/components/ui/button";
import { ArrowRight, Music2, Users, PlayCircle } from "lucide-react";
import Link from "next/link";
// import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-background/90" />
          {/* <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PIc4wSAxiT9qiUllILkn7uj2M25edN.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          /> */}
        </div>

        <div className="container-center relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Sua música. Sua comunidade.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Descubra, compartilhe e conecte-se através da música. Uma plataforma
            única que une amantes da música em uma experiência imersiva.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary">
              <Link href="/cadastro" className="flex items-center gap-2">
                Começar agora
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary">
              <Link href="/explorar">Explorar</Link>
            </Button>
          </div>
        </div>

        {/* Animated Wave */}
        <div className="absolute bottom-0 w-full">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              fillOpacity="0.1"
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            >
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,128L48,154.7C96,181,192,235,288,234.7C384,235,480,181,576,181.3C672,181,768,235,864,250.7C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container-center">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que escolher nossa plataforma?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Music2 className="w-8 h-8" />}
              title="Biblioteca Infinita"
              description="Acesse milhões de músicas e crie playlists personalizadas para qualquer momento."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Comunidade Vibrante"
              description="Conecte-se com outros amantes da música e compartilhe suas descobertas musicais."
            />
            <FeatureCard
              icon={<PlayCircle className="w-8 h-8" />}
              title="Experiência Única"
              description="Desfrute de uma interface intuitiva e recursos exclusivos para aprimorar sua experiência musical."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="glass-card p-6 rounded-xl hover-card">
      <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
