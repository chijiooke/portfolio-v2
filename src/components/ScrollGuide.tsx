import { ArrowRight } from "iconsax-react";
import { FC, useEffect, useState } from "react";

export const ScrollGuide: FC<{
  isAtBottom: boolean;
  wrapperRef: React.MutableRefObject<HTMLDivElement | null>;
}> = ({ isAtBottom, wrapperRef }) => {
  const [windowSrollHeight, setwindowSrollHeight] = useState(0);

  useEffect(() => {
    if (!!wrapperRef.current) {
      wrapperRef.current.scrollTop = windowSrollHeight;
    }
  }, [windowSrollHeight]);

  return (
    <div
      style={{
        display: `${isAtBottom || window.screen.width < 800 ? "none" : "flex"}`,
      }}
      className="scroll__guide"
      onClick={() => {
        setwindowSrollHeight(
          windowSrollHeight + (wrapperRef.current?.offsetHeight || 0)
        );
      }}
    >
      Scroll <ArrowRight />
    </div>
  );
};
