"use client";

import { FC, useEffect } from "react";
import "./FerrisWheel.css";
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

// Based on https://codepen.io/haoyang/pen/dyjVgBN

const FerrisWheel: FC<{}> = (props) => {

    return (
        <div className="container">
            <div className="ferris">
                <div className="wheel">
                    <div className="roomsArea">
                        {
                            getPos(202 / 2, 8).map((item, index) => (
                                <div
                                    key={index}
                                    className="room"
                                    style={{
                                        top: `${item.y}px`,
                                        left: `${item.x - 20}px`
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