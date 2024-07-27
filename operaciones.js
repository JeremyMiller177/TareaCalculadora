function suma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error: Ambos argumentos deben ser números";
  }
  return a + b;
}

function resta(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error: Ambos argumentos deben ser números";
  }
  return a - b;
}

function multiplicacion(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error: Ambos argumentos deben ser números";
  }
  return a * b;
}

function division(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error: Ambos argumentos deben ser números";
  }
  if (b === 0) {
    return "Error: División por cero no permitida";
  }
  return a / b;
}

function main() {
  console.log("Suma: ", suma(5, 3)); // 8
  console.log("Suma con error: ", suma(5, "tres"));

  console.log("Resta: ", resta(10, 4)); // 6
  console.log("Resta con error: ", resta("diez", 4)); //

  console.log("Multiplicación: ", multiplicacion(6, 7)); // 42
  console.log("Multiplicación con error: ", multiplicacion(6, "siete"));

  console.log("División: ", division(10, 2)); // 5
  console.log("División por cero: ", division(10, 0));
  console.log("División con error: ", division(10, "dos"));
}

main();
