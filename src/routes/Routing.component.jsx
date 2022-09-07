import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

const Routing = () => {
  return (
    <Router>
      <Suspense fallback="LOADING PAGE ...">
        <Routes>
          {routes.map((route) => (
            <>
              <Route
                exact
                key={route.path || "404"}
                path={route.path}
                element={<route.page />}
              />
            </>
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
};
export default Routing;
