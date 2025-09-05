import { type Template, type InsertTemplate, type Design, type InsertDesign, type PrintOrder, type InsertPrintOrder } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Templates
  getTemplates(): Promise<Template[]>;
  getTemplatesByCategory(category: string): Promise<Template[]>;
  getTemplate(id: string): Promise<Template | undefined>;
  
  // Designs
  createDesign(design: InsertDesign): Promise<Design>;
  getDesign(id: string): Promise<Design | undefined>;
  getDesigns(): Promise<Design[]>;
  updateDesign(id: string, updates: Partial<InsertDesign>): Promise<Design | undefined>;
  deleteDesign(id: string): Promise<boolean>;
  
  // Print Orders
  createPrintOrder(order: InsertPrintOrder): Promise<PrintOrder>;
  getPrintOrder(id: string): Promise<PrintOrder | undefined>;
  getPrintOrders(): Promise<PrintOrder[]>;
}

export class MemStorage implements IStorage {
  private templates: Map<string, Template>;
  private designs: Map<string, Design>;
  private printOrders: Map<string, PrintOrder>;

  constructor() {
    this.templates = new Map();
    this.designs = new Map();
    this.printOrders = new Map();
    this.initializeTemplates();
  }

  private initializeTemplates() {
    const defaultTemplates: Template[] = [
      // Banner Templates
      {
        id: "banner-1",
        name: "Business Promotion",
        category: "banner",
        thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        description: "Professional banner for business events",
        designData: {
          backgroundColor: "#6366F1",
          textColor: "#FFFFFF",
          layout: "centered",
          fonts: ["Inter"],
        },
        createdAt: new Date(),
      },
      {
        id: "banner-2",
        name: "Event Celebration",
        category: "banner",
        thumbnail: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        description: "Vibrant banner for parties and events",
        designData: {
          backgroundColor: "#F59E0B",
          textColor: "#1F2937",
          layout: "dynamic",
          fonts: ["Inter"],
        },
        createdAt: new Date(),
      },
      {
        id: "banner-3",
        name: "Sale & Discount",
        category: "banner",
        thumbnail: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        description: "Eye-catching banner for promotions",
        designData: {
          backgroundColor: "#EF4444",
          textColor: "#FFFFFF",
          layout: "bold",
          fonts: ["Inter"],
        },
        createdAt: new Date(),
      },
      {
        id: "banner-4",
        name: "Technology",
        category: "banner",
        thumbnail: "https://pixabay.com/get/g2eabd38f5ed7a4dea942603b08329fd58af282961da2a919eedcd39cef6ebcedf57c1b8f3a9e17d5bf2dd37d66beb8e0bb56298a3b24e40f18244bb30b492c84_1280.jpg",
        description: "Modern banner for tech companies",
        designData: {
          backgroundColor: "#1F2937",
          textColor: "#10B981",
          layout: "modern",
          fonts: ["Inter"],
        },
        createdAt: new Date(),
      },
      {
        id: "banner-5",
        name: "Restaurant",
        category: "banner",
        thumbnail: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        description: "Delicious banner for food businesses",
        designData: {
          backgroundColor: "#F97316",
          textColor: "#FFFFFF",
          layout: "appetizing",
          fonts: ["Inter"],
        },
        createdAt: new Date(),
      },
      {
        id: "banner-6",
        name: "Fitness & Health",
        category: "banner",
        thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        description: "Energetic banner for gyms and wellness",
        designData: {
          backgroundColor: "#10B981",
          textColor: "#FFFFFF",
          layout: "energetic",
          fonts: ["Inter"],
        },
        createdAt: new Date(),
      },
      // Leaflet Templates
      {
        id: "leaflet-1",
        name: "Corporate",
        category: "leaflet",
        thumbnail: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
        description: "Professional business leaflet",
        designData: {
          backgroundColor: "#FFFFFF",
          textColor: "#1F2937",
          layout: "professional",
          fonts: ["Inter"],
        },
        createdAt: new Date(),
      },
      {
        id: "leaflet-2",
        name: "Real Estate",
        category: "leaflet",
        thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
        description: "Property showcase leaflet",
        designData: {
          backgroundColor: "#F3F4F6",
          textColor: "#374151",
          layout: "showcase",
          fonts: ["Inter"],
        },
        createdAt: new Date(),
      },
      {
        id: "leaflet-3",
        name: "Medical",
        category: "leaflet",
        thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
        description: "Healthcare information leaflet",
        designData: {
          backgroundColor: "#DBEAFE",
          textColor: "#1E40AF",
          layout: "clean",
          fonts: ["Inter"],
        },
        createdAt: new Date(),
      },
      {
        id: "leaflet-4",
        name: "Educational",
        category: "leaflet",
        thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
        description: "Learning and training leaflet",
        designData: {
          backgroundColor: "#FEF3C7",
          textColor: "#92400E",
          layout: "academic",
          fonts: ["Inter"],
        },
        createdAt: new Date(),
      },
      // Poster Templates
      {
        id: "poster-1",
        name: "Movie/Entertainment",
        category: "poster",
        thumbnail: "https://pixabay.com/get/g1451eeb987d53ae4b78053847056ac4fcd38fe84ea7dd8ad26e19e1879092703fb024bf7d01e152b9904720492866e5706da13e05341a16fceb9dbabff100449_1280.jpg",
        description: "Cinematic poster design",
        designData: {
          backgroundColor: "#000000",
          textColor: "#F59E0B",
          layout: "dramatic",
          fonts: ["Inter"],
        },
        createdAt: new Date(),
      },
      {
        id: "poster-2",
        name: "Concert/Music",
        category: "poster",
        thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        description: "Musical event poster",
        designData: {
          backgroundColor: "#7C3AED",
          textColor: "#FFFFFF",
          layout: "musical",
          fonts: ["Inter"],
        },
        createdAt: new Date(),
      },
      {
        id: "poster-3",
        name: "Motivational",
        category: "poster",
        thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        description: "Inspirational poster design",
        designData: {
          backgroundColor: "#059669",
          textColor: "#FFFFFF",
          layout: "inspiring",
          fonts: ["Inter"],
        },
        createdAt: new Date(),
      },
      {
        id: "poster-4",
        name: "Sports",
        category: "poster",
        thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        description: "Athletic event poster",
        designData: {
          backgroundColor: "#DC2626",
          textColor: "#FFFFFF",
          layout: "dynamic",
          fonts: ["Inter"],
        },
        createdAt: new Date(),
      },
    ];

    defaultTemplates.forEach(template => {
      this.templates.set(template.id, template);
    });
  }

  async getTemplates(): Promise<Template[]> {
    return Array.from(this.templates.values());
  }

  async getTemplatesByCategory(category: string): Promise<Template[]> {
    return Array.from(this.templates.values()).filter(
      template => template.category === category
    );
  }

  async getTemplate(id: string): Promise<Template | undefined> {
    return this.templates.get(id);
  }

  async createDesign(insertDesign: InsertDesign): Promise<Design> {
    const id = randomUUID();
    const now = new Date();
    const design: Design = { 
      ...insertDesign,
      size: insertDesign.size || "standard",
      status: insertDesign.status || "draft",
      colorPreference: insertDesign.colorPreference || "auto",
      id, 
      createdAt: now,
      updatedAt: now 
    };
    this.designs.set(id, design);
    return design;
  }

  async getDesign(id: string): Promise<Design | undefined> {
    return this.designs.get(id);
  }

  async getDesigns(): Promise<Design[]> {
    return Array.from(this.designs.values());
  }

  async updateDesign(id: string, updates: Partial<InsertDesign>): Promise<Design | undefined> {
    const design = this.designs.get(id);
    if (!design) return undefined;

    const updatedDesign: Design = { 
      ...design, 
      ...updates,
      updatedAt: new Date()
    };
    this.designs.set(id, updatedDesign);
    return updatedDesign;
  }

  async deleteDesign(id: string): Promise<boolean> {
    return this.designs.delete(id);
  }

  async createPrintOrder(insertOrder: InsertPrintOrder): Promise<PrintOrder> {
    const id = randomUUID();
    const order: PrintOrder = { 
      ...insertOrder,
      quantity: insertOrder.quantity || 1,
      paperType: insertOrder.paperType || "standard",
      finishType: insertOrder.finishType || "matte",
      status: insertOrder.status || "pending",
      id, 
      createdAt: new Date() 
    };
    this.printOrders.set(id, order);
    return order;
  }

  async getPrintOrder(id: string): Promise<PrintOrder | undefined> {
    return this.printOrders.get(id);
  }

  async getPrintOrders(): Promise<PrintOrder[]> {
    return Array.from(this.printOrders.values());
  }
}

export const storage = new MemStorage();
