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

    const justifyContentMap: Record<string, React.CSSProperties["justifyContent"]> = {
        left: "flex-start",
        center: "center",
        right: "flex-end",
    };
    const alignItemsMap: Record<string, React.CSSProperties["alignItems"]> = {
        top: "flex-start",
        center: "center",
        bottom: "flex-end",
    };

    const wrapperStyle: React.CSSProperties = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: justifyContentMap[hortizontalAlign ?? "center"],
        alignItems: alignItemsMap[verticalAlign ?? "center"],
    };
    const outerStyle : React.CSSProperties = {
        width: width * scale,
        position: "relative",
        height: height * scale,
        overflow: "hidden",
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
        <div style={wrapperStyle}>
            <div style={outerStyle} className={className}>
                <div style={innerStyle}>
                    {children}
                </div>
            </div>
        </div>
    );
}
export default ReactScreenAdapter;
