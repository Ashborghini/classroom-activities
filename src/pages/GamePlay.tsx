import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
  gameUrl?: string;
  embedUrl?: string;
}

const GamePlay = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const navigate = useNavigate();
  const [game, setGame] = useState<Game | null>(null);

  // Sample games data - this should match the data from Games.tsx
  const games: Game[] = [
    {
      id: "snow-rider-3d",
      title: "Snow Rider 3D",
      description: "Race down snowy mountains on your sled! Avoid obstacles, collect coins, and unlock new sleds in this thrilling 3D winter sports game.",
      category: "Racing",
      imageUrl: "/placeholder.svg?height=200&width=300",
      gameUrl: "/games/snow-rider-3d.html",
      embedUrl: "/games/snow-rider-3d.html"
    },
    {
      id: "terraria",
      title: "Terraria",
      description: "Dig, fight, explore, build! The classic 2D sandbox adventure game where you can craft, build, and survive in procedurally generated worlds.",
      category: "Sandbox",
      imageUrl: "/placeholder.svg?height=200&width=300",
      gameUrl: "#",
      embedUrl: "" // Terraria would need a web version
    }
  ];

  useEffect(() => {
    const foundGame = games.find(g => g.id === gameId);
    setGame(foundGame || null);
  }, [gameId]);

  const handleReload = () => {
    window.location.reload();
  };

  if (!game) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Game Not Found</h1>
          <p className="text-muted-foreground mb-6">The game you're looking for doesn't exist.</p>
          <Link to="/games">
            <Button className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Games
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!game.embedUrl) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{game.title}</h1>
          <p className="text-muted-foreground mb-6">This game is not available for embedded play yet.</p>
          <Link to="/games">
            <Button className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Games
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/games">
                <Button variant="outline" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Games
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-semibold">{game.title}</h1>
                <p className="text-sm text-muted-foreground">{game.category}</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleReload}
              className="gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Reload Game
            </Button>
          </div>
        </div>
      </div>

      {/* Game Container */}
      <div className="container mx-auto px-4 py-6">
        <div className="aspect-video w-full max-w-6xl mx-auto bg-muted rounded-lg overflow-hidden border shadow-lg">
          <iframe
            src={game.embedUrl}
            className="w-full h-full border-0"
            allowFullScreen
            title={game.title}
            allow="fullscreen; gamepad; microphone; camera"
          />
        </div>
        
        {/* Game Info */}
        <div className="max-w-6xl mx-auto mt-6">
          <div className="bg-card rounded-lg p-6 border">
            <h2 className="text-lg font-semibold mb-2">About {game.title}</h2>
            <p className="text-muted-foreground">{game.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePlay;