import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { type Template } from "@shared/schema";
import { Link } from "wouter";

const categories = [
  { id: "all", label: "All Templates" },
  { id: "banner", label: "Banners" },
  { id: "leaflet", label: "Leaflets" },
  { id: "poster", label: "Posters" },
];

export default function TemplateGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data: templates, isLoading } = useQuery({
    queryKey: ["/api/templates", selectedCategory === "all" ? undefined : selectedCategory],
  });

  const filteredTemplates = templates || [];
  
  // Group templates by category for display
  const bannerTemplates = Array.isArray(filteredTemplates) ? filteredTemplates.filter((t: Template) => t.category === "banner") : [];
  const leafletTemplates = Array.isArray(filteredTemplates) ? filteredTemplates.filter((t: Template) => t.category === "leaflet") : [];
  const posterTemplates = Array.isArray(filteredTemplates) ? filteredTemplates.filter((t: Template) => t.category === "poster") : [];

  return (
    <section id="templates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Template</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with professional templates and customize them to match your vision
          </p>
        </div>

        {/* Template Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="px-6 py-3 rounded-full font-medium"
              data-testid={`button-category-${category.id}`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {isLoading ? (
          <div className="space-y-16">
            {/* Loading skeletons for each category */}
            <div>
              <Skeleton className="h-8 w-64 mb-8" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className="h-80 w-full" />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Banner Templates */}
            {(selectedCategory === "all" || selectedCategory === "banner") && bannerTemplates.length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-gray-900">Banner Templates</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {bannerTemplates.map((template: Template, index: number) => (
                    <Card 
                      key={template.id} 
                      className={`overflow-hidden card-hover-effect cursor-pointer group animate-slide-in-up ${
                        template.id === 'banner-1' ? 'paper-airplane-card' : ''
                      }`}
                      style={{animationDelay: `${index * 0.1}s`}}
                      data-testid={`template-${template.id}`}
                      onClick={() => {
                        if (template.id === 'banner-1') {
                          const card = document.querySelector(`[data-testid="template-${template.id}"]`);
                          if (card) {
                            card.classList.add('animate-paperplane');
                            setTimeout(() => {
                              card.classList.remove('animate-paperplane');
                              // Navigate after animation
                              window.location.href = `/design?template=${template.id}`;
                            }, 1500);
                          }
                        }
                      }}
                    >
                      <div className="relative overflow-hidden">
                        <img 
                          src={template.thumbnail} 
                          alt={template.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                          <Link href={`/design?template=${template.id}`}>
                            <Button 
                              className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce-in glass-effect"
                              data-testid={`button-use-template-${template.id}`}
                            >
                              Use Template
                            </Button>
                          </Link>
                        </div>
                        {template.id === 'banner-1' && (
                          <div className="absolute top-2 right-2 text-2xl animate-wiggle">✈️</div>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{template.name}</h4>
                        <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">{template.description}</p>
                        {template.id === 'banner-1' && (
                          <p className="text-xs text-primary mt-2 animate-pulse">Click for paper airplane magic! ✨</p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Leaflet Templates */}
            {(selectedCategory === "all" || selectedCategory === "leaflet") && leafletTemplates.length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-gray-900">Leaflet Templates</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {leafletTemplates.map((template: Template) => (
                    <Card 
                      key={template.id} 
                      className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                      data-testid={`template-${template.id}`}
                    >
                      <div className="relative">
                        <img 
                          src={template.thumbnail} 
                          alt={template.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <Link href={`/design?template=${template.id}`}>
                            <Button 
                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              data-testid={`button-use-template-${template.id}`}
                            >
                              Use Template
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">{template.name}</h4>
                        <p className="text-gray-600 text-sm">{template.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Poster Templates */}
            {(selectedCategory === "all" || selectedCategory === "poster") && posterTemplates.length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-gray-900">Poster Templates</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {posterTemplates.map((template: Template) => (
                    <Card 
                      key={template.id} 
                      className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                      data-testid={`template-${template.id}`}
                    >
                      <div className="relative">
                        <img 
                          src={template.thumbnail} 
                          alt={template.name}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <Link href={`/design?template=${template.id}`}>
                            <Button 
                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              data-testid={`button-use-template-${template.id}`}
                            >
                              Use Template
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">{template.name}</h4>
                        <p className="text-gray-600 text-sm">{template.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        <div className="text-center">
          <Button size="lg" data-testid="button-view-all-templates">
            View All Templates
          </Button>
        </div>
      </div>
    </section>
  );
}
