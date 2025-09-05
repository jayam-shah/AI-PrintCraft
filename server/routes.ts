import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDesignSchema, insertPrintOrderSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Templates routes
  app.get("/api/templates", async (req, res) => {
    try {
      const { category } = req.query;
      let templates;
      
      if (category && typeof category === 'string') {
        templates = await storage.getTemplatesByCategory(category);
      } else {
        templates = await storage.getTemplates();
      }
      
      res.json(templates);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch templates" });
    }
  });

  app.get("/api/templates/:id", async (req, res) => {
    try {
      const template = await storage.getTemplate(req.params.id);
      if (!template) {
        return res.status(404).json({ message: "Template not found" });
      }
      res.json(template);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch template" });
    }
  });

  // Designs routes
  app.post("/api/designs", async (req, res) => {
    try {
      const validatedData = insertDesignSchema.parse(req.body);
      const design = await storage.createDesign(validatedData);
      res.status(201).json(design);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid design data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create design" });
    }
  });

  app.get("/api/designs", async (req, res) => {
    try {
      const designs = await storage.getDesigns();
      res.json(designs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch designs" });
    }
  });

  app.get("/api/designs/:id", async (req, res) => {
    try {
      const design = await storage.getDesign(req.params.id);
      if (!design) {
        return res.status(404).json({ message: "Design not found" });
      }
      res.json(design);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch design" });
    }
  });

  app.put("/api/designs/:id", async (req, res) => {
    try {
      const validatedData = insertDesignSchema.partial().parse(req.body);
      const design = await storage.updateDesign(req.params.id, validatedData);
      if (!design) {
        return res.status(404).json({ message: "Design not found" });
      }
      res.json(design);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid design data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to update design" });
    }
  });

  app.delete("/api/designs/:id", async (req, res) => {
    try {
      const deleted = await storage.deleteDesign(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: "Design not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete design" });
    }
  });

  // Generate PDF for design (mock implementation)
  app.post("/api/designs/:id/pdf", async (req, res) => {
    try {
      const design = await storage.getDesign(req.params.id);
      if (!design) {
        return res.status(404).json({ message: "Design not found" });
      }

      // Mock PDF generation - in a real app, you'd use PDFKit or Puppeteer
      const pdfData = {
        designId: design.id,
        fileName: `${design.title.replace(/\s+/g, '_')}.pdf`,
        downloadUrl: `/api/downloads/${design.id}.pdf`,
        size: "2.5MB",
        pages: 1,
        format: design.size,
      };

      res.json(pdfData);
    } catch (error) {
      res.status(500).json({ message: "Failed to generate PDF" });
    }
  });

  // Print orders routes
  app.post("/api/print-orders", async (req, res) => {
    try {
      const validatedData = insertPrintOrderSchema.parse(req.body);
      const order = await storage.createPrintOrder(validatedData);
      res.status(201).json(order);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid order data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create print order" });
    }
  });

  app.get("/api/print-orders", async (req, res) => {
    try {
      const orders = await storage.getPrintOrders();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch print orders" });
    }
  });

  app.get("/api/print-orders/:id", async (req, res) => {
    try {
      const order = await storage.getPrintOrder(req.params.id);
      if (!order) {
        return res.status(404).json({ message: "Print order not found" });
      }
      res.json(order);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch print order" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
