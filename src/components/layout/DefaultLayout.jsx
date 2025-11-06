// Import Outlet per segnaposto del main
import { Outlet } from "react-router";
// Import Navbar
import Navbar from "../Header/Navbar";
import Loader from "../Loader";
import { useGlobal } from "../../contexts/GlobalContext";

export default function DefaultLayout() {

    const { isLoading } = useGlobal();
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
            {isLoading && <Loader />}
        </>
    )

}