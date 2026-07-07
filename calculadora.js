let num1, num2;
let hayNumeros = false;
let opcion = 0;

while (opcion !== 6) {
  opcion = parseInt(prompt(
    "MENU\n" +
    "1.- Introducir numeros\n" +
    "2.- Suma\n" +
    "3.- Resta\n" +
    "4.- Multiplicacion\n" +
    "5.- Division\n" +
    "6.- Salir\n" +
    "Elige una opcion:"
  ));

  switch (opcion) {
    case 1:
      num1 = parseFloat(prompt("Introduce el primer numero:"));
      num2 = parseFloat(prompt("Introduce el segundo numero:"));
      hayNumeros = true;
      alert("Numeros guardados correctamente.");
      break;
    case 2:
      if (hayNumeros) {
        alert("Resultado: " + (num1 + num2));
      } else {
        alert("Error: primero debes introducir los numeros.");
      }
      break;
    case 3:
      if (hayNumeros) {
        alert("Resultado: " + (num1 - num2));
      } else {
        alert("Error: primero debes introducir los numeros.");
      }
      break;
    case 4:
      if (hayNumeros) {
        alert("Resultado: " + (num1 * num2));
      } else {
        alert("Error: primero debes introducir los numeros.");
      }
      break;
    case 5:
      if (hayNumeros) {
        if (num2 !== 0) {
          alert("Resultado: " + (num1 / num2));
        } else {
          alert("Error: no se puede dividir entre 0.");
        }
      } else {
        alert("Error: primero debes introducir los numeros.");
      }
      break;
    case 6:
      alert("Saliendo del programa...");
      break;
    default:
      alert("Opcion no valida.");
  }
}
