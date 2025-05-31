interface PostMetadata {
  title: string;
  abstract: string;
  publishedOn: string;
  author: string;
  tags: string[];
  published: boolean; 
  slug: string;
}

export type { PostMetadata };