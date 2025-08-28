import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Star, Clock } from "lucide-react";
import { useState } from "react";

interface MovieCardProps {
  title: string;
  description: string;
  genre: string;
  rating?: number;
  duration?: string;
  year?: number;
  posterUrl?: string;
  streamUrl?: string;
  trailerUrl?: string;
}

export const MovieCard = ({ 
  title, 
  description, 
  genre, 
  rating, 
  duration, 
  year, 
  posterUrl, 
  streamUrl, 
  trailerUrl 
}: MovieCardProps) => {
  const [isWatching, setIsWatching] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);

  const handleWatch = () => {
    if (streamUrl) {
      setIsWatching(true);
      setShowTrailer(false);
    }
  };

  const handleTrailer = () => {
    if (trailerUrl) {
      setShowTrailer(true);
      setIsWatching(false);
    }
  };

  return (
    <Card className="game-card group cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
            {genre}
          </span>
          {year && (
            <span className="text-xs text-muted-foreground">{year}</span>
          )}
        </div>
        
        {posterUrl && !isWatching && !showTrailer && (
          <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-muted">
            <img 
              src={posterUrl} 
              alt={title}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="flex gap-2">
                <Button size="sm" onClick={handleWatch} className="gap-2">
                  <Play className="h-4 w-4" />
                  Watch
                </Button>
                {trailerUrl && (
                  <Button size="sm" variant="outline" onClick={handleTrailer}>
                    Trailer
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
        
        {(isWatching || showTrailer) && (
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src={isWatching ? streamUrl : trailerUrl}
              className="w-full h-full border-0"
              allowFullScreen
              title={isWatching ? title : `${title} Trailer`}
            />
            <div className="mt-2 flex gap-2">
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => { setIsWatching(false); setShowTrailer(false); }}
              >
                Close
              </Button>
              {!isWatching && streamUrl && (
                <Button size="sm" onClick={handleWatch}>
                  Watch Full Movie
                </Button>
              )}
            </div>
          </div>
        )}
      </CardHeader>
      
      <CardContent className="pt-0">
        <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        
        <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
          {rating && (
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{rating}/10</span>
            </div>
          )}
          {duration && (
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
          )}
        </div>
        
        <CardDescription className="text-sm text-muted-foreground mb-4">
          {description}
        </CardDescription>
        
        <div className="flex gap-2">
          <Button 
            onClick={handleWatch}
            className="flex-1 gap-2 bg-gradient-to-r from-accent to-neon-purple hover:opacity-90"
            disabled={!streamUrl}
          >
            <Play className="h-4 w-4" />
            {streamUrl ? (isWatching ? "Watching" : "Watch Movie") : "Coming Soon"}
          </Button>
          
          {trailerUrl && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleTrailer}
            >
              Trailer
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};