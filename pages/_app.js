import "@/styles/globals.css";
import "@/public/css/custom.css";
import "@/public/fonts/Switzer/switzer.css";


export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
