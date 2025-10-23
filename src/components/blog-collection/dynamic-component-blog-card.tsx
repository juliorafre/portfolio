import BlogSummaryCard from "@/modules/blogs/blog-summary-card";
import JournalCard from "./journal-card";

const componentMap = {
  journal: JournalCard,
  blog: BlogSummaryCard,
} as const;

type ComponentType = keyof typeof componentMap;

interface DynamicComponentBlogCardProps {
  type: ComponentType;
  title: string;
  abstract: string;
  publishedOn: string;
  slug: string;
}

const DynamicComponentBlogCard = ({
  type,
  ...props
}: DynamicComponentBlogCardProps) => {
  const Component = componentMap[type];
  if (!Component) {
    throw new Error(`Component type ${type} not found`);
  }
  return <Component {...props} />;
};

export default DynamicComponentBlogCard;
