import { createRoot } from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import APage from "./pages/APage.tsx";
import BPage from "./pages/BPage.tsx";
import HomePage from "./pages/HomePage.tsx";

const router = createBrowserRouter([ // APPROACH VIA CREATE-BROWSER-ROUTER IS MORE FLEXIBLE BECAUSE CAN BE STORED IN DB
    {
        path: '/', element: <MainLayout/>, // OUTLET COMPONENT MUST BE INSIDE PARENT ROUTE PATH COMPONENT TO DISPLAY CHILD ROUTES
        children:
            [
                {path: '', element: <HomePage/>},
                {path: 'a', element: <APage/>},
                {
                    path: 'b', element: <BPage/>, // OUTLET COMPONENT MUST BE INSIDE PARENT ROUTE PATH COMPONENT TO DISPLAY CHILD ROUTES
                    children: [
                        {path: '1', element: <div>CONTENT 1</div>},
                        {path: '2', element: <div>CONTENT 2</div>},
                        {path: '3', element: <div>CONTENT 3</div>}
                        ]
                },
            ]
    },
])

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router}/>)

// createRoot(document.getElementById('root')!) ---------ALTERNATIVE APPROACH FOR ROUTING VIA BROWSER-ROUTER COMPONENT
//     .render(
//         <BrowserRouter>
//             <Routes>
//                 <Route path={'/'} element={<MainLayout/>}>
//                     <Route path={''} element={<HomePage/>}/>
//                     <Route path={'a'} element={<APage/>}/>
//                     <Route path={'b'} element={<BPage/>}>
//                         <Route path={'1'} element={<div>content 1</div>}/>
//                         <Route path={'2'} element={<div>content 2</div>}/>
//                         <Route path={'3'} element={<div>content 3</div>}/>
//                     </Route>
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     );