const form = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correo");
const edad = document.getElementById("edad");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const datos = {
        nombre: nombre.value,
        apellido: apellido.value,
        correo: correo.value,
        edad: edad.value,
    };

    const datosJSON = JSON.stringify(datos);

    localStorage.setItem("datos", datosJSON);

    alert("El registro se ha realizado con éxito");
});