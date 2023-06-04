import { twMerge } from "tailwind-merge";

type Sizes = "md" | "lg" | "xl" | "2xl";
type SizesMap = {
  [Property in Sizes]: string;
};
const maxSize: SizesMap = {
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-screen-2xl",
};

interface ContainerProps {
  maxWidth?: Sizes;
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  id?: string;
}

export default function Container({
  maxWidth = "2xl",
  children,
  as: Component = "div",
  className,
  id,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={twMerge("m-auto", maxSize[maxWidth], className)}
    >
      {children}
    </Component>
  );
}
