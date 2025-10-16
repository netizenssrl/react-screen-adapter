"use client";

import React, { FC, useEffect, useState, ReactNode } from "react";

type Props = {
    children?: ReactNode;
    width: number;
    height: number;
};

const ReactScreenAdapter: FC<Props> = ({ children, width, height }) => {
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
        width: "100vw",
        height: "100vh",
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
        marginLeft: -(width * scale) / 2,
    };
    return (
        <div style={outerStyle}>
            <div style={innerStyle}>
                {children}
            </div>
        </div>
    );
}
export default ReactScreenAdapter;
