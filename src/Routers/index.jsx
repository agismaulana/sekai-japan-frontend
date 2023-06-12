import React from 'react';
import Root from './../Containers/Layouts'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: "home",
                element: <Home />
            },
            {
                path: "contact",
                element: <h1>Contact</h1>
            },
        ]
    }
])

export default router;