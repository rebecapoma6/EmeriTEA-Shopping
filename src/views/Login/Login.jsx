// import React, { useState, useEffect } from "react";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const SignInSide = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   function setCookie(cname, cvalue, minutes) {
//     const d = new Date();
//     d.setTime(d.getTime() + minutes * 60 * 1000);
//     const expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//   }

//   const handleLoginSubmit = async () => {
//     const apiUrl = "http://localhost:3001/users"; // Tu URL de API

//     // Crear un objeto de datos para enviar al servidor
//     const data = {
//       email,
//       password,
//     };

//     // Realizar la solicitud a la API
//     fetch(apiUrl, {
//       method: "POST", // Cambia a 'GET', 'PUT', 'DELETE', según corresponda
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         // Aquí puedes manejar la respuesta de la API

//         // Si el inicio de sesión es exitoso, redirige a la vista Admin
//         if (result.success) {
//           navigate("/Admin");
//         } else {
//           Swal.fire("Error", "Invalid credentials", "error");
//         }
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         Swal.fire("Error", "An error occurred while signing in.", "error");
//       });
//   };

//   useEffect(() => {
//     // Aquí puedes implementar la lógica para la animación de introducción
//   }, []);

//   return (
//     <div className="login-form">
//       <h1>Sign In</h1>
//       <form onSubmit={handleLoginSubmit}>
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </label>
//         <button type="submit">Sign In</button>
//       </form>
//     </div>
//   );
// };

// export default SignInSide;

// import React, { useState } from "react";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const SignInSide = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const fakeApiRequest = async (data) => {
//     try {
//       // Simula una solicitud a la API local
//       // Debes ajustar esto para conectarte a tu propia API o servidor
//       // Esto es solo un ejemplo
//       if (data.email === "user@example.com" && data.password === "password123") {
//         return { success: true };
//       } else {
//         return { success: false };
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       return { success: false };
//     }
//   };

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();

//     const data = {
//       email,
//       password,
//     };

//     try {
//       const result = await fakeApiRequest(data);

//       if (result.success) {
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
//     <div className="login-form">
//       <h1>Sign In</h1>
//       <form onSubmit={handleLoginSubmit}>
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </label>
//         <button type="submit">Sign In</button>
//       </form>
//     </div>
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
        // Si el inicio de sesión es exitoso, redirige a la vista Admin
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
    <div className="login-form">
      <h1>Sign In</h1>
      <form onSubmit={handleLoginSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInSide;



