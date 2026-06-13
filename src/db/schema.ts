import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { FileType } from "../models";
import { relations, sql } from "drizzle-orm";

export const file = sqliteTable("file", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  path: text("path").notNull(),
  type: text("type").notNull().$type<FileType>(),
  size: integer("size").notNull(),

  // URLs
  fileUrl: text("file_url").notNull(),
  thumbnailUrl: text("thumbnail_url"),

  // Ownership
  userId: text("user_id").notNull(),
  parentFileId: text("parent_file_id"),

  // Flags (accessed via the FileFlags type)
  flags: integer("flags").notNull(),

  // Creating & Updating info
  createdBy: text("created_by").notNull(),
  updatedBy: text("updated_by").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
});

export const fileRelations = relations(file, ({ one, many }) => ({
  parent: one(file, {
    fields: [file.parentFileId],
    references: [file.id],
  }),
  children: many(file),
}));

export type File = typeof file.$inferSelect;
export type FileInsert = typeof file.$inferInsert;
