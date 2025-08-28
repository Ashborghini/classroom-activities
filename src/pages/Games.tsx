import { GameCard } from "@/components/GameCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { useState } from "react";

const Games = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample games data with Snow Rider 3D and Terraria
  const games = [
    {
      title: "Snow Rider 3D",
      description: "Race down snowy mountains on your sled! Avoid obstacles, collect coins, and unlock new sleds in this thrilling 3D winter sports game.",
      category: "Racing",
      imageUrl: "/placeholder.svg?height=200&width=300",
      gameUrl: "https://snowrider3d.com/",
      embedUrl: "https://snowrider3d.com/"
    },
    {
      title: "Terraria",
      description: "Dig, fight, explore, build! The classic 2D sandbox adventure game where you can craft, build, and survive in procedurally generated worlds.",
      category: "Sandbox",
      imageUrl: "/placeholder.svg?height=200&width=300",
      gameUrl: "#",
      embedUrl: "" // Terraria would need a web version
    },
    // Placeholder slots for more games
    {
      title: "Game Slot 3",
      description: "This slot is ready for your next favorite unblocked game. Add the game data to start playing!",
      category: "Coming Soon",
      imageUrl: "/placeholder.svg?height=200&width=300",
      gameUrl: "",
      embedUrl: ""
    },
    {
      title: "Game Slot 4",
      description: "Another available slot for popular unblocked games. Perfect for adding puzzle, action, or strategy games.",
      category: "Coming Soon",
      imageUrl: "/placeholder.svg?height=200&width=300",
      gameUrl: "",
      embedUrl: ""
    },
    {
      title: "Game Slot 5",
      description: "Ready to host your favorite classroom-friendly games. Add multiplayer or single-player games here.",
      category: "Coming Soon",
      imageUrl: "/placeholder.svg?height=200&width=300",
      gameUrl: "",
      embedUrl: ""
    },
    {
      title: "Game Slot 6",
      description: "Space available for educational games, brain teasers, or any other unblocked entertainment.",
      category: "Coming Soon",
      imageUrl: "/placeholder.svg?height=200&width=300",
      gameUrl: "",
      embedUrl: ""
    }
  ];

  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    game.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className="neon-text">Games</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Play your favorite games directly in your browser. No downloads, no restrictions - just pure gaming fun!
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for games..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game, index) => (
            <GameCard
              key={index}
              title={game.title}
              description={game.description}
              category={game.category}
              imageUrl={game.imageUrl}
              gameUrl={game.gameUrl}
              embedUrl={game.embedUrl}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No games found matching your search. Try different keywords!
            </p>
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="gradient-border inline-block">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Want to add more games?</h3>
              <p className="text-muted-foreground">
                We're constantly adding new games. Check back soon for more exciting titles!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;