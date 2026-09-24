
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



// import { Suspense, use, useState } from "react";
// import Banner from "./components/Banner"
// import Nav from "./components/nav"
// import Technologies from "./components/technologies/Technologies";
// import type { Itechnologies } from "./type/technologiesType";
// import Footer from "./components/Footer";
// import AvailableTechnology from "./components/TechnologyGrid";
// import YourStack from "./components/YourStack";


// const technologiesFetch = async (): Promise<Itechnologies[]> => {
//   const res = await fetch('/data.json');
//   const data = await res.json();
//   return data;
// };

// function App() {
//   const technologiesPromise = technologiesFetch()
//   const [selectedTechnologies, setSelectedTechnologies] =useState<Itechnologies[]>([]);
//   const technologies = use(technologiesPromise)
//   console.log(technologies)
//   return (
//     <>
//       <Nav></Nav>
//       <Banner></Banner>
//       <Suspense fallback={<h3>Loading.....</h3>}>
//         <Technologies technologies={technologies} technologiesPromise={technologiesPromise} selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies}></Technologies>
//         <YourStack selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies}></YourStack>
//       </Suspense>
//       <Footer></Footer>
//     </>
//   )
// }

export default App
