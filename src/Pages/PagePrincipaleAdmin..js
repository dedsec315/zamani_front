import React, { useState, useEffect } from "react"
import Navigation from "../Components/Navigation";
import { css } from "@emotion/react";
import "animate.css/animate.min.css";

const textOptions = [
  "Bienvenue sur notre platforme Zamani Telecom",
  "Cette platforme a été développée par Djibrim Atto et supervisée par M. Omar Issaka",
  "Si vous recontrez des problèmes,n'hésitez pas à contacter l'administrateur ",
  "Zamani est le premier opérateur nigérien à déployer la connexion 4G+",
  "Zamani, le meilleur opérateur en termes de qualité de service, Zamani est le meilleur opérateur en termes de qualité de service. L'opérateur dispose d'un réseau étendu et performant, d'une équipe d'assistance clientèle disponible 24h/24 et 7j/7 et d'une offre complète de services.",
  "Zamani, des offres accessibles à tous, Zamani propose des offres accessibles à tous, quel que soit votre budget. L'opérateur propose des forfaits prépayés et des forfaits postpayés, ainsi que des offres pour les familles et les professionnels.",
  "Zamani, l'opérateur qui vous simplifie la vie Zamani est l'opérateur qui vous simplifie la vie. L'opérateur propose une large gamme de services, accessibles à tous, pour vous permettre de rester connecté, de communiquer et de vous divertir.",
];

const PagePrincipaleAdmin = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-2xl font-bold animate__animated animate__fadeInUp"
      style={{
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Centre le contenu horizontalement
        justifyContent: "center", // Centre le contenu verticalement
        color: "White",
        textAlign: "center",
      }}
    >
      <h1
        css={css`
          max-width: 80%; /* Limite la largeur du texte */
          padding: 16px; /* Espacement du texte */
          color: rgb(255, 100, 175); /* Couleur personnalisée */
          background-color: rgba(255, 255, 255, 0.8); /* Arrière-plan légèrement opaque */
          border-radius: 8px; /* Coins arrondis */
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Ombre légère */
          text-align: center; /* Centre le texte */
        `}
      >
        {textOptions[currentTextIndex]}
      </h1>
      <Navigation isAdmin={true} /> 
    </div>
  );
};

export default PagePrincipaleAdmin;
