import { sql } from "drizzle-orm";
import { pgTable, text, varchar, jsonb, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const templates = pgTable("templates", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  category: text("category").notNull(), // 'banner', 'leaflet', 'poster'
  thumbnail: text("thumbnail").notNull(),
  description: text("description").notNull(),
  designData: jsonb("design_data").notNull(), // JSON structure for the template
  createdAt: timestamp("created_at").defaultNow(),
});

export const designs = pgTable("designs", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  type: text("type").notNull(), // 'banner', 'leaflet', 'poster'
  ideaDescription: text("idea_description").notNull(),
  templateId: varchar("template_id").references(() => templates.id),
  designData: jsonb("design_data").notNull(), // Current design state
  size: text("size").notNull().default("standard"), // 'standard', 'large', 'small', 'custom'
  colorPreference: text("color_preference").notNull().default("auto"), // 'auto', 'bright', 'professional', 'dark', 'warm'
  status: text("status").notNull().default("draft"), // 'draft', 'ready', 'printing'
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const printOrders = pgTable("print_orders", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  designId: varchar("design_id").notNull().references(() => designs.id),
  quantity: integer("quantity").notNull().default(1),
  size: text("size").notNull(),
  paperType: text("paper_type").notNull().default("standard"),
  finishType: text("finish_type").notNull().default("matte"),
  price: integer("price").notNull(), // in cents
  status: text("status").notNull().default("pending"), // 'pending', 'processing', 'printed', 'shipped', 'delivered'
  shippingAddress: jsonb("shipping_address"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertTemplateSchema = createInsertSchema(templates).omit({
  id: true,
  createdAt: true,
});

export const insertDesignSchema = createInsertSchema(designs).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertPrintOrderSchema = createInsertSchema(printOrders).omit({
  id: true,
  createdAt: true,
});

export type InsertTemplate = z.infer<typeof insertTemplateSchema>;
export type Template = typeof templates.$inferSelect;

export type InsertDesign = z.infer<typeof insertDesignSchema>;
export type Design = typeof designs.$inferSelect;

export type InsertPrintOrder = z.infer<typeof insertPrintOrderSchema>;
export type PrintOrder = typeof printOrders.$inferSelect;
