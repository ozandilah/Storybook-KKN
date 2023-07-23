import { ReactNode } from "react";
type Props = {
    content: {
        preheading: string;
        paragraph: string;
    };
    button: ReactNode;
    title: string;
    image: string | ReactNode;
};
declare function SectionDua({ content, image, title, button }: Props): import("react/jsx-runtime").JSX.Element;
export default SectionDua;
