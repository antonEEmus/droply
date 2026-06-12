import { File } from "./db/schema";

export type FileType = "file" | "folder";

export const FileFlags = {
  FOLDER: 1 << 0,
  STARRED: 1 << 1,
  DELETED: 1 << 2,
} as const;

export type FileFlags = keyof typeof FileFlags;

export function getFlag(file: File, flag: FileFlags) {
  return file.flags & FileFlags[flag];
}
