import "./MainLayout.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="mainLayout">{children}</div>
      <Footer />
    </div>
  );
}
