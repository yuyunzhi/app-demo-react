import React, { useState } from "react";
import styles from "./index.less";

function Index() {
  const [list, setList] = useState<Array<number>>([]);

  const asyncGetJs = () => {};

  return (
    <div className={styles.app}>
      <div className={styles.popover} onClick={asyncGetJs}>
        异步加载1
      </div>

      <div>{list.length}</div>
      {list.length > 0 &&
        list.map((item, index) => {
          return (
            <div key={index} className={styles.index}>
              {index}
            </div>
          );
        })}
    </div>
  );
}

export default Index;
