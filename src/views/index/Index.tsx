import React from "react";
import "./index.css";
import Children from "../../components/children";
function Index(props: any) {
  return (
    <div className={"app"}>
      <div
        className={"s"}
        onClick={() => {
          props.history.push("/page1/1");
        }}
      >
        123
      </div>

      <Children />
    </div>
  );
}

export default Index;
