export const Anchor = ({ id }: { id: string }) => {
  return <span id={id} />;
};

export const AnchorLink = ({ children }: { children: React.ReactNode }) => {
  return <a href={`#${children}`}>{children}</a>;
};
