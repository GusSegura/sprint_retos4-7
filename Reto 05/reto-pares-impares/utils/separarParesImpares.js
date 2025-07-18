export function separarParesImpares(numeros) {
  const pares = numeros.filter(n => n % 2 === 0);
  const impares = numeros.filter(n => n % 2 !== 0);
  return { pares, impares };
}

export function validarNumeros(array) {
  const numeros = array.map(Number);
  const sonValidos = numeros.every(n => !isNaN(n));
  return sonValidos ? numeros : null;
}
