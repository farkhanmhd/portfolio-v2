import {
  createRootRoute,
  createRoute,
  createRouter,
  Link,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";

import { CertificatesPage } from "./components/certificates-page";
import { HomePage } from "./components/home-page";
import { ResumePage } from "./components/resume-page";
import { SiteShell } from "./components/site-shell";

const NotFound = () => (
  <section>
    <h1>Page not found</h1>
    <Link to="/">Return home</Link>
  </section>
);

const rootRoute = createRootRoute({
  component: () => (
    <SiteShell>
      <Outlet />
    </SiteShell>
  ),
  notFoundComponent: NotFound,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const certificatesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/certificates",
  component: CertificatesPage,
});

const resumeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/resume",
  component: ResumePage,
});

const router = createRouter({
  routeTree: rootRoute.addChildren([
    indexRoute,
    certificatesRoute,
    resumeRoute,
  ]),
  scrollRestoration: true,
  scrollToTopSelectors: ["#page-scroll-viewport"],
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const App = () => <RouterProvider router={router} />;

export default App;
