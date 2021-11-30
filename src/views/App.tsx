import React from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import routerMap from "../router";

const App = (): JSX.Element => {
  return (
    // 这里必须使用 Suspense 组件将 Router 组件包裹起来，因为使用了 lazy 方式导入的组件必须这么干
    <Router>
      {routerMap.map((route) => {
        return (
          <Route
            exact
            key={route.path}
            path={route.path}
            component={route.component}
          />
        );
      })}
    </Router>
  );
};
export default App;
