import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Palette, Type, Shapes, Image } from "lucide-react";

interface DesignControlsProps {
  designData: {
    mainHeading: string;
    subtitle: string;
    backgroundColor: string;
    textColor: string;
    font: string;
  };
  onUpdate: (updates: any) => void;
}

const colorPresets = [
  "#EF4444", "#F97316", "#F59E0B", "#10B981", "#06B6D4", 
  "#3B82F6", "#6366F1", "#8B5CF6", "#EC4899", "#1F2937"
];

const fonts = [
  "Inter", "Roboto", "Open Sans", "Playfair Display", "Montserrat", "Lora"
];

export default function DesignControls({ designData, onUpdate }: DesignControlsProps) {
  return (
    <div className="space-y-6 animate-slide-in-up" style={{animationDelay: '0.2s'}}>
      {/* Text Controls */}
      <Card className="card-hover-effect animate-bounce-in">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Type className="h-5 w-5" />
            Text
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="main-heading">Main Heading</Label>
            <Input
              id="main-heading"
              value={designData.mainHeading}
              onChange={(e) => onUpdate({ mainHeading: e.target.value })}
              placeholder="Enter main heading"
              data-testid="input-main-heading"
            />
          </div>
          <div>
            <Label htmlFor="subtitle">Subtitle</Label>
            <Input
              id="subtitle"
              value={designData.subtitle}
              onChange={(e) => onUpdate({ subtitle: e.target.value })}
              placeholder="Enter subtitle"
              data-testid="input-subtitle"
            />
          </div>
          <div>
            <Label htmlFor="font">Font Family</Label>
            <Select 
              value={designData.font} 
              onValueChange={(value) => onUpdate({ font: value })}
            >
              <SelectTrigger data-testid="select-font">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {fonts.map((font) => (
                  <SelectItem key={font} value={font}>
                    {font}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Color Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Colors
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Background Color</Label>
            <div className="grid grid-cols-5 gap-2 mt-2">
              {colorPresets.map((color, index) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-300 hover:scale-125 animate-bounce-in ${
                    designData.backgroundColor === color ? 'border-gray-900 animate-glow' : 'border-gray-300 hover:border-gray-500'
                  }`}
                  style={{ backgroundColor: color, animationDelay: `${index * 0.05}s` }}
                  onClick={() => {
                    onUpdate({ backgroundColor: color });
                    // Add wiggle effect
                    const button = document.querySelector(`[data-testid="color-preset-${color}"]`);
                    if (button) {
                      button.classList.add('animate-wiggle');
                      setTimeout(() => {
                        button.classList.remove('animate-wiggle');
                      }, 1000);
                    }
                  }}
                  data-testid={`color-preset-${color}`}
                />
              ))}
            </div>
            <Input
              type="color"
              value={designData.backgroundColor}
              onChange={(e) => onUpdate({ backgroundColor: e.target.value })}
              className="w-full mt-3 h-10"
              data-testid="input-background-color"
            />
          </div>
          <div>
            <Label>Text Color</Label>
            <div className="grid grid-cols-5 gap-2 mt-2">
              {colorPresets.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full border-2 ${
                    designData.textColor === color ? 'border-gray-900' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => onUpdate({ textColor: color })}
                  data-testid={`text-color-preset-${color}`}
                />
              ))}
            </div>
            <Input
              type="color"
              value={designData.textColor}
              onChange={(e) => onUpdate({ textColor: e.target.value })}
              className="w-full mt-3 h-10"
              data-testid="input-text-color"
            />
          </div>
        </CardContent>
      </Card>

      {/* Elements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shapes className="h-5 w-5" />
            Elements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            <Button 
              variant="outline" 
              className="flex flex-col items-center p-4 h-auto"
              data-testid="button-add-shapes"
            >
              <Shapes className="h-6 w-6 mb-1" />
              <span className="text-xs">Shapes</span>
            </Button>
            <Button 
              variant="outline" 
              className="flex flex-col items-center p-4 h-auto"
              data-testid="button-add-icons"
            >
              <Type className="h-6 w-6 mb-1" />
              <span className="text-xs">Icons</span>
            </Button>
            <Button 
              variant="outline" 
              className="flex flex-col items-center p-4 h-auto"
              data-testid="button-add-images"
            >
              <Image className="h-6 w-6 mb-1" />
              <span className="text-xs">Images</span>
            </Button>
            <Button 
              variant="outline" 
              className="flex flex-col items-center p-4 h-auto"
              data-testid="button-add-borders"
            >
              <Shapes className="h-6 w-6 mb-1" />
              <span className="text-xs">Borders</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
