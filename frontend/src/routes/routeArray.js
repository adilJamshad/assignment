import Main from "../containers/Main/loadable";
import AllData from "../containers/AllData/loadable";

const routeTypes = { public: "public", private: "private" };

export const routeArray = [
  {
    path: "/",
    component: Main,
    exact: true,
    breadCrumbKey: "Main",
    routeType: routeTypes.public,
  },
  {
    path: "/all-data",
    component: AllData,
    exact: true,
    breadCrumbKey: "All Data",
    routeType: routeTypes.public,
  },
];
