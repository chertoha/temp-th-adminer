import AuthProvider from "@/components/AuthProvider";
import PrivateRoute from "@/components/PrivateRoute";
import RestrictedRoute from "@/components/RestrictedRoute";
import SharedLayout from "@/components/SharedLayout";

import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";

const PublicationsPage = lazy(() => import("../pages/PublicationsPage"));
const PublicationPage = lazy(() => import("../pages/PublicationPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const UsersPage = lazy(() => import("../pages/UsersPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const EditorsPage = lazy(() => import("../pages/EditorsPage"));
const SubscribersPage = lazy(() => import("../pages/SubscribersPage"));
const AuthorsPage = lazy(() => import("../pages/AuthorsPage"));
const MagazinesPage = lazy(() => import("../pages/MagazinesPage"));
const MagazinePage = lazy(() => import("../pages/MagazinePage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage"));
const RootSettingsPage = lazy(() => import("../pages/RootSettingsPage"));
const PasswordResetPage = lazy(() => import("../pages/PasswordResetPage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

const routes = [
  {
    path: ROUTES.LOGIN,
    element: <RestrictedRoute component={LoginPage} />,
  },
  {
    path: ROUTES.RESET_PASSWORD,
    element: <RestrictedRoute component={PasswordResetPage} />,
  },

  {
    path: ROUTES.ROOT,
    element: (
      <AuthProvider>
        <SharedLayout />
      </AuthProvider>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.PUBLICATIONS} />,
      },

      {
        path: ROUTES.PUBLICATIONS,
        element: <PrivateRoute component={PublicationsPage} />,
      },

      {
        path: `${ROUTES.PUBLICATIONS}/:id`,
        element: <PrivateRoute component={PublicationPage} />,
      },

      {
        path: ROUTES.MAGAZINES,
        element: <PrivateRoute component={MagazinesPage} />,
      },

      {
        path: `${ROUTES.MAGAZINES}/:id`,
        element: <PrivateRoute component={MagazinePage} />,
      },

      {
        path: ROUTES.AUTHORS,
        element: <PrivateRoute component={AuthorsPage} />,
      },

      {
        path: ROUTES.EDITORS,
        element: <PrivateRoute component={EditorsPage} rootOnly />,
      },

      {
        path: ROUTES.USERS,
        element: <PrivateRoute component={UsersPage} rootOnly />,
      },

      {
        path: ROUTES.SUBSCRIBERS,
        element: <PrivateRoute component={SubscribersPage} rootOnly />,
      },

      {
        path: ROUTES.ABOUT,
        element: <PrivateRoute component={AboutPage} rootOnly />,
      },

      {
        path: ROUTES.CONTACTS,
        element: <PrivateRoute component={ContactsPage} rootOnly />,
      },

      {
        path: ROUTES.SETTINGS,
        element: <PrivateRoute component={RootSettingsPage} rootOnly />,
      },

      {
        path: "*",
        element: <PrivateRoute component={ErrorPage} />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
