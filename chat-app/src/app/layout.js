import BootstrapJs from "./Bootstrap";
import Header from '@/app/components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './button-style.scss';
import "./globals.scss";


export const metadata = {
  title: "Chat App",
  description: "Premium bootstrap chat application clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <BootstrapJs/>
      </body>
    </html>
  );
}
