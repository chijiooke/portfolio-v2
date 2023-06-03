import { ArrowRight } from "iconsax-react";
import { FC } from "react";

export const ScrollGuide: FC<{
  isAtBottom: boolean;
}> = ({ isAtBottom }) => {
  return (
    <div
      style={{
        display: `${isAtBottom || window.screen.width < 800 ? "none" : "flex"}`,
      }}
      className="scroll__guide"
    >
      Scroll <ArrowRight />
    </div>
  );
};
