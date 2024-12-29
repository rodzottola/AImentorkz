import { Routes, Route } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage";
import HomePage from "../../pages/HomePage";
import HeaderPage from "../headerPage/HeaderPage";
import FootPage from "../footPage/FootPage";
import Questions from "../../pages/Questions";

const RoutesViews = () => {
    return (
        <>
            <HeaderPage />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/FAQ" element={<Questions />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <FootPage />
        </>
    );
};

export default RoutesViews;