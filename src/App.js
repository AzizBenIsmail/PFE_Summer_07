import "./App.css";
import Welcom from "./composants/Welcom";
import React , {useState , useEffect} from "react"
function App() {
  //js
  //1
  const name = "9antra";


  //2
  const element = <h1>Hello </h1>;

  //3
  const etudiant = {
    nom: "Mohamed Aziz ",
    prenom: "Ben Ismail",
  };

  const etudiant2 = {
    nom: "Mohamed ",
    prenom: "Ben foulen",
  };

  //4
  function getEtudiant(etudiant) {
    const etu = etudiant.nom + "" + etudiant.prenom;
    return etu;
  }

  //5
  const listEtudiant = [
    { nom: "Doe", prenom: "Jane", age: "27", objectID: 0 },
    { nom: "Elisa", prenom: "benz", age: "30", objectID: 1 },
    { nom: "foulen", prenom: "ben foulen", age: "50", objectID: 1 },
  ];

  //6
  const inlineStyle = {
    color: "#2ecc71",
    fontSize: "56px",
  };

  //7
  //const count = 12

  const [count,setCount] = useState(0);


  return (
    <>
      {/* jsx */}
      <div className="App">
        <div className="App-header">
          {/* 1 */}
          {name}
          {/* 2 */}
          {element}
          {/* 3 */}
          {etudiant.nom}
          {etudiant.prenom}
          {/* 4 */}
          <br />
          {getEtudiant(etudiant2)}
          <br />
          {/* 5 */}
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>

                <th>Nom</th>
                <th>Prénom</th>
                <th>Âge</th>
              </tr>
            </thead>
            <tbody>
              {listEtudiant.map(function (item) {
                return (
                  <tr key={item.objectID}>
                    <td>{item.objectID}</td> <td>{item.nom}</td>{" "}
                    <td>{item.prenom}</td> <td>{item.age}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* 6 */}
          <div>
            Line 35:9: <div style={inlineStyle}>'inlineStyle' </div> is assigned
            a value but never used
          </div>

          {/* 7 */}
          <Welcom nom="9antra" xyz="9antra" />

          {/* {count}
          <button>Cliquez ici</button> */}
        </div>
      </div>
    </>
  );
}

export default App;
