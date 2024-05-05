let users = []
const add_user = (e) => {
    e.preventDefault();
    let payload = {
        name : e.target[0].value,
        age : e.target[1].value,
        phone : e.target[2].value,
        address : e.target[3].value,
    }
    users.push(payload)
    let tr = ""
    let count = 0
    for (const item of users) {
        count ++
        tr += "<tr>"+
        "<td>"+ count  + "</td>" + 
        "<td>"+ item.name  + "</td>" + 
        "<td>"+ item.age  + "</td>" + 
        "<td>"+ item.phone  + "</td>" + 
        "<td>"+ item.address  + "</td>" + 
        "</tr>"
    }

    document.getElementById("tbody").innerHTML = tr
}