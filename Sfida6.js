const menyja = {
    espresso: 1,
    kapucino: 1.5,
    caj: 0.8,
    uje: 0.5
};

let meIShtrenjti = "";
let cmimiMeILarte = 0;

for (let produkti in menyja) {
    console.log(produkti + ": " + menyja[produkti] + " €");

    if (menyja[produkti] > cmimiMeILarte) {
        cmimiMeILarte = menyja[produkti];
        meIShtrenjti = produkti;
    }
}

console.log("Më i shtrenjti: " + meIShtrenjti);