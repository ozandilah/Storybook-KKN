import { jsx as _jsx } from "react/jsx-runtime";
import configs from "./config";
function Badge({ 
// destructer
children, state, className, }) {
    const combineClassName = [
        "py-1 px-4  rounded-full inline-flex items-center",
        configs?.state?.[state] || "",
        className || "",
    ];
    return (_jsx("span", { className: combineClassName.join(" "), children: children && state }));
}
export default Badge;
