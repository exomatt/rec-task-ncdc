import {CSSProperties} from "react";
import "./StyledH.css"

interface StyledHProps {
    children?: any;
    style?: CSSProperties;
}

export const StyledH3 = (props: StyledHProps) => {
    return <h3 className={"styled-h3"} style={{...props.style}}>{props.children}</h3>
}