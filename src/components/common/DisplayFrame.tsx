type DisplayFrameProps = {
  children: React.ReactNode;
};

const DisplayFrame = ({ children }: DisplayFrameProps) => {
  return (
    <div
      className="nextra-code x:relative x:not-first:mt-6"
      data-pagefind-ignore="all"
    >
      <pre
        className="x:group x:focus-visible:nextra-focus x:overflow-x-auto x:subpixel-antialiased x:text-[.9em] x:bg-white x:dark:bg-black x:py-4 x:ring-1 x:ring-inset x:ring-gray-300 x:dark:ring-neutral-700 x:contrast-more:ring-gray-900 x:contrast-more:dark:ring-gray-50 x:contrast-more:contrast-150 x:rounded-md not-prose px-4"
        tabIndex={0}
      >
        {children}
      </pre>
    </div>
  );
};

export default DisplayFrame;
