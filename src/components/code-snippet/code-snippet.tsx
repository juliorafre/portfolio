import { Code } from 'bright';
import React from 'react';
import CodeBlock from '@/components/codeblock';
import styles from './code-snippet.module.css';
import theme from './theme.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
