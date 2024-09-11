import "./index.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import globalStyles from "@/styles/globalStyles.tsx";
import FixedLoader from "./components/FixedLoader";
import Notification from "./components/Notification";

import { theme } from "@/styles/theme";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/en-au";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {globalStyles}
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale="en-au"
          >
            <Suspense fallback={<FixedLoader isLoading={true} />}>
              <App />
              <Notification />
            </Suspense>
          </LocalizationProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
