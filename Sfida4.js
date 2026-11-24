for (let i = 1; i <= 20; i++) {

    if (i === 11) {
        break;
    }

    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}