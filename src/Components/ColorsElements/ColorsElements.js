import React from "react";
import "./ColorsElements.css";
import toast from "react-hot-toast";
import copy from "copy-to-clipboard";
import JSConfetti from 'js-confetti'

const ColorsElements = ({ color }) => {
  const messages = [
    "Excellent choix de couleur ! 😊",
    "Très bon choix ! 👌",
    "Beau boulot ! 👍",
    "Vous avez bon goût ! 🙌",
    "Superbe couleur ! 😍",
    "Vous avez l'oeil ! 😉",
    "Wow, quelle expertise ! 🤩",
    "Bravo 👏 !",
    "Bon choix ! ❤️"
  ];

  const copyToClipboard = (textToCopy) => {
    const random = Math.floor(Math.random() * messages.length);
    const jsConfetti = new JSConfetti({copyToClipboard})

    copy(textToCopy);
    toast.success(messages[random]);

    jsConfetti.addConfetti()
  };

  return (
    <div
      key={color.id}
      style={{ backgroundColor: color.name }}
      className={`couleur ${color.name === "Black" && "text-white"}`}
      onClick={() => copyToClipboard(color.hex)}>
      <p>{color.name} </p>
    </div>
  );
};

export default ColorsElements;
