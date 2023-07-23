import { cloneElement, forwardRef } from "react";
const Link = forwardRef((props, ref) => cloneElement(props.children, { ref, href: props.href }));
export default Link;
