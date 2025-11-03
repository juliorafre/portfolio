"use server";

import { Client } from "@notionhq/client";
import { unstable_cache } from "next/cache";
import { notionAdapter } from "@/lib/adapters/notion";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// Ensure the Notion database id is present at runtime
const NOTION_DB_ID = process.env.NOTION_DB_ID;

if (!NOTION_DB_ID) {
  throw new Error("Environment variable NOTION_DB_ID is not set");
}

// Create a cached version of the function
const getCachedReadingBooks = unstable_cache(
  async () => {
    const response = await notion.databases.query({
      database_id: NOTION_DB_ID,
      filter: {
        property: "Status",
        select: {
          equals: "Reading",
        },
      },
    });

    return response.results.map(notionAdapter);
  },
  ["reading-books"], // cache key
  {
    revalidate: 259_200, // revalidate every 3 days
    tags: ["reading-books"], // for manual revalidation
  },
);

export const getReadingBooks = getCachedReadingBooks;
