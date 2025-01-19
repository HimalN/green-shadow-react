import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {RootLayout} from "./components/RootLayout.tsx";
import {SignIn} from "./pages/SignIn.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";
import {Field} from "./pages/Field.tsx";
import {Crop} from "./pages/Crop.tsx";

function App() {

    const routers =  createBrowserRouter([
        {path : '',
            element : <RootLayout/>,
            children:[
                {path : '',element : <SignIn/>},
                //{path : '/signup',element : <SignUp/>},
                {path : '/home',element : <Dashboard/>},
                {path : '/field',element : <Field/>},
                {path : '/crop',element : <Crop/>},
                // {path : '/staff',element : <Staff/>},
                // {path : '/vehicle',element : <Vehicle/>},
                // {path : '/equipment',element : <Equipment/>},
                // {path : '/logs',element : <Logs/>}
            ]},
    ])

    return (
        <>
            <RouterProvider router={routers} />
        </>
    )
}

export default App
