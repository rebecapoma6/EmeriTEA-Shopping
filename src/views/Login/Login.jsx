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
  );
};

export default SignInSide;




