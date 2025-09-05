import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Flag, FileText, Image as ImageIcon, Zap } from "lucide-react";

interface IdeaFormProps {
  onSubmit: (formData: any) => void;
  isLoading?: boolean;
}

export default function IdeaForm({ onSubmit, isLoading }: IdeaFormProps) {
  const [selectedType, setSelectedType] = useState<string>("");
  const [ideaDescription, setIdeaDescription] = useState("");
  const [size, setSize] = useState("standard");
  const [colorPreference, setColorPreference] = useState("auto");

  const designTypes = [
    { id: "banner", label: "Banner", icon: Flag },
    { id: "leaflet", label: "Leaflet", icon: FileText },
    { id: "poster", label: "Poster", icon: ImageIcon },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedType || !ideaDescription.trim()) {
      return;
    }

    onSubmit({
      type: selectedType,
      ideaDescription,
      size,
      colorPreference,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label className="text-sm font-medium text-gray-700 mb-2 block">
          What type of design do you need?
        </Label>
        <div className="grid grid-cols-3 gap-4">
          {designTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <Card
                key={type.id}
                className={`cursor-pointer transition-all duration-300 transform hover:scale-105 animate-bounce-in ${
                  selectedType === type.id
                    ? "border-primary bg-gradient-to-br from-primary/10 to-primary/5 shadow-lg animate-glow"
                    : "border-gray-300 hover:border-primary/50 hover:shadow-md card-hover-effect"
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => {
                  setSelectedType(type.id);
                  // Add a little wiggle animation when selected
                  const card = document.querySelector(`[data-testid="design-type-${type.id}"]`);
                  if (card) {
                    card.classList.add('animate-wiggle');
                    setTimeout(() => {
                      card.classList.remove('animate-wiggle');
                    }, 1000);
                  }
                }}
                data-testid={`design-type-${type.id}`}
              >
                <CardContent className="p-4 text-center">
                  <div className={`transition-all duration-300 ${selectedType === type.id ? 'animate-bounce' : ''}`}>
                    <IconComponent className={`h-8 w-8 mx-auto mb-2 transition-colors duration-300 ${
                      selectedType === type.id ? 'text-primary' : 'text-gray-600 group-hover:text-primary'
                    }`} />
                  </div>
                  <span className={`font-medium transition-colors duration-300 ${
                    selectedType === type.id ? 'text-primary' : 'text-gray-700'
                  }`}>{type.label}</span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div>
        <Label htmlFor="design-idea" className="text-sm font-medium text-gray-700 mb-2 block">
          Describe your design idea
        </Label>
        <Textarea
          id="design-idea"
          rows={4}
          value={ideaDescription}
          onChange={(e) => setIdeaDescription(e.target.value)}
          placeholder="e.g., I need a banner for my bakery's grand opening. It should be warm and inviting with images of fresh bread and pastries. The main text should say 'Grand Opening - 50% Off First Week!'"
          className="w-full"
          data-testid="textarea-idea-description"
        />
        <p className="text-sm text-gray-500 mt-2">
          Be as descriptive as possible - mention colors, style, text, and any specific elements you want
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Size/Format
          </Label>
          <Select value={size} onValueChange={setSize}>
            <SelectTrigger data-testid="select-size">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard (11" x 17")</SelectItem>
              <SelectItem value="large">Large (18" x 24")</SelectItem>
              <SelectItem value="small">Small (8.5" x 11")</SelectItem>
              <SelectItem value="custom">Custom Size</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Color Preference
          </Label>
          <Select value={colorPreference} onValueChange={setColorPreference}>
            <SelectTrigger data-testid="select-color-preference">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="auto">Let AI decide</SelectItem>
              <SelectItem value="bright">Bright & Colorful</SelectItem>
              <SelectItem value="professional">Professional & Clean</SelectItem>
              <SelectItem value="dark">Dark & Bold</SelectItem>
              <SelectItem value="warm">Warm & Friendly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          type="submit"
          size="lg"
          disabled={!selectedType || !ideaDescription.trim() || isLoading}
          className="px-8 py-4"
          data-testid="button-generate-design"
        >
          {isLoading ? (
            "Generating..."
          ) : (
            <>
              <Zap className="h-5 w-5 mr-2" />
              Generate Design Options
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
