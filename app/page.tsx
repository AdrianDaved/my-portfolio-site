import Navbar from "./components/navbar";
import Main from "./components/main";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home" className="min-h-screen background flex items-center justify-center pt-14">
        <Main />
      </section>
      <section id="about" className="min-h-screen background flex items-center justify-center">
        <p className="text-gray-400">About section coming soon</p>
      </section>
      <section id="technologies" className="min-h-screen background flex items-center justify-center">
        <p className="text-gray-400">Technologies section coming soon</p>
      </section>
      <section id="projects" className="min-h-screen background flex items-center justify-center">
        <p className="text-gray-400">Projects section coming soon</p>
      </section>
      <section id="contact" className="min-h-screen background flex items-center justify-center">
        <p className="text-gray-400">Contact section coming soon</p>
      </section>
    </>
  );
}
