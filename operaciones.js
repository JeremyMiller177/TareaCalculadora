// Función de suma
function suma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error: Ambos argumentos deben ser números";
  }
  return a + b;
}

// Función de resta
function resta(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error: Ambos argumentos deben ser números";
  }
  return a - b;
}

// Función de multiplicación
function multiplicacion(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error: Ambos argumentos deben ser números";
  }
  return a * b;
}

// Función de división
function division(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error: Ambos argumentos deben ser números";
  }
  if (b === 0) {
    return "Error: División por cero no permitida";
  }
  return a / b;
}

// Función principal para ejecutar las operaciones
function main() {
  console.log("Suma: ", suma(5, 3)); // 8
  console.log("Suma con error: ", suma(5, "tres")); // Error: Ambos argumentos deben ser números

  console.log("Resta: ", resta(10, 4)); // 6
  console.log("Resta con error: ", resta("diez", 4)); // Error: Ambos argumentos deben ser números

  console.log("Multiplicación: ", multiplicacion(6, 7)); // 42
  console.log("Multiplicación con error: ", multiplicacion(6, "siete")); // Error: Ambos argumentos deben ser números

  console.log("División: ", division(10, 2)); // 5
  console.log("División por cero: ", division(10, 0)); // Error: División por cero no permitida
  console.log("División con error: ", division(10, "dos")); // Error: Ambos argumentos deben ser números
}

// Ejecutar la función principal
main();
