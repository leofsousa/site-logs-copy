import florestImage from "../florest.jpg";
import { Header } from "../components/Header";
export default function Home() {
  return (
    <main>
      <div
        className="bg-cover bg-center h-screen w-full"
        style={{ backgroundImage: `url(${florestImage.src})` }}
      >
        <Header />
      </div>
      <div></div>
    </main>
  );
}
