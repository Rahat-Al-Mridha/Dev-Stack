
import { Suspense } from "react";
import Banner from "./components/Banner"
import Nav from "./components/nav"
import Technologies from "./components/technologies/Technologies";
import type { Itechnologies } from "./type/technologiesType";


const technologiesFetch = async (): Promise<Itechnologies[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
};

function App() {
  const technologiesPromise = technologiesFetch()

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h3>Loading.....</h3>}>
        <Technologies technologiesPromise={technologiesPromise} ></Technologies>
        
      </Suspense>
    </>
  )
}

export default App
