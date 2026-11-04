import {
  createRootRoute,
  createRoute,
  createRouter,
  Link,
  notFound,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";

import { HomePage } from "./components/home-page";
import { SiteShell } from "./components/site-shell";
import { projects } from "./content/projects";

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

const projectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects/$slug",
  loader: ({ params }) => {
    const project = projects.find((item) => item.slug === params.slug);

    if (!project) {
      // TanStack Router uses a not-found sentinel to select its fallback UI.
      // oxlint-disable-next-line typescript/only-throw-error
      throw notFound();
    }

    return project;
  },
  component: () => {
    const { title, Content } = projectRoute.useLoaderData();

    return (
      <article>
        <Link to="/">Back home</Link>
        <h1>{title}</h1>
        <Content />
      </article>
    );
  },
});

const router = createRouter({
  routeTree: rootRoute.addChildren([indexRoute, projectRoute]),
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
