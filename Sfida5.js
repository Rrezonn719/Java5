const cmimet = [2.5, 1.2, 4, 0.8];

let totali = 0;
let meIShtrenjti = 0;
let produkteMbi2 = 0;

for (let cmimi of cmimet) {
    totali += cmimi;

    if (cmimi > meIShtrenjti) {
        meIShtrenjti = cmimi;
    }

    if (cmimi > 2) {
        produkteMbi2++;
    }
}

console.log("Totali: " + totali.toFixed(2) + " €");
console.log("Më i shtrenjti: " + meIShtrenjti + " €");
console.log("Produkte mbi 2 €: " + produkteMbi2);