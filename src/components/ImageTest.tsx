import React from "react";
import sampleImage from "../assets/sample.jpg";

const ImageTest: React.FC = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Local Image Test</h2>
      <p>This text is shown to verify that the component is rendering correctly.</p>

      <img
        src={sampleImage}
        alt="Local Test"
        style={{ width: "300px", borderRadius: "12px", marginTop: "12px" }}
      />
    </div>
  );
};

export default ImageTest;
