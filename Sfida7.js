const studentet = [
    { emri: "Era", nota: 9 },
    { emri: "Arbër", nota: 5 },
    { emri: "Dua", nota: 7 }
];

let kaluan = 0;

for (let student of studentet) {
    let rezultati = student.nota >= 6 ? "kaloi" : "nuk kaloi";

    console.log(student.emri + ": " + rezultati);

    if (student.nota >= 6) {
        kaluan++;
    }
}

console.log("Kaluan: " + kaluan + " nga " + studentet.length);