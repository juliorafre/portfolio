/* eslint-disable @typescript-eslint/no-explicit-any */

import type { NotionBook } from '@/types/notion';

/**
 * Adapter function to transform Notion API response into a NotionBook object
 * @param response - Raw response from Notion API
 * @returns Transformed NotionBook object
 * @throws Error if required fields are missing or malformed
 */
export const notionAdapter = (response: any): NotionBook => {
  if (!response?.properties?.Name?.title?.[0]?.plain_text) {
    throw new Error('Invalid Notion response: Missing or malformed title');
  }

  if (!response?.properties?.Author?.rich_text?.[0]?.plain_text) {
    throw new Error('Invalid Notion response: Missing or malformed author');
  }

  if (!response?.properties?.Status?.select?.name) {
    throw new Error('Invalid Notion response: Missing or malformed status');
  }

  return {
    id: response.id,
    title: response.properties.Name.title[0].plain_text,
    author: response.properties.Author.rich_text[0].plain_text,
    status: response.properties.Status.select.name,
    url: response.properties.URL.url,
    cover: response.properties.Cover.files[0].external.url,
  };
};
