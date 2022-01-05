import { BrowserRouter } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/zoom";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

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
