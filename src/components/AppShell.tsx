import Footer from "./Footer";
import Navbar from "./Navbar";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <section className="w-full h-16"></section>
      {children}
      <Footer />
    </main>
  );
};

export default AppShell;
