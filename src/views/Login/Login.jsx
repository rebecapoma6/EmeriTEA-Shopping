// import React, { useState } from "react";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const SignInSide = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();

//     const apiUrl = "http://localhost:3001/users"; // URL de tu API local

//     const data = {
//       email,
//       password,
//     };

//     try {
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         // Si el inicio de sesión es exitoso, redirige a la vista Admin
//         navigate("/Admin");
//       } else {
//         Swal.fire("Error", "Invalid credentials", "error");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       Swal.fire("Error", "An error occurred while signing in.", "error");
//     }
//   };

//   return (
//     <form className="login-form" onSubmit={handleLoginSubmit}>
//       <div className="form-group">
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit">Sign In</button>
//     </form>
//   );
// };


// export default SignInSide;

import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const SignInSide = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = "http://localhost:3001/users"; // URL de tu API local

    const data = {
      email,
      password,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        const token = responseData.token;

        // Guardar token en cookies
        document.cookie = `jwtToken=${token}; max-age=${30 * 24 * 60 * 60}; path=/`;

        // Redirigir a la vista de Admin después de iniciar sesión correctamente
        navigate("/Admin");
      } else {
        Swal.fire("Error", "Invalid credentials", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("Error", "An error occurred while signing in.", "error");
    }
  };


  return (
    <form className="login-form" onSubmit={handleLoginSubmit}>
      <div className="forms">
        <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      </div>
      
      <div> 
     <button className="button-ingresar" type="submit">Entrar</button>
     </div>
    
    </form>
  );
};

export default SignInSide;





