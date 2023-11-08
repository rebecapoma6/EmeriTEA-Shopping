// {
//   "Id_Administrador": 1,
//   "Name_administrador": "John Doe",
//   "Email": "johndoe@example.com",
//   "Password": "password123"
// },

import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignInSide = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = "http://localhost:3000/users"; // URL de tu API para iniciar sesión

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
        const userRole = responseData.role;
        const token = responseData.token;

        // Establecer cookie con el token y una expiración de 30 minutos
        setCookie("jwtToken", token, 30);

        if (userRole === 1) {
          // Redirigir a la vista de administrador ("Admin")
          navigate("/Admin");
        } else {
          Swal.fire("Error", "Usuario no autorizado", "error");
        }
      } else {
        Swal.fire("Error", "Credenciales incorrectas", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("Error", "Ocurrió un error al iniciar sesión", "error");
    }
  };

  // Función para establecer la cookie
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
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default SignInSide;








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

//     const apiUrl = "http://localhost:3000/users"; // URL de tu API para iniciar sesión

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
//         const responseData = await response.json();
//         const token = responseData.token;

//         // Establecer cookie con el token y una expiración de 30 minutos
//         setCookie("jwtToken", token, 30);

//         // Redirigir a la vista de administrador ("Admin")
//         navigate("/Admin");
//       } else {
//         Swal.fire("Error", "Credenciales incorrectas", "error");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       Swal.fire("Error", "Ocurrió un error al iniciar sesión", "error");
//     }
//   };

//   // Función para establecer la cookie
//   function setCookie(cname, cvalue, minutes) {
//     const d = new Date();
//     d.setTime(d.getTime() + minutes * 60 * 1000); // Calcula la fecha de expiración en milisegundos
//     const expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//   }

//   return (
//     <form onSubmit={handleLoginSubmit}>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Contraseña:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <button className="button-ingresar" type="submit">Iniciar Sesión</button>
//     </form>
//   );
// };

// export default SignInSide;




