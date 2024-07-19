"use client";

import { FC } from "react";
import "./FerrisWheel.css";

// Based on https://codepen.io/haoyang/pen/dyjVgBN

/**
 * degree2Radian
 * @param degree
 * @returns radian
 */
const degree2Radian = (degree: number) => (degree * Math.PI) / 180

/**
 * get position of vertex
 * @param r 
 * @param count
 */
const getPos = (r: number, count: number) => {
    const angleRadian = degree2Radian(360 / count)
    const res = []
    for (let i = 0; i < count; i += 1) {
        res.push({
            x: r * Math.cos(angleRadian * i),
            y: r * Math.sin(angleRadian * i),
        })
    }
    return res
}

const FerrisWheel: FC<{}> = () => {
    return (
        <div className="container" aria-hidden="true">
            <div className="ferris">
                <div className="wheel">
                    <div className="roomsArea">
                        {
                            getPos(300 / 2, 12).map((item, index) => (
                                <div
                                    key={index}
                                    className={index % 2 == 0 ? "room" : "room2"}
                                    style={{
                                        top: `${item.y}px`,
                                        left: `${item.x - (43/2)}px`
                                    }}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="bottom" />
            </div>
        </div>
    )
}
export default FerrisWheel;