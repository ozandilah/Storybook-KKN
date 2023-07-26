import { ReactNode } from "react";
type Props = {
    children: ReactNode;
    cta: ReactNode;
    pathname: string;
    className: {
        active: string;
        idle: string;
    };
    title: string;
    image: string | ReactNode;
};
declare function Navbar({ children, cta, pathname, className, image, title }: Props): import("react/jsx-runtime").JSX.Element;
export default Navbar;
