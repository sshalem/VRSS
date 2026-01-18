import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components";
import { Error_page } from "./pages";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error_page />,
      children: [
        // { index: true, element: <Landing /> },
        // { path: "products", element: <Products /> },
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
