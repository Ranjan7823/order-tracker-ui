import  {  Routes, Route, BrowserRouter } from "react-router-dom";

import OrdersPage from "./page/order-page";
const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<OrdersPage />}
      />
    </Routes>
  );
};

export default AppRoutes;

