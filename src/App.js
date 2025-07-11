import "./App.css";
import Welcom from "./composants/Welcom";
import React, { useState, useEffect } from "react";
import useIsOnlineCustomName from "./composants/useIsOnline"
import { Link } from "react-router-dom";
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

  const [count, setCount] = useState(0);

  const [namee, setNamee] = useState("");

  const isOnline = useIsOnlineCustomName();

    // useEffect(() => {
    //   console.log('cette fonction va etre execute la premiere fois et a chaque modification de la variable count ');
    //   console.log('car le deuxieme argument est count ');
    //   return () => {
    //   console. log('cette partie va etre execute pour nettoyer et lors de loperation unmounting ');
    //   }
    //   }, [count])
      
      // useEffect(() => {
      // console.log('cette fonction va etre execute une fois seulement ');
      // console.log('car le deuxieme argument est un tableau vide ');
      // return () => {
      // console. log(' cette partie va etre execute seulement lors de loperation unmounting ')
      // }
      
      // }, [])
      
      useEffect(() => {
      console.log(isOnline)
      console.log('cette fonction va etre execute chaque re-render');
      console.log('car pas de deuxieme argument passer');
      });

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

          {count}
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Cliquez ici
          </button>

          {namee}
          <input
            onChange={(e) =>
              setNamee(() => (e.target.value ))
            }
          ></input>

          <Link to="/Welcom">Welcom</Link>
        </div>
      </div>
    </>
  );
}

export default App;
