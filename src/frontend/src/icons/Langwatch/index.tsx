import React, { forwardRef } from "react";
import SvgLangwatch from "./langwatch";

export const LangwatchIcon = forwardRef<
  SVGSVGElement,
  React.PropsWithChildren<{}>
>((props, ref) => {
  return <SvgLangwatch ref={ref} {...props} />;
});