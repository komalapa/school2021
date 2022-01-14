import React, { FC } from "react";
import type { LightsProps } from "../../types/props";
import { Colors, keyInEnum } from "../../types/types";
import "./Lights.css";



export const Lights: FC<LightsProps> = (props) => {
  const { colors } = props;
  if (colors !== null) {
    const getLamp = (i: number, length: number, color: Colors, key: string) => {
      const angle = (i * 145) / length + 145;
      return (
        <span
          key={key + i}
          className={`lights__lamp lights__lamp-${keyInEnum(
            Colors,
            color
          ).toLowerCase()}`}
          style={{
            transform: `rotate(${angle}deg)`
          }}
        />
      );
    };

    const getLine = (colors: Colors[], length: number, key: string) => {
      const line = [];
      for (let i = 0; i < length; i++) {
        const lamp = getLamp(
          i,
          length,
          colors[i % colors.length],
          `${key}-lamp-`
        );
        line.push(lamp);
      }
      return line;
    };
    const topLineLength = 10;
    const lineTop = getLine(colors, topLineLength, "top");

    const topCenterLineLength = 15;
    const lineTopCenter = getLine(colors, topCenterLineLength, "top-center");
    const centerLineLength = 20;
    const lineCenter = getLine(colors, centerLineLength, "center");
    const downLineLength = 35;
    const lineDown = getLine(colors, downLineLength, "down");

    return (
      <div className={`lights ${colors.length === 1 && "lights__monocolor"}`}>
        <div className="lights__top">{lineTop}</div>
        <div className="lights__top-center">{lineTopCenter}</div>
        <div className="lights__center">{lineCenter}</div>
        <div className="lights__down">{lineDown}</div>
      </div>
    );
  }
  return <></>;
};
