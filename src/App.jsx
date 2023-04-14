import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import Team from "./components/Team";

function App() {
  const [colaborators, setColaborators] = useState([]);

  const toTheNewColaborator = (colaborator) => {
    console.log(colaborator);
    setColaborators([...colaborators, colaborator]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        forRegisteredColaborator={(colaborator) =>
          toTheNewColaborator(colaborator)
        }
      />
      <Team name="Programação" />
      <Team name="Front-End" />
      <Team name="DataScience" />
      <Team name="DevOps" />
      <Team name="UX e Design" />
      <Team name="Mobile" />
      <Team name="Inovacão e Gestão" />
    </div>
  );
}

export default App;
