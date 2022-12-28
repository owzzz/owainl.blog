import { roboto, beVietnamPro } from '../lib/fonts';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${roboto.className} ${beVietnamPro.className}`}>
      <Component {...pageProps} />
    </div>
  );
}