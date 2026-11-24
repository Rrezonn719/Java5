// Mesatarja që del tekst
// Pritet: Shuma e notave 8 + 10 + 6 duhet të jetë 24.
// const notat = [8, 10, 6];
// let shuma = 0;
// for (let n in notat) {
// shuma += n;
// }
// console.log(shuma);

const notat = [8, 10, 6];
let shuma = 0;

for (let n of notat) {
    shuma += n;
}

console.log(shuma);