import Link from 'next/link';

const BlogPage = () => {
  return (
    <div>
      <h1>List of blogs</h1>
      <ul className="list-disc space-y-2 pl-4">
        <li>
          <Link href="/blog/example">Example</Link>
        </li>
        <li>
          <Link href="/blog/example-2">Example 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogPage;
