import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const StoreLayout = ({children}) => {
    return ( 
        <div >
            <Header />
            <div className="flex main-section-container ">
                <Sidebar />
                {children}
            </div>
            <Footer />
        </div>
    );
}
 
export default StoreLayout;