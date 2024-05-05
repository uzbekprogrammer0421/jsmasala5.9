const handleChange =(e)=>{
    let text = document.getElementById("text").value
    let name = document.getElementById("name").value
    let result = document.getElementById("result")
    let result_name = document.getElementById("result_name")
    if (name.length == 0) {
        result_name.innerText = "Ismingizni kiriting"
        result_name.classList.add("required")
        result_name.classList.remove("normal")
    }
    else if (name.length > 0) {
        result_name.innerText = "Ismingizni kiritildi"
        result_name.classList.add("normal")
        result_name.classList.remove("required")
    }
    if (text.length === 0) {
        result.innerText = "Parolni kiriting"
        result.classList.add("required")
        result.classList.remove("strong")
        result.classList.remove("normal")
        result.classList.remove("easy")
    }
    else if (text.length <= 4 ) {
        result.innerText = "Kuchsiz parol"
        result.classList.add("easy")
        result.classList.remove("strong")
        result.classList.remove("normal")
        result.classList.remove("required")
    }
    else if (text.length > 4 && text.length <= 8 ) {
        result.innerText = "O'rtacha parol"
        result.classList.add("normal")
        result.classList.remove("strong")
        result.classList.remove("required")
        result.classList.remove("easy")
    }
    else if (text.length > 8) {
        result.innerText = "Kuchli parol"
        result.classList.add("strong")
        result.classList.remove("required")
        result.classList.remove("normal")
        result.classList.remove("easy")
    }
}