import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
    <Toaster />
  </React.StrictMode>
);
