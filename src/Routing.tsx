import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./Pages/Dashboard";
import { lazy, Suspense } from "react";
const Dashboard = lazy(
  () => new Promise((resolve) => resolve(import("./Pages/Dashboard")))
);
const Rewards = lazy(
  () => new Promise((resolve) => resolve(import("./Pages/Rewards")))
);

const Routing = () => {
  const routes = createBrowserRouter([
    {
      path: "Dashboard",

      element: (
        <Suspense>
          <Dashboard />
        </Suspense>
      ),
      caseSensitive: false,
    },
    {
      path: "Rewards",
      element: (
        <Suspense>
          <Rewards />
        </Suspense>
      ),
      caseSensitive: false,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default Routing;