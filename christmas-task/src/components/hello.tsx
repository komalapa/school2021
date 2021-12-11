import * as React from "react";

type HelloProps = {
  name: string
};

export function Hello(props:HelloProps) {
  return <h1>Привет, {props.name}</h1>;
}

// export class Hello extends React.Component {
//   render() {
//     return <h1>Привет</h1>;
//   }
// }