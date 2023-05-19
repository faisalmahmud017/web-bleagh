import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LayoutLanding from "../widgets/LayoutLanding"
import HomePage from "../views/HomePage";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        {/* <CrudProvider> */}
          <Routes>
            <Route
              path="/"
              element={
                // <LoginRoute>
                  <LayoutLanding>
                    <HomePage/>
                  </LayoutLanding>
                // </LoginRoute>
              }
            />
            {/* <Route path="*" element={<Error404Page />}/> */}
          </Routes>
        {/* </CrudProvider> */}
      </BrowserRouter>
    </>
  );
};

export default Routers;
