// pages/_app.js or pages/_app.tsx

import RootLayout from "../app/layout";

function MyApp({ Component, pageProps }) {
    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    );
}

export default MyApp;
