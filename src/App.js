import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import "./App.css";

const App = () => {
  const { editor, onReady } = useFabricJSEditor();
  const [canvas, setCanvas] = useState("");

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const onAddCircle = () => {
    editor.addCircle();
  };

  const onAddRectangle = () => {
    editor.addRectangle();
  };

  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 500,
      width: 500,
      backgroundColor: "pink",
    });

  const addRect = (canvi) => {
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: "yellow",
      width: 100,
      height: 100,
      angle: 45,
      transparentCorners: false,
      cornerColor: "blue",
      cornerStrokeColor: "red",
      borderColor: "red",
      cornerSize: 12,
      padding: 10,
      cornerStyle: "circle",
      borderDashArray: [3, 3],
      //lockMovementX : true,
      //lockMovementY : true,
      //lockRotation: true
    });
    canvi.add(rect);
    canvi.renderAll();
  };

  const addCircle = (canvi) => {
    const circle = new fabric.Circle({
      height: 200,
      width: 200,
      left: 100,
      top: 100,
      radius: 50,
      fill: "green",
    });
    canvi.add(circle);
  };

  const addTriangle = (canvi) => {
    const triangle = new fabric.Triangle({
      width: 100,
      height: 100,
      left: 200,
      top: 150,
      angle: 0,
      fill: "violet",
      selectable: true,
      stroke: "black",
      strokeWidth: 5,
    });
    canvi.add(triangle);
  };

  const heart = (canvi) => {
    const heart = new fabric.Path(
      "M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"
    );

    heart.set({
      originX: "center",
      originY: "center",
      selectable: true,
      evented: true,
      left: 125,
      top: 100,
      scaleX: 0.3,
      scaleY: 0.3,
      angle: 225,
      stroke: "red",
      strokeWidth: 10,
      fill: "red",
    });
    canvi.add(heart);
  };

  const text = (canvi) => {
    const text = new fabric.Text("Honey,\nI'm here", {
      fontSize: 150,
      left: 0,
      top: 0,
      lineHeight: 1,
      originX: "left",
      fontFamily: "Helvetica",
      fontWeight: "bold",
      statefullCache: true,
      scaleX: 0.4,
      scaleY: 0.4,
      fill: "skyblue",
      shadow: "rgba(0,0,0,0.3) 15px 15px 15px",
      stroke: "#ff1318",
      strokeWidth: 1,
    });
    canvi.add(text);
  };

  const textBoxSample = (canvi) => {
    var textBoxSample = new fabric.Textbox("Write text here ???? ????", {
      width: 150,
      height: 150,
      left: 50,
      top: 150,
      fontFamily: "Arial",
    });

    canvi.add(textBoxSample);
  };

  const iTextSample = (canvi) => {
    var iTextSample = new fabric.IText("2iText sample", {
      left: 300,
      top: 50,
      fontFamily: "Arial",
      fill: "#333",
      lineHeight: 2.5,
      styles: {
        0: {
          0: { underline: true, superscript: { size: 0.6, baseline: 0.11 } },
          1: { textBackgroundColor: "red" },
        },
      },
    });
    iTextSample.setSelectionStyles("superscript", 2, 9);
    canvi.add(iTextSample);
    canvi.renderAll();
  };

  var circle = new fabric.Circle({
    radius: 100,
    fill: "#eef",
    scaleY: 0.5,
    originX: "center",
    originY: "center",
  });

  var textTitle = new fabric.Text("hello world", {
    fontSize: 30,
    originX: "center",
    originY: "center",
  });

  const group = (canvi) => {
    var group = new fabric.Group([circle, textTitle], {
      left: 150,
      top: 100,
      angle: -10,
    });

    canvi.add(group);
  };

  const setImage = (canvi) => {
    fabric.Image.fromURL("./logo512.png", function (img) {
      //if we want to use filter then write below 2 line of code else for simple image no need to write.
      img.filters.push(
        new fabric.Image.filters.Grayscale(),
        new fabric.Image.filters.Brightness({ brightness: 0.2 })
      );
      img.applyFilters();
      canvi.add(img);
      img.scaleToHeight(100);
      img.scaleToWidth(100);
    });
  };

  const triangleTwo = (canvi) => {
    const triangleTwo = new fabric.Path("M 0 0 L 200 100 L 170 200 z");
    triangleTwo.set({
      left: 120,
      top: 120,
      fill: "red",
      stroke: "green",
      opacity: 0.5,
    });
    canvi.add(triangleTwo);
  };

  const arrow = (canvi) => {
    const arrow = new fabric.Path(
      "M121.32,0L44.58,0C36.67,0,29.5,3.22,24.31,8.41\
    c-5.19,5.19-8.41,12.37-8.41,20.28c0,15.82,12.87,28.69,28.69,28.69c0,0,4.4,\
    0,7.48,0C36.66,72.78,8.4,101.04,8.4,101.04C2.98,106.45,0,113.66,0,121.32\
    c0,7.66,2.98,14.87,8.4,20.29l0,0c5.42,5.42,12.62,8.4,20.28,8.4c7.66,0,14.87\
    -2.98,20.29-8.4c0,0,28.26-28.25,43.66-43.66c0,3.08,0,7.48,0,7.48c0,15.82,\
    12.87,28.69,28.69,28.69c7.66,0,14.87-2.99,20.29-8.4c5.42-5.42,8.4-12.62,8.4\
    -20.28l0-76.74c0-7.66-2.98-14.87-8.4-20.29C136.19,2.98,128.98,0,121.32,0z"
    );
    arrow.set({
      left: 100,
      top: 200,
    });
    canvi.add(arrow);
  };
  
  const clear = () => {
    setCanvas(initCanvas([]));
  };

  

  return (
    <div className="App">
      <h1>Fabric.js Example</h1>
      <button onClick={() => addRect(canvas)}>Rectangle</button>
      <button onClick={() => addCircle(canvas)}>Circle</button>
      <button onClick={() => addTriangle(canvas)}>Triangle</button>
      <button onClick={() => heart(canvas)}>Heart</button>
      <button onClick={() => triangleTwo(canvas)}>Triangle-90</button>
      <button onClick={() => text(canvas)}>Text</button>
      <button onClick={() => arrow(canvas)}>Arrow</button>
      <button onClick={() => setImage(canvas)}>Image</button>
      <button onClick={() => group(canvas)}>Group Shape</button>
      <button onClick={() => textBoxSample(canvas)}>Text Box Sample</button>
      <button onClick={() => iTextSample(canvas)}>iText Sample</button>
      <div className="canvas title">
        <canvas id="canvas" />
      </div>
      <br />
      <button onClick={() => clear(canvas)}>clear</button>
      <button>Undo</button>
      <button>Redo</button>
      <h1 className="title">Fabric.js - React Example</h1>
      <button onClick={onAddCircle}>Circle</button>
      <button onClick={onAddRectangle}>Rectangle</button>
      <div className="canvas">
        <FabricJSCanvas className="sample-canvas" onReady={onReady} />
      </div>
    </div>
  );
};

export default App;
