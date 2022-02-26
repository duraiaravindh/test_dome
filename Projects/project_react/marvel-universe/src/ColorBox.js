import { useState } from "react";

// Color box
export function Addcolor() {
  const [Color, setColor] = useState("pink");
  const styles = {
    fontSize: "24px",
    background: Color
  };


  const [colorList, setcolorList] = useState(["orange", "Red", "skyblue"]);

  return (
<div>
      <div className="add-clr">
        <input
          onChange={(event) => setColor(event.target.value)}
          style={styles}
          placeholder="Enter the color"
        />
        <button
          onClick={() => setcolorList([...colorList, Color])}
          className="btn-bg"
        >
          {" "}
          Add Color{" "}
        </button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}


function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "30px",
    width: "300px",
    marginTop: "10px"
  };

  return <div style={styles}></div>;
}