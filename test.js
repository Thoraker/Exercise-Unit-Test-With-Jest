// importar la función sum del archivo app.js
const { sum } = require("./app.js");

// comienza tu primera prueba
test("adds 14 + 9 to equal 23", () => {
	//dentro de la prueba llamamos a nuestra función sum con 2 números
	let total = sum(14, 9);

	// esperamos que la suma de esos 2 números sea 23
	expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function () {
	// importo la función desde app.js
	const { fromEuroToDollar } = require("./app.js");

	// hago mi comparación (la prueba)
	expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.2)
});

test("One dollar should be 106.5 yens", function () {
	// importo la función desde app.js
	const { fromDollarToYen } = require("./app.js");

	// hago mi comparación (la prueba)
	expect(fromDollarToYen(2)).toBe(213); //2 dólares son 213 yenes
});

test("One euro should be 1.206 dollars", function () {
	// importo la función desde app.js
	const { fromYenToPound } = require("./app.js");

	// hago mi comparación (la prueba)
	expect(fromYenToPound(1000)).toBe(6.2); //1000 yenes son 6.2 pounds
});
