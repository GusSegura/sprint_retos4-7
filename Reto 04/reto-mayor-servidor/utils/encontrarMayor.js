export function encontrarMayor(numerosArray) {

  const numeros = numerosArray.map(Number);
  const mayor = Math.max(...numeros);

  return {
    numeros,
    mayor
  };
}
