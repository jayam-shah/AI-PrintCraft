import { useState, useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import DesignCanvas from "@/components/design/design-canvas";
import DesignControls from "@/components/design/design-controls";
import IdeaForm from "@/components/design/idea-form";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { type Design } from "@shared/schema";
import { ArrowLeft, Eye, Download, Printer } from "lucide-react";
import { Link } from "wouter";

type DesignStep = "idea" | "customize" | "print";

export default function DesignStudio() {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const [currentStep, setCurrentStep] = useState<DesignStep>("idea");
  const [designData, setDesignData] = useState({
    mainHeading: "",
    subtitle: "",
    backgroundColor: "#6366F1",
    textColor: "#FFFFFF",
    font: "Inter",
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch existing design if ID is provided
  const { data: design, isLoading } = useQuery({
    queryKey: ["/api/designs", id],
    enabled: !!id,
  });

  useEffect(() => {
    if (design) {
      setCurrentStep("customize");
      setDesignData((design.designData as any) || designData);
    }
  }, [design]);

  // Create design mutation
  const createDesignMutation = useMutation({
    mutationFn: async (designRequest: any) => {
      const response = await apiRequest("POST", "/api/designs", designRequest);
      return response.json();
    },
    onSuccess: (newDesign: Design) => {
      queryClient.invalidateQueries({ queryKey: ["/api/designs"] });
      setLocation(`/design/${newDesign.id}`);
      setCurrentStep("customize");
      toast({
        title: "Design Created",
        description: "Your design has been created successfully!",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create design. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Update design mutation
  const updateDesignMutation = useMutation({
    mutationFn: async (updates: any) => {
      const response = await apiRequest("PUT", `/api/designs/${id}`, updates);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/designs", id] });
      toast({
        title: "Design Updated",
        description: "Your changes have been saved.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to save changes. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Generate PDF mutation
  const generatePdfMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", `/api/designs/${id}/pdf`);
      return response.json();
    },
    onSuccess: (pdfData) => {
      toast({
        title: "PDF Generated",
        description: `Your ${pdfData.fileName} is ready for download!`,
      });
      setCurrentStep("print");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleCreateDesign = (formData: any) => {
    createDesignMutation.mutate({
      title: `${formData.type} Design`,
      type: formData.type,
      ideaDescription: formData.ideaDescription,
      size: formData.size,
      colorPreference: formData.colorPreference,
      templateId: formData.templateId,
      designData: designData,
    });
  };

  const handleUpdateDesign = (updates: any) => {
    setDesignData({ ...designData, ...updates });
    if (id) {
      updateDesignMutation.mutate({
        designData: { ...designData, ...updates },
      });
    }
  };

  const handleGeneratePdf = () => {
    if (id) {
      generatePdfMutation.mutate();
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Skeleton className="h-8 w-64 mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Skeleton className="h-96 w-full" />
            </div>
            <div>
              <Skeleton className="h-64 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm" data-testid="button-back-home">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                currentStep === "idea" ? "bg-primary text-white" : "bg-gray-300 text-gray-600"
              }`}>1</div>
              <span className={`ml-2 text-sm font-medium ${
                currentStep === "idea" ? "text-primary" : "text-gray-600"
              }`}>Your Idea</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                currentStep === "customize" ? "bg-primary text-white" : 
                currentStep === "print" ? "bg-primary text-white" : "bg-gray-300 text-gray-600"
              }`}>2</div>
              <span className={`ml-2 text-sm font-medium ${
                currentStep === "customize" || currentStep === "print" ? "text-primary" : "text-gray-600"
              }`}>Customize</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                currentStep === "print" ? "bg-primary text-white" : "bg-gray-300 text-gray-600"
              }`}>3</div>
              <span className={`ml-2 text-sm font-medium ${
                currentStep === "print" ? "text-primary" : "text-gray-600"
              }`}>Print</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <Card className="max-w-6xl mx-auto">
          <CardContent className="p-8">
            {currentStep === "idea" && (
              <div data-testid="step-idea">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-4">Let's Create Your Design</h2>
                  <p className="text-gray-600">Tell us about your design idea and we'll help bring it to life</p>
                </div>
                <IdeaForm 
                  onSubmit={handleCreateDesign} 
                  isLoading={createDesignMutation.isPending}
                />
              </div>
            )}

            {currentStep === "customize" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-testid="step-customize">
                <div className="lg:col-span-2">
                  <DesignCanvas design={design} designData={designData} />
                  <div className="flex justify-center mt-4 space-x-4">
                    <Button variant="outline" size="sm" data-testid="button-undo">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Undo
                    </Button>
                    <Button variant="outline" size="sm" data-testid="button-preview">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button 
                      onClick={handleGeneratePdf}
                      disabled={generatePdfMutation.isPending}
                      data-testid="button-generate-pdf"
                    >
                      {generatePdfMutation.isPending ? (
                        "Generating..."
                      ) : (
                        <>
                          <Download className="h-4 w-4 mr-2" />
                          Generate PDF
                        </>
                      )}
                    </Button>
                  </div>
                </div>
                <div>
                  <DesignControls 
                    designData={designData}
                    onUpdate={handleUpdateDesign}
                  />
                </div>
              </div>
            )}

            {currentStep === "print" && (
              <div className="text-center" data-testid="step-print">
                <div className="mb-8">
                  <Printer className="h-16 w-16 mx-auto text-primary mb-4" />
                  <h2 className="text-2xl font-bold mb-4">Your Design is Ready!</h2>
                  <p className="text-gray-600 mb-8">
                    Your PDF has been generated and is ready for download or printing.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Download className="h-8 w-8 mx-auto text-blue-600 mb-3" />
                      <h3 className="font-semibold mb-2">Download PDF</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Download your design as a high-resolution PDF file
                      </p>
                      <Button className="w-full" data-testid="button-download-pdf">
                        Download PDF
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Printer className="h-8 w-8 mx-auto text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Order Prints</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Let us print and ship your design professionally
                      </p>
                      <Button variant="secondary" className="w-full" data-testid="button-order-prints">
                        Order Prints
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
