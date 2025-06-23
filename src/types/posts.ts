interface CaseStudyMetadata {
  timeline: string;
  role: string;
  sector: string;
  for: {
    name: string;
    url: string;
  };
  platform: string;
  techStack: string;
  stage: string;
}

interface PostMetadata extends Partial<CaseStudyMetadata> {
  title: string;
  abstract: string;
  publishedOn: string;
  author: string;
  tags: string[];
  published: boolean;
  slug: string;
  type: 'journal' | 'blog';
}



export type { PostMetadata, CaseStudyMetadata };