import { ReactNode } from "react";
type Props = {
    children: ReactNode;
    cta: ReactNode;
    pathname: string;
    className: {
        active: string;
        idle: string;
    };
};
declare function Navbar({ children, cta, pathname, className }: Props): import("react/jsx-runtime").JSX.Element;
export default Navbar;
