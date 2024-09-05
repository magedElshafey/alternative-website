import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// routes
import AppRouter from "./routes/AppRouter";
// language
import "./i18n";
// react query
import { QueryClientProvider, QueryClient } from "react-query";
// toaster
import { Toaster } from "react-hot-toast";
import CommonFunctions from "./components/common/CommonFunctions";
// redux
import { Provider } from "react-redux";
import store from "./store/store";
// context
import GlobalContext from "./context/GlobalContext";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Toaster position="top-center" reverseOrder={false} />
    <Provider store={store}>
      <CommonFunctions />
      <GlobalContext>
        <AppRouter />
      </GlobalContext>
    </Provider>
  </QueryClientProvider>
);
