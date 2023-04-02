import { RouteObject } from "react-router-dom";

import LandingView from "../views/LandingView";

const routesObject: RouteObject[] = [
  {
    path: "/",
    element: <LandingView />,
  },
];

export default routesObject;
