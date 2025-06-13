'use server'

import { Client } from "@notionhq/client"
import { notionAdapter } from "@/lib/adapters/notion"
import { unstable_cache } from 'next/cache'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

// Create a cached version of the function
const getCachedReadingBooks = unstable_cache(
  async () => {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DB_ID!,
      filter: {
        property: "Status",
        select: {
          equals: "Reading"
        }
      }
    });

    return response.results.map(notionAdapter);
  },
  ['reading-books'], // cache key
  {
    revalidate: 259200, // revalidate every 3 days
    tags: ['reading-books'] // for manual revalidation
  }
);

export const getReadingBooks = getCachedReadingBooks;