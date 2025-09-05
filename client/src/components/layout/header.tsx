import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Printer } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer" data-testid="link-home">
                <Printer className="text-primary text-2xl" />
                <h1 className="text-xl font-bold text-gray-900">PrintCraft</h1>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <a 
                href="#templates" 
                className="text-gray-600 hover:text-primary transition-colors"
                data-testid="link-templates"
              >
                Templates
              </a>
              <a 
                href="#designs" 
                className="text-gray-600 hover:text-primary transition-colors"
                data-testid="link-designs"
              >
                My Designs
              </a>
              <a 
                href="#pricing" 
                className="text-gray-600 hover:text-primary transition-colors"
                data-testid="link-pricing"
              >
                Pricing
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost"
              data-testid="button-sign-in"
            >
              Sign In
            </Button>
            <Link href="/design">
              <Button data-testid="button-get-started">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
