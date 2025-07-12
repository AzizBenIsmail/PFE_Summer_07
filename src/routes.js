import react , {lazy , Suspense} from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./composants/NavBar";
import Footer from "./composants/Footer";

// import Test from "./composants/Test";
// import Welcom from "./composants/Welcom";
// import App from "./App";

const Test = lazy(() => import("./composants/Test"));
const Welcom = lazy(() => import("./composants/Welcom"));
const App = lazy(() => import("./App"));


export default function routesComponent() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Test/:username" element={<Test />} />
        <Route path="/Welcom" element={<Welcom />} />
        <Route path="/App" element={<App />} />
        <Route path="/*" element={<App />} />
      </Routes>
      <Footer />
    </div>
  );
}
