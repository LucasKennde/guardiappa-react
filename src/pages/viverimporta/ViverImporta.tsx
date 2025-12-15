import { Heart, Phone, Users, AlertCircle, HandHeart, MessageCircle, Shield, Sparkles } from "lucide-react";
import heroImage from "../../assets/hero-viver-importa.png";
import { Card, CardContent } from "../../components/ui/cardLife";
import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";

const ViverImporta = () => {
  const sinaisAlerta = [
    {
      icon: Heart,
      titulo: "Mudanças emocionais",
      descricao: "Tristeza persistente, irritabilidade frequente ou sensação de vazio que não passa."
    },
    {
      icon: Users,
      titulo: "Isolamento social",
      descricao: "Afastar-se de amigos, família ou atividades que antes eram prazerosas."
    },
    {
      icon: AlertCircle,
      titulo: "Alterações no comportamento",
      descricao: "Mudanças no sono, apetite ou desempenho escolar sem explicação aparente."
    },
    {
      icon: MessageCircle,
      titulo: "Expressões de desesperança",
      descricao: "Frases como 'não aguento mais' ou 'seria melhor se eu não estivesse aqui'."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="w-full max-w-screen-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Guardiã PPA</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#porque" className="text-foreground/80 hover:text-primary transition-colors">Por que falar</a>
            <a href="#sinais" className="text-foreground/80 hover:text-primary transition-colors">Sinais</a>
            <a href="#ajuda" className="text-foreground/80 hover:text-primary transition-colors">Buscar ajuda</a>
            <Link to="/#protetion">
              <Button variant="default" size="sm">
                Solicitar Proteção
              </Button>
            </Link>
          </nav>
          <Button variant="default" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>

      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight font-display">
                Viver Importa
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 mb-4 font-medium">
                Cuidar da saúde emocional também é uma forma de proteção.
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                A escola é um espaço de acolhimento e cuidado. Aqui, você encontra apoio para cuidar de si mesma e saber que nunca está sozinha.
              </p>
              <Button variant="hero" size="lg" className="group">
                <Heart className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Você não está sozinha
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-3xl" />
              <img
                src={heroImage}
                alt="Ilustração de apoio e acolhimento"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="porque" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Por que falar sobre isso?
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <HandHeart className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Cuidar é prevenir
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Falar sobre saúde emocional não é tabu — é um ato de cuidado. Quando falamos abertamente, criamos um ambiente onde pedir ajuda se torna natural e acolhedor.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  A escola como espaço de proteção
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Professores, gestores e colegas formam uma rede de apoio essencial. A escola é um lugar seguro onde você pode encontrar escuta, orientação e encaminhamento adequado.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Muitas vezes, o silêncio carrega mais peso do que as palavras. Quando criamos espaços seguros para conversar sobre nossos sentimentos, abrimos portas para a cura, o acolhimento e a esperança.
            </p>
          </div>
        </div>
      </section>

      <section id="sinais" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sinais que merecem atenção
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground">
              Reconhecer esses sinais — em você ou em alguém próximo — é o primeiro passo para buscar apoio. Lembre-se: perceber é cuidar.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {sinaisAlerta.map((sinal, index) => (
              <Card
                key={index}
                className="bg-card border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <sinal.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {sinal.titulo}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {sinal.descricao}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <p className="text-center text-foreground/80">
              <strong className="text-primary">Importante:</strong> Sentir-se assim não significa fraqueza. São sinais de que você precisa de apoio — e isso é completamente normal e humano.
            </p>
          </div>
        </div>
      </section>

      <section id="ajuda" className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Como buscar ajuda
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground">
              Pedir ajuda é um ato de coragem e autocuidado. Você não precisa enfrentar nada sozinha.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-none shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Na escola
                </h3>
                <p className="text-muted-foreground">
                  Converse com um professor de confiança, coordenação pedagógica ou equipe gestora. Eles estão preparados para te ouvir e ajudar.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-none shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Pessoas de confiança
                </h3>
                <p className="text-muted-foreground">
                  Procure alguém em quem você confia — pode ser um familiar, amigo ou responsável. Compartilhar o que sente já é um grande passo.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-none shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  CVV - Ligue 188
                </h3>
                <p className="text-muted-foreground">
                  O Centro de Valorização da Vida oferece apoio emocional 24 horas, de forma gratuita e sigilosa. Ligue ou acesse cvv.org.br.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-none shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="bg-primary p-8 md:p-12 flex flex-col justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-6">
                      <Shield className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                      Parte do Guardiã PPA
                    </h3>
                    <p className="text-primary-foreground/90">
                      O projeto Viver Importa faz parte da iniciativa Guardiã PPA, que existe para proteger, acolher e escutar você.
                    </p>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      A Aurora, nossa Guardiã PPA, está aqui para te ouvir. Se você precisa de apoio ou quer relatar algo que está acontecendo, nossa plataforma é um canal seguro e acolhedor.
                    </p>
                    <Link to="/">
                      <Button variant="default" size="lg" className="w-full sm:w-auto">
                        <HandHeart className="w-5 h-5 mr-2" />
                        Solicitar Proteção
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-primary animate-pulse" />
            </div>
            <blockquote className="text-2xl md:text-4xl font-bold text-foreground leading-relaxed mb-8">
              "Você importa. Sua vida importa.
              <span className="text-primary block mt-2">E você não precisa passar por isso sozinha."</span>
            </blockquote>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </div>
      </section>

      <footer className="bg-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-background">Guardiã PPA</span>
              </div>
              <p className="text-background/70 text-sm">
                Tecnologia no combate à violência e proteção às meninas nas escolas públicas.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-background mb-4">Links</h4>
              <ul className="space-y-2 text-background/70 text-sm">
                <li><a href="/" className="hover:text-primary transition-colors">Página Inicial</a></li>
                <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
                <li><a href="#ajuda" className="hover:text-primary transition-colors">Buscar Ajuda</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-background mb-4">Apoio</h4>
              <ul className="space-y-2 text-background/70 text-sm">
                <li>CVV: <strong className="text-primary">188</strong></li>
                <li>24 horas, gratuito e sigiloso</li>
                <li><a href="https://cvv.org.br" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">cvv.org.br</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/10 mt-8 pt-8 text-center">
            <p className="text-background/50 text-sm">
              © 2024 Guardiã PPA - EEMTI Poeta Patativa do Assaré. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ViverImporta;
