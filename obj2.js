let marina = {
    name: "Marina",
    growth: 157,
    year: 1997,
};

let dima = { ...marina};
dima.name = "Dmitriy";
console.log(dima,marina);