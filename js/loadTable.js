var myStorage = window.localStorage;
var obj_list = myStorage.getItem("orders");
var objectarray = JSON.parse(obj_list);

var loadTable = document.getElementById('tlists')
var tbody = loadTable.firstElementChild 
var object = null
var obj = null

if(objectarray != null){
    for(var i = 0; i < objectarray.length; i++){
        object = objectarray[i]
        obj = Object.getOwnPropertyNames(object)
        var tr = document.createElement('tr')
        var first = true
        for(var ii = 0; ii < obj.length; ii++){
            var td = document.createElement('td')
            td.scope = 'row'
            // #
            if(ii == 0 && first){
                var tdTextNode = document.createTextNode(i + 1)
                td.appendChild(tdTextNode)
                tr.appendChild(td)
                tbody.appendChild(tr)
                ii--
                first = false
            }
            else{
                td.className = 'text-center'
                // ACTION
                if(ii == obj.length - 1){
                    var aView = document.createElement('a')
                    aView.href = ''
                    aView.className = "viewOrder" 
                    aView.setAttribute('data-toggle', 'modal')
                    aView.setAttribute('data-target', '#viewItem')
                    aView.style.backgroundColor = "#00C279"
                    aView.style.color = "white"
                    aView.style.padding = "10px"
                    aView.style.fontSize = "12px"

                    var tdView = document.createTextNode('VIEW')
                    aView.appendChild(tdView)
                    td.appendChild(aView)
                    tr.appendChild(td)
                    tbody.appendChild(tr)  
                }
                // TOTAL
                else if(ii == obj.length - 2){ 
                    var tdTotal = document.createTextNode("$" + objectarray[i][obj[obj.length - 1]])
                    td.appendChild(tdTotal)
                    tr.appendChild(td)
                    tbody.appendChild(tr)                     
                }
                // CUSTOMER NAME
                else if(ii == obj.length - 3){ 
                    var name = objectarray[i][obj[obj.length - 3]]
                    //check if NOT specified
                    if(name == ""){
                        var tdName = document.createTextNode("Not Specified")
                        td.setAttribute("style", "color: orange")
                        td.appendChild(tdName)
                        tr.appendChild(td)
                        tbody.appendChild(tr)   
                    }
                    else{
                        var tdName = document.createTextNode(objectarray[i][obj[obj.length - 3]])
                        td.appendChild(tdName)
                        tr.appendChild(td)
                        tbody.appendChild(tr)   
                    }   
                }
                // ORDER NUMBER
                else{ 
                    var tdONum = document.createTextNode(objectarray[i][obj[ii]])
                    td.appendChild(tdONum)
                    tr.appendChild(td)
                    tbody.appendChild(tr)                    
                }
            }
        }
    }
}