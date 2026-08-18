import { BrowserRouter, Routes, Route } from "react-router-dom";
import GalleryPage from "../pages/GalleryPage/GalleryPage";
import TeachersPage from "../pages/TeachersPage/TeachersPage";
import PaginaInicio from "../pages/PaginaInicio/PaginaInicio";
import AboutPage from "../pages/AboutPage/AboutPage";
import NivelCero from "../pages/NivelCero/NivelCero";

function AppRouter() {

    return (

        <BrowserRouter>

            <Routes>

    <Route
        path="/"
        element={<PaginaInicio />}
    />

    <Route
        path="/galeria"
        element={<GalleryPage />}
    />

    <Route
        path="/profesores"
        element={<TeachersPage />}
    />

    <Route
         path="/conocenos" 
         element={<AboutPage />} 
    />

    <Route 
    path="/programa/:slug" 
    element={<NivelCero />} 
/>

</Routes>

        </BrowserRouter>


    );

}

export default AppRouter;