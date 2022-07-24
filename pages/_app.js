import '../styles/globals.css'
import StoreLayout from "../layouts/StoreLayout";
function MyApp({ Component, pageProps }) {
    return (
        <StoreLayout>
            <Component {...pageProps} />
        </StoreLayout>
    );
}

export default MyApp;