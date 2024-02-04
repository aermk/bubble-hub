import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MSTProvider } from "./store/useMST.ts";
import { createRootStore } from "./store/rootStore.ts";

import bubbleHub from "./api/mocks/bubble-hub.ts";
import mockApi from "./api/mockApiClient.ts";

bubbleHub(mockApi);

const rootStore = createRootStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MSTProvider value={rootStore}>
      <App />
    </MSTProvider>
  </React.StrictMode>
);
