import Navbar from "./Navbar/Navbar";
import MobileNav from "./MobileNav/MobileNav";
function Header() {
  return (
    <header className="flex border-b-[1px] border-slate-300/10 bg-[rgba(0,2,8.0.61)] p-8 shadow-2xl shadow-black/80">
      <Navbar />
      <MobileNav />
    </header>
  );
}

export default Header;
