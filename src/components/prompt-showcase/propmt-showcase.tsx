const Highlight = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-6 rounded-xl border-5 border-white bg-neutral-100 p-4 font-jetbrains-mono font-semibold text-black text-sm shadow-lg dark:border-gray-800 dark:bg-neutral-900 dark:text-white">
      <div className="bg-gradient-to-r from-[#ee5c43] via-[#1248d0] to-[#f12ef1] bg-clip-text text-transparent dark:via-[#8dff42]">
        {children}
      </div>
    </div>
  );
};

export default Highlight;
