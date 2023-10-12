import { useState, useEffect } from "react";
import "./Colors.css";
import axios from "axios";
import ColorsElements from "../Components/ColorsElements/ColorsElements";

function Colors() {
  const [colors, setColors] = useState([]);
  const urlbd = "http://localhost:5000/colors";
 //Cette fonction permet d'obtenir la liste des couleurs
  const getcolors = () => {
    axios
      .get(urlbd)
      .then(function (res) {
        setColors(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getcolors();
  }, []);

  console.log(colors);
  return (
    <div className="colors">
      <h1>Color Picker</h1>
      <div className="elements">
        {colors.map((color) => (
          <ColorsElements key={colors.id} color={color} />
        ))}
        {/* {colors.map((color) => {
          return <ColorsElements key={colors.id} color={color} />;
        })} */}
      </div>
    </div>
  );
}

export default Colors;
