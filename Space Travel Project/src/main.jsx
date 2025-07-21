import React from "react";
import ReactDOM from "react-dom/client";
import "./styling/index.css";
import App from "./App.jsx";

import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
//import page elements, loaders
import HomePage from "./pages/HomePage.jsx";
import NavBar from "./routes/NavBar.jsx";
import Planets, { planetsLoader } from "./pages/Planets.jsx";
import Constructions from "./pages/Constructions";
import SpaceCrafts from "./pages/SpaceCrafts.jsx";
import SpaceCraft from "./pages/SpaceCraft.jsx";
import SpaceCraftProvider from "./context/SpaceCraftProvider.jsx";

//initialize router to facilitate navigation to different pages
//HomePage, SpaceCrafts Page, Planets Page, SpaceCraft Details Page, Constructions Page
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route path="/" element={<HomePage />} />
      <Route path="spacecrafts" element={<SpaceCrafts />} />
      <Route
        path="spacecrafts/spacecraft/:id"
        element={<SpaceCraft />}
        errorElement={<Navigate to="/" />}
      />
      <Route path="spacecrafts/construction" element={<Constructions />} />
      <Route path="planets" element={<Planets />} loader={planetsLoader} />
      {/* redirect all unmatched routes to the homepage */}
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SpaceCraftProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </SpaceCraftProvider>
  </React.StrictMode>
);
