import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Top-level pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Maps from "./pages/Maps";
import ProjectCycle from "./pages/ProjectCycle";
import Terminology from "./pages/Terminology";
import NotFound from "./pages/NotFound";

// Terminology detail pages (note the space in file names)
import BuildingConstruction from "./pages/Building Construction";
import BridgeConstruction from "./pages/Bridge Construction";
import RoadConstruction from "./pages/Road Construction";
import CulvertConstruction from "./pages/Culvert Construction";
import FloodMitigation from "./pages/Flood Mitigation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/project-cycle" element={<ProjectCycle />} />

        {/* Terminology hub */}
        <Route path="/terminology" element={<Terminology />} />

        {/* Terminology details (clean URLs) */}
        <Route path="/building-construction" element={<BuildingConstruction />} />
        <Route path="/bridge-construction" element={<BridgeConstruction />} />
        <Route path="/road-construction" element={<RoadConstruction />} />
        <Route path="/culvert-construction" element={<CulvertConstruction />} />
        <Route path="/flood-mitigation" element={<FloodMitigation />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
