import { ReactNode } from "react";
import configs from "./config";
type Props = {
  children: ReactNode;
  //   enum
  state: "success" | "warning" | "danger";
  className?: string;
};

function Badge({
  // destructer
  children,
  state,
  className,
}: Props) {
  const combineClassName = [
    "py-1 px-4  rounded-full inline-flex items-center",
    configs?.state?.[state] || "",
    className || "",
  ];
  return (
    <span className={combineClassName.join(" ")}>{children && state}</span>
  );
}

export default Badge;
