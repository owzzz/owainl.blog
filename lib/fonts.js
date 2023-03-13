import { Roboto, Be_Vietnam_Pro } from "next/font/google";

const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-roboto',
});

const beVietnamPro = Be_Vietnam_Pro({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-beVietnamPro',
});

export {
    roboto,
    beVietnamPro
};