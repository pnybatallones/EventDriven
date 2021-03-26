var price, quantity, subtotal, getSubtotal, total;

function computeSubtotal1(){
    getSubtotal = document.getElementById("ssubtotal1");
    price = document.getElementById("pprice1").value;
    quantity = document.getElementById("qqty1").value;
    subtotal = Number(price) *  Number(quantity);
    getSubtotal.value = subtotal.toFixed(2);
 
};

function computeSubtotal2(){
    getSubtotal = document.getElementById("ssubtotal2");
    price = document.getElementById("pprice2").value;
    quantity = document.getElementById("qqty2").value;
    subtotal = Number(price) *  Number(quantity);
    getSubtotal.value = subtotal.toFixed(2);
};

function computeSubtotal3(){
    getSubtotal = document.getElementById("ssubtotal3");
    price = document.getElementById("pprice3").value;
    quantity = document.getElementById("qqty3").value;
    subtotal = Number(price) *  Number(quantity);
    getSubtotal.value = subtotal.toFixed(2);
};

function computeSubtotal4(){
    getSubtotal = document.getElementById("ssubtotal4");
    price = document.getElementById("pprice4").value;
    quantity = document.getElementById("qqty4").value;
    subtotal = Number(price) *  Number(quantity);
    getSubtotal.value = subtotal.toFixed(2);
};