function saveEverything(){    
    var myStorage = window.localStorage;
    var obj_list = myStorage.getItem("orders");
    var objectarray = JSON.parse(obj_list);
    
    var or_number = document.getElementById("ornumber").value;
    var customer_Name = document.getElementById("customerName").value;
    var items = [iitem1, iitem2, iitem3, iitem4]
    var prices = [pprice1, pprice2, pprice3, pprice4]
    var qtys = [qqty1, qqty2, qqty3, qqty4]
    var subtotals = [ssubtotal1, ssubtotal2, ssubtotal3, ssubtotal4]

    orders = []
    order = {
        'ORNumber' : '',
        'name': '',
        'items': [],
        'total': 0
    }
    order['ORNumber'] = or_number
    order['name'] = customer_Name
    for(var i = 0; i < items.length; i++){
        if(subtotals[i].value == ''){
            break
        }
        else{
            for(var ii = 0; ii < foods.length; ii++){
                if(items[i].value == foods[ii]){
                    item = { 
                        'iname': items[i].value,
                        'iprice' : prices[i].value,
                        'iqty': qtys[i].value,
                        'isubtotal' : subtotals[i].value,
                        'imgURL': arrfoods[ii]['strMealThumb'],
                    }
                    order['total'] = parseFloat(order['total']) + parseFloat(item['isubtotal'])
                    order['items'].push(item)
                }
            }
        }
    }
    //CHECK LOCAL STORAGE
    //CREATE NEW KEY 'orders'
    if(objectarray == null){ 
        orders.push(order)
        localStorage.setItem('orders', JSON.stringify(orders))
    }
    //PUSH ORDER IN ORDERS
    else{
        objectarray.push(order) 
        localStorage.setItem('orders', JSON.stringify(objectarray))
    }
    location.reload() 
}