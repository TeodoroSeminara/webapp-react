// Import Outlet per segnaposto del main
import { Outlet } from "react-router";
// Import Navbar
import Navbar from "../Header/Navbar";


export default function DefaultLayout() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="bg-dark text-light min-vh-100 py-4">
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>
    )

}