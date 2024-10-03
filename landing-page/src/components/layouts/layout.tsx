import { Outlet } from "react-router-dom"
import Header from "../Navbar/index"
import Footer from "../Footer/footer"


const Layout=()=>{

    return (
<div>
    <Header />
    <main>
    <Outlet />
    </main>
    <Footer />
</div>
    )
}
export default  Layout