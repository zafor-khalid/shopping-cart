//plus minus btn
document.getElementById("plusBtn").addEventListener('click', function () {
    let value = parseFloat(document.getElementById('quantity').value);
    let price = 1200;
    return document.getElementById("quantity").value = ++value,
        document.getElementById("iPhonePrice").innerText =
        parseFloat(document.getElementById("iPhonePrice").innerText) + price,
        pricing();
})
document.getElementById("minusBtn").addEventListener('click', function () {
    let value = parseFloat(document.getElementById('quantity').value);
    let price = 1200;
    if (value > 1)
        return document.getElementById("quantity").value = --value,
            document.getElementById("iPhonePrice").innerText =
            parseFloat(document.getElementById("iPhonePrice").innerText) - price,
            pricing();
    else
        return value, pricing();
})

document.getElementById("plusBtn1").addEventListener('click', function () {
    let value = parseFloat(document.getElementById('quantity1').value);
    let price = 200;
    return document.getElementById("quantity1").value = ++value,
        document.getElementById("iPhonePrice1").innerText =
        parseFloat(document.getElementById("iPhonePrice1").innerText) + price,
        pricing();
})
document.getElementById("minusBtn1").addEventListener('click', function () {
    let value = parseFloat(document.getElementById('quantity1').value);
    let price = 200;
    if (value > 1)
        return document.getElementById("quantity1").value = --value,
            document.getElementById("iPhonePrice1").innerText =
            parseFloat(document.getElementById("iPhonePrice1").innerText) - price,
            pricing();
    else
        return value, pricing();
})


//total price
function pricing(){
    let subtotal = parseFloat(document.getElementById("iPhonePrice").innerText) +
    parseFloat(document.getElementById("iPhonePrice1").innerText);

document.getElementById("subTotal").innerText = subtotal;
let tax = document.getElementById("tax").innerText = subtotal / 100 * 5;
document.getElementById("tax").innerText = tax;

let total = subtotal + tax;
document.getElementById("total").innerText = total;
}

//remove item
document.getElementById("removeItem").addEventListener("click", function(){
    document.getElementById("iPhonePrice").innerText = 0;
    pricing();
    document.getElementById("item").style.display = "none";
})
document.getElementById("removeItem1").addEventListener("click", function(){
    document.getElementById("iPhonePrice1").innerText = 0;
    pricing();
    document.getElementById("item1").style.display = "none";
})