import React, { useState, useEffect } from "react";

function FunctionComponent05(props) {
  const [contents, setContents] = useState("[This is React]");
  //useState(변수명, 변수값 변경 함수)

  useEffect(() => {
    //useEffect /= componentDidMount()
    console.log("useEffect");
  });

  return (
    <div>
      <h2>{contents}</h2>
      <button onClick={() => setContents("[This is Hook]")}>Button</button>
    </div>
  );
}

export default FunctionComponent05;
