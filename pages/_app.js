import "../styles/globals.css";
import StoreLayout from "../layouts/StoreLayout";
import { parseCookies } from "../utils/cookie";
import { SSRKeycloakProvider, SSRCookies } from "@react-keycloak/ssr";

const keycloakCfg = {
    url: process.env.NEXT_PUBLIC_AUTH_URL,
    realm: process.env.NEXT_PUBLIC_AUTH_REALM,
    clientId: process.env.NEXT_PUBLIC_AUTH_CLIENT_ID,
};
function MyApp({ Component, pageProps, cookies }) {
    return (
        <SSRKeycloakProvider
            // keycloakConfig={keycloakCfg}
            persistor={SSRCookies(cookies)}
        >
            <StoreLayout>
                <Component {...pageProps} />
            </StoreLayout>
        </SSRKeycloakProvider>
    );
}

MyApp.getInitialProps = async (context) => {
    return {
        cookies: parseCookies(context?.ctx?.req),
    };
};

export default MyApp;
