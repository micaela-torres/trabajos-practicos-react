import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";


const Router = () => {
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>

            </Route>
        </Routes>
    </BrowserRouter>
}

export default Router