import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components";
import {
  Error_page,
  Home_page,
  Page_Creation_page,
  ReticleStage_page,
  Software_page,
  WaferHandler_page,
  WaferStage_page,
} from "./pages";

import {
  SpecificationDocument,
  CreateStepMain,
  PageCreationHome,
  AppTreeComponent,
  ComponentTreeComponent,
  WebPageComponent,
} from "./pages/PageCreate/PageCreateComponents";

import {
  AsciiMain,
  Batch,
  TempMain,
  WaferStageHome,
} from "./pages/WaferStage/WaferStageComponents";

import {
  TempWHMain,
  WaferHandlerHome,
  WH_Batch,
  WHAsciiMain,
} from "./pages/WaferHandler/WaferHandlerComponents";
import {
  SoftwareHome,
  SW_Batch,
  SWAsciiMain,
  TempSWMain,
} from "./pages/Software/SoftwareComponents";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error_page />,
      children: [
        { index: true, element: <Home_page /> },
        {
          path: "waferstage",
          element: <WaferStage_page />,
          children: [
            { index: true, element: <WaferStageHome /> },
            { path: "temp", element: <TempMain /> },
            {
              path: "batch",
              element: <Batch />,
              children: [{ path: "ascii", element: <AsciiMain /> }],
            },
          ],
        },

        {
          path: "waferhandler",
          element: <WaferHandler_page />,
          children: [
            { index: true, element: <WaferHandlerHome /> },
            { path: "wh-temp", element: <TempWHMain /> },
            {
              path: "wh-batch",
              element: <WH_Batch />,
              children: [{ path: "wh-ascii", element: <WHAsciiMain /> }],
            },
          ],
        },

        {
          path: "reticlestage",
          element: <ReticleStage_page />,
          children: [
            { index: true, element: <WaferStageHome /> },
            { path: "temp", element: <TempMain /> },
            {
              path: "batch",
              element: <Batch />,
              children: [{ path: "ascii", element: <AsciiMain /> }],
            },
          ],
        },

        {
          path: "software",
          element: <Software_page />,
          children: [
            { index: true, element: <SoftwareHome /> },
            { path: "sw-temp", element: <TempSWMain /> },
            {
              path: "sw-batch",
              element: <SW_Batch />,
              children: [{ path: "sw-ascii", element: <SWAsciiMain /> }],
            },
          ],
        },

        {
          path: "page_creation",
          element: <Page_Creation_page />,
          children: [
            { index: true, element: <PageCreationHome /> },
            {
              path: "specification-document",
              element: <SpecificationDocument />,
              children: [{ path: "create-steps", element: <CreateStepMain /> }],
            },
            { path: "app-tree", element: <AppTreeComponent /> },
            { path: "component-tree", element: <ComponentTreeComponent /> },
            { path: "web-page", element: <WebPageComponent /> },
          ],
        },
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
