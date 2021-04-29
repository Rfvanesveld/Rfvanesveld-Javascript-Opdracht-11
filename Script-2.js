//VAT -PART 1/1 ............................................

const priceCalculation = function (price) {
    return priceWithVat = (price * 1.21);
}
console.log(priceCalculation(200))

//VAT -PART 1/2 ............................................

const vatAmountCalculation = function () {

    const vatAmount = priceWithVat - (priceWithVat / 1.21)
    console.log(priceWithVat)
    return [vatAmount]
}
console.log(vatAmountCalculation())



