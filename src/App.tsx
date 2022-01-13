import { BrowserRouter } from "react-router-dom";

import { DefaultLayout } from "@/layouts/DefaultLayout";

import { Router } from "./Router";

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Router />
      </DefaultLayout>
    </BrowserRouter>
  );
}
