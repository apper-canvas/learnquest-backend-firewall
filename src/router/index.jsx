import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "@/components/organisms/Layout";

const Home = lazy(() => import("@/components/pages/Home"));
const ChallengePage = lazy(() => import("@/components/pages/ChallengePage"));
const Progress = lazy(() => import("@/components/pages/Progress"));
const AvatarCustomization = lazy(() => import("@/components/pages/AvatarCustomization"));
const NotFound = lazy(() => import("@/components/pages/NotFound"));

const mainRoutes = [
  {
    path: "",
    index: true,
    element: (
      <Suspense fallback={<div>Loading.....</div>}>
        <Home />
      </Suspense>
    )
  },
  {
    path: "challenges/:subject",
    element: (
      <Suspense fallback={<div>Loading.....</div>}>
        <ChallengePage />
      </Suspense>
    )
  },
  {
    path: "challenges/:subject/timed",
    element: (
      <Suspense fallback={<div>Loading.....</div>}>
        <ChallengePage />
      </Suspense>
    )
  },
  {
    path: "progress",
    element: (
      <Suspense fallback={<div>Loading.....</div>}>
        <Progress />
      </Suspense>
    )
  },
  {
    path: "avatar",
    element: (
      <Suspense fallback={<div>Loading.....</div>}>
        <AvatarCustomization />
      </Suspense>
    )
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<div>Loading.....</div>}>
        <NotFound />
      </Suspense>
    )
  }
];

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: mainRoutes
  }
];

export const router = createBrowserRouter(routes);