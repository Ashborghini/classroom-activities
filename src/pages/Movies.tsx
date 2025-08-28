import { MovieCard } from "@/components/MovieCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Video } from "lucide-react";
import { useState } from "react";

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample movie slots - ready for content
  const movies = [
    {
      title: "Movie Slot 1",
      description: "This slot is ready for your first movie. Add streaming links and movie details to start watching popular films and shows.",
      genre: "Coming Soon",
      rating: 0,
      duration: "TBD",
      year: 2024,
      posterUrl: "/placeholder.svg?height=400&width=300",
      streamUrl: "",
      trailerUrl: ""
    },
    {
      title: "Movie Slot 2", 
      description: "Perfect for action movies, comedies, or dramas. This slot can host any genre of film with embedded video streaming.",
      genre: "Coming Soon",
      rating: 0,
      duration: "TBD", 
      year: 2024,
      posterUrl: "/placeholder.svg?height=400&width=300",
      streamUrl: "",
      trailerUrl: ""
    },
    {
      title: "Movie Slot 3",
      description: "Ideal for popular TV shows, documentaries, or educational content. Stream directly without downloads.",
      genre: "Coming Soon", 
      rating: 0,
      duration: "TBD",
      year: 2024,
      posterUrl: "/placeholder.svg?height=400&width=300", 
      streamUrl: "",
      trailerUrl: ""
    },
    {
      title: "Movie Slot 4",
      description: "Another available slot for blockbuster movies or indie films. Add your favorite content here for instant streaming.",
      genre: "Coming Soon",
      rating: 0,
      duration: "TBD",
      year: 2024,
      posterUrl: "/placeholder.svg?height=400&width=300",
      streamUrl: "",
      trailerUrl: ""
    },
    {
      title: "Movie Slot 5",
      description: "Great for animated movies, sci-fi, or horror films. This slot supports all video formats and streaming services.",
      genre: "Coming Soon",
      rating: 0,
      duration: "TBD", 
      year: 2024,
      posterUrl: "/placeholder.svg?height=400&width=300",
      streamUrl: "",
      trailerUrl: ""
    },
    {
      title: "Movie Slot 6",
      description: "Perfect for foreign films, classics, or the latest releases. Easy to update with new streaming content.",
      genre: "Coming Soon",
      rating: 0,
      duration: "TBD",
      year: 2024,
      posterUrl: "/placeholder.svg?height=400&width=300",
      streamUrl: "",
      trailerUrl: ""
    }
  ];

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className="neon-text">Unblocked Movies</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stream movies and shows directly in your browser. No downloads required - just click and watch!
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for movies and shows..."
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

        {/* Featured Streaming Info */}
        <div className="mb-8">
          <div className="gradient-border max-w-4xl mx-auto">
            <div className="p-6 text-center">
              <Video className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Instant Streaming</h3>
              <p className="text-muted-foreground">
                All movies are embedded for direct streaming. No need to download files or use external players. 
                Just click play and enjoy your entertainment!
              </p>
            </div>
          </div>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMovies.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie.title}
              description={movie.description}
              genre={movie.genre}
              rating={movie.rating || undefined}
              duration={movie.duration}
              year={movie.year}
              posterUrl={movie.posterUrl}
              streamUrl={movie.streamUrl}
              trailerUrl={movie.trailerUrl}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredMovies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No movies found matching your search. Try different keywords!
            </p>
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="gradient-border inline-block">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Content Library Expanding</h3>
              <p className="text-muted-foreground">
                We're working on adding popular movies and shows. Each slot will be filled with high-quality streaming content soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;