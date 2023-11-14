import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const SignInSide = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
<<<<<<< HEAD

=======
 
>>>>>>> Rebeca
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const body = {
        email: email,
        password: password
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(body)
      };
      const response = await fetch('https://localhost:7032/AdministradorControlle/Login', options);
      
        if (response.ok) {
        const data = await response.json();
        const token= data.token;
        setCookie("jwtToken",token,60);
  
        navigate("/Admin");
      } else {
        Swal.fire("Error", "Ocurrió un error al iniciar sesión", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("Error", "Ocurrió un error al iniciar sesión", "error");
    }
  };
   
  // // Función para establecer la cookie
  function setCookie(cname, cvalue, minutes) {
    const d = new Date();
    d.setTime(d.getTime() + minutes * 60 * 1000); // Calcula la fecha de expiración en milisegundos
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  return (
    <form onSubmit={handleLoginSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="button-ingresar" type="submit">Iniciar Sesión</button>
    </form>
  );
};
export default SignInSide;