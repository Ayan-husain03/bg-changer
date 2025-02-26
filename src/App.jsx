import React from "react";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  const handleRandom = () => {
    const randomColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
    setColor(randomColor)
  };
  return (
    <div className={`w-full h-screen p-10`} style={{backgroundColor : color}}>
      <div className="bg-white w-24 rounded-lg h-full flex flex-col gap-16 p-2">
        <button
          className="bg-yellow-500 p-3 text-white"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="bg-red-500 p-3 text-white"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="bg-purple-500 p-3 text-white"
          onClick={() => setColor("purple")}
        >
          purple
        </button>
        <button
          className="bg-pink-500 p-3 text-white"
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          className="bg-green-500 p-3 text-white"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button onClick={handleRandom} className="bg-sky-500 p-3  text-white">Random</button>
      </div>
    </div>
  );
}

export default App;
