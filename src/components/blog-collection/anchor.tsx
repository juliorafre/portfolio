export const Anchor = ({ id }: { id: string }) => {
  return <a id={id}></a>;
};

export const AnchorLink = ({ children }: { children: React.ReactNode }) => {
  return <a href={`#${children}`}>{children}</a>;
};
