import { Card } from "@/components/ui/card";
import { type Design } from "@shared/schema";
import { ImageIcon } from "lucide-react";

interface DesignCanvasProps {
  design?: Design;
  designData: {
    mainHeading: string;
    subtitle: string;
    backgroundColor: string;
    textColor: string;
    font: string;
  };
}

export default function DesignCanvas({ design, designData }: DesignCanvasProps) {
  const aspectRatio = design?.type === "poster" ? "3/4" : 
                      design?.type === "leaflet" ? "4/5" : "16/9";

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-4 animate-slide-in-up">
      <Card 
        className="w-full shadow-xl overflow-hidden card-hover-effect animate-bounce-in"
        style={{ aspectRatio }}
        data-testid="design-canvas"
      >
        <div 
          className="w-full h-full flex flex-col items-center justify-center p-8 relative transition-all duration-500"
          style={{ 
            backgroundColor: designData.backgroundColor,
            color: designData.textColor,
            fontFamily: designData.font 
          }}
        >
          {designData.mainHeading || designData.subtitle ? (
            <div className="text-center">
              {designData.mainHeading && (
                <h1 
                  className="text-4xl md:text-6xl font-bold mb-4"
                  data-testid="canvas-main-heading"
                >
                  {designData.mainHeading}
                </h1>
              )}
              {designData.subtitle && (
                <p 
                  className="text-xl md:text-2xl opacity-90"
                  data-testid="canvas-subtitle"
                >
                  {designData.subtitle}
                </p>
              )}
            </div>
          ) : (
            <div className="text-center text-gray-500 border-2 border-dashed border-gray-300 rounded-lg p-8 w-full h-full flex flex-col items-center justify-center">
              <ImageIcon className="h-16 w-16 mb-4" />
              <p>Your design will appear here</p>
              <p className="text-sm mt-2">Add text and customize your design using the controls</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
