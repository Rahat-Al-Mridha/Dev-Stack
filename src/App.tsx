
import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Nav from "./components/nav";
import Technologies from "./components/technologies/Technologies";
import type { Itechnologies } from "./type/technologiesType";
import Footer from "./components/Footer";
import YourStack from "./components/YourStack";

function App() {
  const [technologies, setTechnologies] = useState<Itechnologies[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] =
    useState<Itechnologies[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data));
  }, []);

  return (
    <>
      <Nav />
      <Banner />
      <div className=" flex max-w-6xl mx-auto">
        <Technologies
          technologies={technologies}
          selectedTechnologies={selectedTechnologies}
          setSelectedTechnologies={setSelectedTechnologies}
        />

        <YourStack
          selectedTechnologies={selectedTechnologies}
          setSelectedTechnologies={setSelectedTechnologies}
        />
      </div>

      <Footer />
    </>
  );
}


export default App
