import React from "react";
import Button from "../../../../components/atom/Button";

function Sample() {
  return (
    <Button state="primary">
      <button onClick={() => console.log("hi")}>Okay, got it</button>
    </Button>
  );
}

export default Sample;
