import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const motivaSans = localFont({src: "./MotivaSansRegular.woff.ttf"});
export const interFont  = Inter({subsets: ['cyrillic'], preload: true });