import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";
import { useState } from "react";

interface GameCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
  gameUrl?: string;
  embedUrl?: string;
}

export const GameCard = ({ title, description, category, imageUrl, gameUrl, embedUrl }: GameCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (embedUrl) {
      setIsPlaying(true);
    } else if (gameUrl) {
      window.open(gameUrl, '_blank');
    }
  };

  return (
    <Card className="game-card group cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
        {imageUrl && !isPlaying && (
          <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Button size="sm" onClick={handlePlay} className="gap-2">
                <Play className="h-4 w-4" />
                Play Now
              </Button>
            </div>
          </div>
        )}
        {isPlaying && embedUrl && (
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src={embedUrl}
              className="w-full h-full border-0"
              allowFullScreen
              title={title}
            />
          </div>
        )}
      </CardHeader>
      
      <CardContent className="pt-0">
        <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-4">
          {description}
        </CardDescription>
        
        <div className="flex gap-2">
          <Button 
            onClick={handlePlay}
            className="flex-1 gap-2 bg-gradient-to-r from-primary to-neon-cyan hover:opacity-90"
          >
            <Play className="h-4 w-4" />
            {isPlaying ? "Playing" : "Play Game"}
          </Button>
          
          {gameUrl && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open(gameUrl, '_blank')}
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};