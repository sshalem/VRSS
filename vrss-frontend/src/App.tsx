import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error_page, MainLayout } from "./components";

import Home_page from "./pages/Home_page";
import WaferStagePage from "./pages/WaferStagePage";
import WaferHandlerPage from "./pages/WaferHandlerPage";
import ReticleStagePage from "./pages/ReticleStagePage";
import ReticleHandlerPage from "./pages/ReticleHandlerPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error_page />,
      children: [
        { index: true, element: <Home_page /> },
        { path: "wafer-stage", element: <WaferStagePage /> },
        { path: "wafer-handler", element: <WaferHandlerPage /> },
        { path: "reticle-stage", element: <ReticleStagePage /> },
        { path: "reticle-handler", element: <ReticleHandlerPage /> },
        // { path: "waferstage", element: <WaferStage /> },
        // { path: "waferstage", element: <WaferStage /> },
        // { path: "waferstage", element: <WaferStage /> },
        // { path: "about", element: <About /> },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  },
);

function App() {
  return (
    <div>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </div>
  );
}

export default App;
