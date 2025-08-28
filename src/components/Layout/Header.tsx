import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gamepad2, Play, Home } from "lucide-react";

export const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative">
            <Gamepad2 className="h-8 w-8 text-primary" />
            <div className="absolute inset-0 h-8 w-8 text-primary animate-pulse opacity-50" />
          </div>
          <span className="neon-text text-2xl font-bold">
            Ashbotanic Unblocked
          </span>
        </Link>

        <nav className="flex items-center space-x-1">
          <Button
            variant={location.pathname === "/" ? "default" : "ghost"}
            size="sm"
            asChild
          >
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
          </Button>
          
          <Button
            variant={location.pathname === "/games" ? "default" : "ghost"}
            size="sm"
            asChild
          >
            <Link to="/games" className="flex items-center space-x-2">
              <Gamepad2 className="h-4 w-4" />
              <span>Games</span>
            </Link>
          </Button>
          
          <Button
            variant={location.pathname === "/movies" ? "default" : "ghost"}
            size="sm"
            asChild
          >
            <Link to="/movies" className="flex items-center space-x-2">
              <Play className="h-4 w-4" />
              <span>Movies</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};