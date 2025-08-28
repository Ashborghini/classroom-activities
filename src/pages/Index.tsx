import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Play, Zap, Shield, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="relative mb-8">
            <h1 className="text-6xl font-bold mb-6">
              <span className="neon-text">Ashbotanic Lessons For Learning</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              The ultimate destination for learning the most possible every time you use this site!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="gap-2 bg-gradient-to-r from-primary to-neon-cyan hover:opacity-90">
              <Link to="/games">
                <Gamepad2 className="h-5 w-5" />
                Browse Games
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to="/movies">
                <Play className="h-5 w-5" />
                Watch Movies
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="neon-text">Ashbotanic Lessons For Learning</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="game-card text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Instant Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  No downloads, no installations. Play games and watch movies directly in your browser 
                  with just one click.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="game-card text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>School-Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  All content is carefully selected to be appropriate for school environments while 
                  still providing endless entertainment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="game-card text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-neon-purple" />
                </div>
                <CardTitle>Always Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Fresh content added regularly. New games and movies are constantly being added 
                  to keep your entertainment experience exciting.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="gradient-border">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Gamepad2 className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">Games Collection</CardTitle>
                  </div>
                  <CardDescription>
                    Dive into our growing collection of unblocked games including Snow Rider 3D, 
                    Terraria, and many more exciting titles.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full gap-2">
                    <Link to="/games">
                      <Gamepad2 className="h-4 w-4" />
                      Explore Games
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="gradient-border">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Play className="h-8 w-8 text-accent" />
                    <CardTitle className="text-2xl">Movies & Shows</CardTitle>
                  </div>
                  <CardDescription>
                    Stream movies and TV shows directly in your browser. No downloads needed - 
                    just click play and enjoy instant entertainment.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full gap-2">
                    <Link to="/movies">
                      <Play className="h-4 w-4" />
                      Browse Movies
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
