import * as React from "react";
import "./less/style.less";

interface SProps {
    text: string;
}

const S: React.SFC<SProps> = ({ text }) => <p className="i">{text}</p>;

export default S;
