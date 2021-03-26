var myStorage = window.localStorage;
var obj_list = myStorage.getItem("orders");
var objectarray = JSON.parse(obj_list);

var viewOrders = document.querySelectorAll('.viewOrder')
var viewItem = document.getElementById('viewItem')
var viewItemBody = document.getElementById('viewItemBody')
var orderNum;

viewOrders.forEach(function(viewOrder){
    viewOrder.addEventListener('click', function(e){
        orderNum = '';
        orderNum = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerText; 
        for(var i = 0; i < objectarray.length; i++){
            if(objectarray[i]['ORNumber'] == orderNum){
                ORNumberView.value = objectarray[i]['ORNumber']
                customerNameView.value = objectarray[i]['name']
                for(var ii = 0; ii < objectarray[i]['items'].length; ii++){
                    //CARD CONTAINER
                    var card = document.createElement("div")
                    card.className = "card"
                    card.style.width = "11.5rem"
                    card.style.height = "25rem"
                    //ITEM IMAGE
                    var image = document.createElement("img")
                    image.src = objectarray[i]['items'][ii]['imgURL']
                    image.style.width = "11.4rem"
                    //ITEM NAME
                    var cardBody = document.createElement("div")
                    cardBody.className = "card-body"
                    var cardTitle = document.createElement("h6")
                    cardTitle.className = "card-title"
                    var cardTxtNode = document.createTextNode(objectarray[i]['items'][ii]['iname'])
                    cardTitle.appendChild(cardTxtNode)
                    //ITEM PRICE
                    var cardPrice = document.createElement("p")
                    cardPrice.className = "card-text"
                    var priceTxtNode = document.createTextNode("Price: " + objectarray[i]['items'][ii]['iprice'])
                    cardPrice.appendChild(priceTxtNode)
                    //ITEM QUANTITY
                    var cardQty = document.createElement("p")
                    cardQty.className = "card-text"
                    var qtyTxtNode = document.createTextNode("Quantity: " + objectarray[i]['items'][ii]['iqty'])
                    cardQty.appendChild(qtyTxtNode)

                    //APPEND TO DISPLAY CONTENT IN VIEW MODAL
                    cardBody.appendChild(cardTitle)
                    cardBody.appendChild(cardPrice)
                    cardBody.appendChild(cardQty)
                    card.appendChild(image)
                    card.appendChild(cardBody)
                    viewItemBody.appendChild(card)
                }
            }
        }
    })
})

function clearViewModal(){
    viewItemBody.innerText = ''
}
