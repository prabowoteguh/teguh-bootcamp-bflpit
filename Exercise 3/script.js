const retriveItem = (data) => {
  document.getElementById("text_name").innerHTML      = data.name
  document.getElementById("text_role").innerHTML      = data.role
  document.getElementById("text_available").innerHTML = data.available
  document.getElementById("text_age").innerHTML       = data.age
  document.getElementById("text_place").innerHTML    = data.place
  document.getElementById("text_exp").innerHTML       = data.exp
  document.getElementById("text_email").innerHTML     = data.email
}

const setItem = () => {
  localStorage.setItem("user_data", JSON.stringify({
    "name": document.getElementById("name").value,
    "role": document.getElementById("role").value,
    "available": document.getElementById("available").value,
    "age": document.getElementById("age").value,
    "place": document.getElementById("place").value,
    "exp": document.getElementById("exp").value,
    "email": document.getElementById("email").value,
  }));
}

const resetForm = () => {
  var elems = document.querySelectorAll(".text-danger");
  elems.forEach(itm => {
    document.getElementById(itm.id).innerHTML = ''
  })
}

// Retrieve
let userData = JSON.parse(localStorage.getItem("user_data"));
retriveItem(userData)

const form       = document.getElementById("formDataPortofolio");
const btnHitung  = document.getElementById("btn_hitung");
// const btnEdit = document.getElementById("btn_edit");

(function () {
  'use strict'
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (!form.checkValidity()) {
      event.stopPropagation()
    }

    form.classList.add('was-validated')
    setItem();
    const userData = JSON.parse(localStorage.getItem("user_data"));
    retriveItem(userData);

    form.data('bootstrapValidator').resetForm();
    
  }, false)
})()

btnHitung.addEventListener('click', () => {
  let a = document.getElementById("num1").value
  let b = document.getElementById("num2").value
  let result = parseInt(a) + parseInt(b)
  alert(`Hasil penjumlahan : ${result}`)
})