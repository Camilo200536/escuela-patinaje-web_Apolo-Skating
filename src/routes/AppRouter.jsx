import { BrowserRouter, Routes, Route } from "react-router-dom";
import GalleryPage from "../pages/GalleryPage/GalleryPage";
import TeachersPage from "../pages/TeachersPage/TeachersPage";
import PaginaInicio from "../pages/PaginaInicio/PaginaInicio";

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

</Routes>

        </BrowserRouter>

    );

}

export default AppRouter;