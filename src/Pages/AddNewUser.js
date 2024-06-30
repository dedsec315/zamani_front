import React, { useState } from 'react';
import Navigation from "../Components/Navigation";
import { colors } from '@mui/material';

export default function CreateUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [adminUserName, setAdminUserName] = useState("");
  const [Message, setMessage] =useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    let url =
      process.env.REACT_APP_API_URL +
      "Auth/create-user?adminUserName=" +
      adminUserName +
      "&username=" +
      username +
      "&password=" +
      password; // Corrected URL construction
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'accept': 'application/json', // Corrected content type
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: ''
    });

    try {
      let content = await response.json();
      if (content.Message === "YOU_ARE_NOT_AN_ADMIN") {
        setMessage("Nom d'utilisateur administrateur Incorrect")
      } else if (content.success) {
        setMessage("Utilisateur Créé avec succès")
      } else {
        setMessage("Nom d'utilisateur administrateur Incorrect")
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 h-screen flex flex-col justify-center items-center">
      <h1 className="text-white text-5xl font-bold mb-8">Créer un nouvel utilisateur</h1>
      <form
        className="bg-white p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="Username" className="block text-gray-700 text-sm font-bold mb-2">
            Nom d'utilisateur:
          </label>
          <input
            type="text"
            id="Username"
            name="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Password" className="block text-gray-700 text-sm font-bold mb-2">
            Mot de passe:
          </label>
          <input
            type="password" // Change input type to password for secure entry
            id="Password"
            name="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nomUtilisateurAdmin" className="block text-gray-700 text-sm font-bold mb-2">
            Confirmer votre nom d'utilisateur Admin pour créer le compte:
          </label>
          <input
            type="text"
            id="nomUtilisateurAdmin"
            name="nomUtilisateurAdmin"
            value={adminUserName}
            onChange={(e) => setAdminUserName(e.target.value)}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        >
          Créer un nouvel utilisateur
        </button>
      </form>
      {Message}
      <Navigation />
    </div>
  );
}
