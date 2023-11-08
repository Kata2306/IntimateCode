import "./MainLayout.css";
import Header from "../components/header/Header"

export default function MainLayout({children}) {
    return (
        <div>
        <Header />
        <div className="mainLayout">{children}</div>
      </div>
    )
}