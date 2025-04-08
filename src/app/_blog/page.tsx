import Link from "next/link";

const BlogPage = () => {
  return (
    <div className="mx-auto w-full max-w-3xl py-10">
      <div>
        <Link href="/">Back</Link>
      </div>
      <div>
        <h1>List of blogs</h1>
        <ul>
          <li>
            <Link href="/blog/example">Example</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogPage;
