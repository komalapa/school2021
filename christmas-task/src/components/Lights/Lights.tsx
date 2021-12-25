import { FC } from "react";
import { Colors } from "../../types/types";
import "./Lights.css";

function keyInEnum(e: any, value: string): string {
  let keys = Object.keys(e).filter((x) => e[x] === value);
  return keys.length > 0 ? keys[0] : "";
}

interface LightsProps {
  colors: Colors[] | null;
}
export const Lights: FC<LightsProps> = (props) => {
  const { colors } = props;
  if (colors !== null) {
    const lightsSection = colors.map((color, id) => {
      console.log(keyInEnum(Colors, color));
      return (
        <span
          key={id}
          className={`lights__lamp lights__lamp-${keyInEnum(
            Colors,
            color
          ).toLowerCase()}`}
        />
      );
    });

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
            transform: `rotate(${angle}deg)`,
          }}
        />
      );
    };

    const getLine = (colors: Colors[], length, key) => {
      const line = [];
      for (let i = 0; i < length; i++) {
        const lamp = getLamp(
          i,
          length,
          colors[i % colors.length],
          `${key}-lamp-`
        );
        console.log(lamp);
        line.push(lamp);
      }
      return line;
    };
    const topLineLength = 5;
    const lineTop = getLine(colors, topLineLength, "top");

    const centerLineLength = 10;
    const lineCenter = getLine(colors, centerLineLength, "center");
    const downLineLength = 15;
    const lineDown = getLine(colors, downLineLength, "down");

    return (
      <div className="lights">
        <div className="lights__top">{lineTop}</div>
        <div className="lights__center">{lineCenter}</div>
        <div className="lights__down">{lineDown}</div>
      </div>
    );
  }
  return <></>;
};