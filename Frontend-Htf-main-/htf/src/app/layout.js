import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "../../component/Navbar";
import { FirebaseProvider } from "../../context/Firebase";
import { Number } from "../../context/number";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Number>
        <FirebaseProvider>
          <body className={inter.className}>
            <Navbar></Navbar>
            {children}
          </body>
        </FirebaseProvider>
      </Number>
    </html>
  );
}