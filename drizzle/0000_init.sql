CREATE TABLE `file` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`path` text NOT NULL,
	`type` text NOT NULL,
	`size` integer NOT NULL,
	`file_url` text NOT NULL,
	`thumbnail_url` text,
	`user_id` text NOT NULL,
	`parent_file_id` text,
	`flags` integer NOT NULL,
	`created_by` text NOT NULL,
	`updated_by` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL
);
