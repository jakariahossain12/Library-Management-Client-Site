import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="text-amber-400">Hello World</div>,
  },
]);

export default router