import Aos from "aos";
import { FC, ReactNode, useEffect } from "react";

export const ScrollSnapWrapper: FC<{ children: ReactNode; id: string }> = ({
  children,
  id,
}) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id={id} className="scroll__snap__wrapper">
      {children}
    </div>
  );
};
