import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

import Layout from './pages/js/Layout';
import Home from './pages/js/home';
import ProjectPage from './pages/js/ProjectPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/project/:projectSlug"
                        element={<ProjectPage />}
                    />

                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;