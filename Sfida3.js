// 1. Me do...while
let bateria = 100;

do {
    console.log("Bateria: " + bateria + "%");
    bateria += 10;
} while (bateria < 100);

// Koment: do...while ekzekutohet së paku një herë,
// sepse kushti kontrollohet pas ekzekutimit të kodit.


// 2. Me while
let bateria2 = 100;

while (bateria2 < 100) {
    console.log("Bateria: " + bateria2 + "%");
    bateria2 += 10;
}