import React, { FC } from "react";

import { useHistory } from "react-router-dom";

interface IChildren {}

const Children: FC<IChildren> = (props) => {
  const history = useHistory();
  return (
    <div
      onClick={() => {
        history.push("/page1/123123123");
      }}
    >
      x
    </div>
  );
};

export default Children;
