const form = document.getElementById("formulariosub"); 
const inputs = document.querySelectorAll("#formulariosub input");
//const errores = document.querySelectorAll('.error');



  
const regex = {
  nombrecompleto: /^[A-Za-zÁÉÍÓÚáéíóúñÑ]{2,}\s+[A-Za-zÁÉÍÓÚáéíóúñÑ]{2,}$/, // mínimo dos palabras
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  contraseña: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, // mínimo 8 caracteres, letras y números
  telefono: /^\d{7,}$/, // al menos 7 dígitos
  direccion: /^.*[A-Za-z0-9]+.*\s+.*[A-Za-z0-9]+.*$/, // algo con número y palabra separados
  ciudad: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,}$/, // letras y espacios
  cp: /^[A-Za-z0-9]{3,}$/, // mínimo 3 letras o números
  dni: /^\d{7,8}$/ // 7 u 8 dígitos
};
const errores = { //creo objeto errores
    nombre: document.getElementById("error-nombre"), //recupero cada uno de los errores con el id de la etiqueta small de cada campo
    email: document.getElementById("error-email"),
    contraseña: document.getElementById("error-contraseña"),
    repContraseña: document.getElementById("error-repcontraseña"),
    edad: document.getElementById("error-edad"),
    telefono: document.getElementById("error-telefono"),
    direccion: document.getElementById("error-direccion"),
    ciudad: document.getElementById("error-ciudad"),
    cp: document.getElementById("error-cp"),
    dni: document.getElementById("error-dni")
};


const validarCampo = (regex, input) => {
  if (regex.test(input.value)) {
    input.style.border = "2px solid green";

    return true;
  } else {
    input.style.border = "2px solid red";
    
    return false;
  }
};



const validarformulario = (e) => {
  switch (e.target.name) {
    case "nombrecompleto":
      if (validarCampo(regex.nombrecompleto, e.target) === false) {
          errores.nombre.textContent = 'El nombre es obligatorio minimo tiene que tener un espacio';                   
      }
      else{ 
        errores.nombre.textContent = "";
      }

      break;
    case "email":
      if (validarCampo(regex.email, e.target) === false) {
          errores.email.textContent = 'Escribe mail en formato correcto';                   
      }
      else{ 
        errores.email.textContent = "";
      }
      break;
    case "contraseña":
      if (validarCampo(regex.contraseña, e.target) === false) {
          errores.contraseñaontraseña.textContent = 'Tiene que tenmer mínimo 8 caracteres, letras y números';                   
      }
      else{ 
        errores.contraseña.textContent = "";
      }
      break;
    case "repcontraseña":
      validarRepContraseña();
      if (validarRepContraseña() === false) {
          errores.repContraseña.textContent = 'Las contraseñas no coinciden';                   
        }
        else{ 
        errores.repContraseña.textContent = "";
        }
      break;
    case "edad":
      if (parseInt(e.target.value) >= 18) {
        e.target.style.border = "2px solid green";
        errores.edad.textContent = "";
      } else {
        e.target.style.border = "2px solid red";
        errores.edad.textContent = "Debe tener 18 años o más";
      }
      break;
    case "telefono":
      if (validarCampo(regex.telefono, e.target) === false) {
          errores.telefono.textContent = 'Escribe el telefono correctamente';                   
      }
      else{ 
        errores.telefono.textContent = "";
      }
      break;
    case "direccion":
      if (validarCampo(regex.direccion, e.target) === false) {
          errores.direccion.textContent = 'Escribe la direccion correctamente';                   
      }
      else{ 
        errores.direccion.textContent = "";
      }
      break;
    case "ciudad":
      if (validarCampo(regex.ciudad, e.target) === false) {
          errores.ciudad.textContent = 'Escribe la ciudad correctamente';                   
      }
      else{ 
        errores.ciudad.textContent = "";
      }

      break;
    case "cp":
      if (validarCampo(regex.cp, e.target) === false) {
          errores.cp.textContent = 'Escribe el cp correctamente';                   
      }
      else{ 
        errores.cp.textContent = "";
      }
      break;
    case "dni":
      if (validarCampo(regex.dni, e.target) === false) {
          errores.dni.textContent = 'Escribe el dni correctamente';                   
      }
      else{ 
        errores.dni.textContent = "";
      }
      break;
  }
};

const validarRepContraseña = () => {
  const pass1 = document.getElementById("contraseña");
  const pass2 = document.getElementById("repcontraseña");
  if (pass1.value === pass2.value && pass1.value !== "") {
    pass2.style.border = "2px solid green";
    return true;
  } else {
    pass2.style.border = "2px solid red";
    return false;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarformulario);
  input.addEventListener("blur", validarformulario);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Formulario enviado con validación (pero no se envió realmente)");
  // Verifico si algún mensaje de error está presente
  const hayErrores = Object.values(errores).some(error => error.textContent !== "");

  // verifico que todos los campos estén validados correctamente
  const camposInvalidos = Array.from(inputs).some(input => input.style.border === "2px solid red");

  if (hayErrores || camposInvalidos) {
    alert("Por favor, corregí los errores antes de enviar el formulario.");
  } else {
    var mensaje = "Formulario enviado con éxito:\n\n";

    inputs.forEach(input => {
      mensaje += `${input.name}: ${input.value}\n`;
    });
       fetch('https://httpbin.org/post',{
      method : "POST",
      body : JSON.stringify(mensaje)


    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))
  }
});
