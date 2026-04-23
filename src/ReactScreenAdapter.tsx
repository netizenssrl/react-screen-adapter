"use client";

import React, { FC, useEffect, useState, ReactNode } from "react";

type Props = {
    children?: ReactNode;
    className?: string;
    width: number;
    height: number;
    hortizontalAlign?: "left" | "center" | "right";
    verticalAlign?: "top" | "center" | "bottom";
};

const ReactScreenAdapter: FC<Props> = ({ children, className, width, height, hortizontalAlign = "center", verticalAlign = "center" }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const updateScale = () => {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const scaleWidth = windowWidth / width;
            const scaleHeight = windowHeight / height;
            const newScale = Math.min(scaleWidth, scaleHeight);
            setScale(newScale);
        };
        updateScale();
        window.addEventListener("resize", updateScale);
        setIsMounted(true);
        return () => {
            window.removeEventListener("resize", updateScale);
        };
    }, [width, height]);

    if (!isMounted) {
        return null;
    }
    const outerStyle : React.CSSProperties = {
        width: width * scale,
        position: "relative",
        height: height * scale,
        overflow: "hidden",
        display: "flex",
        justifyContent: hortizontalAlign === "left" ? "flex-start" : hortizontalAlign === "center" ? "center" : "flex-end",
        alignItems: verticalAlign === "top" ? "flex-start" : verticalAlign === "center" ? "center" : "flex-end",
    };
    const innerStyle : React.CSSProperties = {
        width: width,
        height: height,
        transformOrigin: "top left",
        transform: `scale(${scale})`,
        top: "50%",
        left: "50%",
        position: "absolute",
        marginTop: -(height * scale) / 2,
        marginLeft: -(width * scale) / 2
    };
    return (
        <div style={outerStyle} className={className}>
            <div style={innerStyle}>
                {children}
            </div>
        </div>
    );
}
export default ReactScreenAdapter;
