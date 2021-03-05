input1 = prompt("Month 1-12")
input2 = prompt("Start Day 1-7")

function displayCalendar(element, month, day) {

    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    let mname = ''
    if (month == 1)
        mname = 'JANUARY'
    else if (month == 2)
        mname = 'FEBRUARY'
    else if (month == 3)
        mname = 'MARCH'
    else if (month == 4)
        mname = 'APRIL'
    else if (month == 5)
        mname = 'MAY'
    else if (month == 6)
        mname = 'JUNE'
    else if (month == 7)
        mname = 'JULY'
    else if (month == 8)
        mname = 'AUGUST'
    else if (month == 9)
        mname = 'SEPTEMBER'
    else if (month == 10)
        mname = 'OCTOBER'
    else if (month == 11)
        mname = 'NOVEMBER'
    else if (month == 12)
        mname = 'DECEMBER'
    else {
        mname = "Invalid Input"
    }

    let tMonth = `<table><tr><td colspan = "7" align = "center" id="month" font-style = "italic">${mname}</tr>`

    let tDays = `<tr><th>SUN</th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th></tr>`

    element.innerHTML = tMonth;
    element.innerHTML = tDays;


    let tCalendar = 
    `<table>
        <tr>
            <th colspan = "7" align = "center">
                <h1>${mname}<h1>
            </th>
        </tr>
        <tr>
            <td class="dName">Sun</td>
            <td class="dName">Mon</td>
            <td class="dName">Tue</td>
            <td class="dName">Wed</td>
            <td class="dName">Thu</td>
            <td class="dName">Fri</td>
            <td class="dName">Sat</td>
        </tr>`

    let counterWeek = 0
    let counterDay = 1
    let counter = 1


    if(month == 0 || day == 0){
        element.innerHTML = "<h1>Invalid Input</h1>"
    }else if(month > 12 || day > 7){
        element.innerHTML = "<h1>Invalid Input</h1>"
    }
    else{
        if(days[month-1] == 31){
            if(day >= 6){
                for (let i = 0; i < 42; i++) {
                    if (counterWeek == 0) {
                        tCalendar += '<tr>'
                    }
                    if (counter <= day - 1) {
                        tCalendar += "<td></td>"
                        counter++
                    }
                    else if (counterDay > days[month - 1])
                        tCalendar += "<td></td>"
                    else {
                        if (counterDay <= days[month - 1]) {
                            tCalendar += `<td>${counterDay}</td>`
                            counterDay++
                        }
                        else
                            tCalendar += "<td></td>"
                    }
                    if (counterWeek == 6) {
                        tCalendar += '</tr>'
                        counterWeek = 0
                    }
                    else {
                        counterWeek++
                    }
                }
            }
            else{
                for (let i = 0; i < 35; i++) {
                    if (counterWeek == 0) {
                        tCalendar += '<tr>'
                    }
            
                    if (counter <= day - 1) {
                        tCalendar += "<td></td>"
                        counter++
                    }
                    else if (counterDay > days[month - 1])
                        tCalendar += "<td></td>"
                    else {
                        if (counterDay <= days[month - 1]) {
                            tCalendar += `<td>${counterDay}</td>`
                            counterDay++
                        }
                        else
                            tCalendar += "<td></td>"
                    }
                    if (counterWeek == 6) {
                        tCalendar += '</tr>'
                        counterWeek = 0
                    }
                    else {
                        counterWeek++
                    }
                }
            }   
        }else if(days[month-1] == 28){
            if(day >= 6){
            for (let i = 0; i < 35; i++) {
                if (counterWeek == 0) {
                    tCalendar += '<tr>'
                }
                if (counter <= day - 1) {
                    tCalendar += "<td></td>"
                    counter++
                }
                else if (counterDay > days[month - 1])
                    tCalendar += "<td></td>"
                else {
                    if (counterDay <= days[month - 1]) {
                        tCalendar += `<td>${counterDay}</td>`
                        counterDay++
                    }
                    else
                        tCalendar += "<td></td>"
                }
                if (counterWeek == 6) {
                    tCalendar += '</tr>'
                    counterWeek = 0
                }
                else {
                    counterWeek++
                }
            }
        }else{
            for (let i = 0; i < 28; i++) {
                if (counterWeek == 0) {
                    tCalendar += '<tr>'
                }
                if (counter <= day - 1) {
                    tCalendar += "<td></td>"
                    counter++
                }
                else if (counterDay > days[month - 1])
                    tCalendar += "<td></td>"
                else {
                    if (counterDay <= days[month - 1]) {
                        tCalendar += `<td>${counterDay}</td>`
                        counterDay++
                    }
                    else
                        tCalendar += "<td></td>"
                }
                if (counterWeek == 6) {
                    tCalendar += '</tr>'
                    counterWeek = 0
                }
                else {
                    counterWeek++
                }
            }
        }
        }else{
            if(day >= 6){
                for (let i = 0; i < 35; i++) {
                    if (counterWeek == 0) {
                        tCalendar += '<tr>'
                    }
                    if (counter <= day - 1) {
                        tCalendar += "<td></td>"
                        counter++
                    }
                    else if (counterDay > days[month - 1])
                        tCalendar += "<td></td>"
                    else {
                        if (counterDay <= days[month - 1]) {
                            tCalendar += `<td>${counterDay}</td>`
                            counterDay++
                        }
                        else
                            tCalendar += "<td></td>"
                    }
                    if (counterWeek == 6) {
                        tCalendar += '</tr>'
                        counterWeek = 0
                    }
                    else {
                        counterWeek++
                    }
                }
            }else{
                for (let i = 0; i < 35; i++) {
                    if (counterWeek == 0) {
                        tCalendar += '<tr>'
                    }
                    if (counter <= day - 1) {
                        tCalendar += "<td></td>"
                        counter++
                    }
                    else if (counterDayCDays > days[month - 1])
                        tCalendar += "<td></td>"
                    else {
                        if (counterDay <= days[month - 1]) {
                            tCalendar += `<td>${counterDay}</td>`
                            counterDay++
                        }
                        else
                            tCalendar += "<td></td>"
                    }
            
                    if (counterWeek == 6) {
                        tCalendar += '</tr>'
                        counterWeek = 0
                    }
                    else {
                        counterWeek++
                    }
                }
            }
        }
        tCalendar += '</table>'
        element.innerHTML = tCalendar;
        }
    }

displayCalendar(calendar, input1, input2)

