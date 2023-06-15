import MainLayout from "../src/components/layout/main-layout";
import "@/styles/general.sass";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
