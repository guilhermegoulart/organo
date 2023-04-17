import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import Team from "./components/Team";

function App() {
  const teams = [
    {
      name: "Programação",
      primaryColor: "#57C278",
      secundaryColor: "#D9F7E9",
    },
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secundaryColor: "#E8F8FF",
    },
    {
      name: "DataScience",
      primaryColor: "#A6D157",
      secundaryColor: "#F0F8E2",
    },
    {
      name: "DevOps",
      primaryColor: "#E06B69",
      secundaryColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#DB6EBF",
      secundaryColor: "#FAE9F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FFBA05",
      secundaryColor: "#FFF5D9",
    },
    {
      name: "Inovacão e Gestão",
      primaryColor: "#FF8A29",
      secundaryColor: "#FFEEDF",
    },
  ];

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

      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          primColor={team.primaryColor}
          secColor={team.secundaryColor}
        />
      ))}
    </div>
  );
}

export default App;
