function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  let reg = new RegExp(target + "$", "i");

  return reg.test(str);
}

console.log(confirmEnding("Bastian", "n"));