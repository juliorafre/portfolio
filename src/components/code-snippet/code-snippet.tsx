import { Code } from "bright";
import CodeBlock from "@/components/codeblock";
import styles from "./code-snippet.module.css";
import theme from "./theme.js";

// biome-ignore lint/suspicious/noExplicitAny: is needed
const CodeSnippet = (props: any) => {
  // return <CodeBlock code={props.children.props.children} />;
  // return <Code {...props} className={styles.wrapper} theme={theme} />;
  return (
    <div className="flex flex-col gap-y-10">
      <CodeBlock code={props.children.props.children} />
      <hr className="border-border" />
      <Code {...props} className={styles.wrapper} theme={theme} />
    </div>
  );
};

export default CodeSnippet;
