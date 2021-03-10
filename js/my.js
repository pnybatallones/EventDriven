var getTax, getTotal, getAmountPaid, getChange;
getTax = document.getElementById("tax");
getTotal = document.getElementById("total");
getAmountPaid = document.getElementById("amountpaid");
getChange = document.getElementById("change");

var subtotal, tax, total, amountpaid, change, pay;

function jsFunction(){

   
    subtotal = document.getElementById("subtotal").value;
    tax = Number(0.12 * subtotal);
    total =  Number(subtotal) + Number(tax);
    amountpaid = Number(total);  
    change = Number(amountpaid - total);
    pay = document.getElementById("pay");

    
    if(100 <= subtotal && subtotal <= 10000){
        getTax.value = tax.toFixed(2);
        getTotal.value = total.toFixed(2);
        getAmountPaid.disabled = false;
        getAmountPaid.value = amountpaid.toFixed(2);
        getAmountPaid.min = total.toFixed(2);
        document.getElementById("change").value = change.toFixed(2);
        pay.style.backgroundColor = "green";
    }
    else{
        getTax.value = "";
        getTotal.value = "";
        getAmountPaid.disabled = true;
        getAmountPaid.value = "";
        getChange.value = "";
        pay.style.backgroundColor = "#800000";

    }
};

function displayChange(){
    
    amountpaid = document.getElementById("amountpaid").value;
    total = document.getElementById("total").value;

    change = Number(amountpaid - total);

    getChange.value = change.toFixed(2);

    if(document.getElementById("change").value < 0)
        pay.style.backgroundColor = "#800000";
    else
        pay.style.backgroundColor = "green";
}
