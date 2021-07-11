import * as React from "react";

export const ChevronRightIcon = ({
  height = "24px",
  width = "24px",
  color = "black",
  secondaryColor,
  ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
<svg
  xmlns="http://www.w3.org/2000/svg"
  height={height}
  viewBox="0 0 24 24"
  width={width}
  fill={secondaryColor || color}
  {...props}
  >
  <path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
</svg>
);
