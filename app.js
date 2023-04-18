// esta es mi función que suma dos números
// declaramos una función con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
	// convertimos el valor a dólares
	let valueInDollar = valueInEuro * 1.2;
	// retornamos el valor
	return valueInDollar;
};

const fromDollarToYen = function (valueInDollar) {
	// convertimos el valor a Yenes
	let valueInYen = valueInDollar * 106.5;
	// retornamos el valor
	return valueInYen;
};

const fromYenToPound = function (valueInYen) {
	// convertimos el valor a pounds
	let valueInPound = valueInYen * 0.0062;
	// retornamos el valor
	return valueInPound;
};

const sum = (a, b) => {
	return a + b;
};

// solo un registro en consola para nosotros.
console.log(sum(7, 3));

// exporta la función para usarla en otros archivos
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
