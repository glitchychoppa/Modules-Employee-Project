import { UI } from "./ui"
import { RequestClass } from "./data"

const update = document.getElementById('update')
const nameinput = document.getElementById('name')
const departmentinput = document.getElementById('department')
const salaryinput = document.getElementById('salary')
const form = document.getElementById('employee-form')
const personlist = document.getElementById('employees')
const updatee = document.getElementById('update-employee')
const deletee = document.getElementById('delete-employee')


const ui = new UI()
const Request = new RequestClass('http://localhost:3000/json-server') // URL API SERVER // NPM json-server

function StartEventListeners() {
    form.addEventListener('submit', GetData)
    document.addEventListener('DOMContentLoaded', LoadedAllPerson)  
    personlist.addEventListener('click', PersonList)

}

StartEventListeners()

function GetData(e) {

    
    if (nameinput.value === '' || departmentinput === '' || salaryinput.value === '') {
        ui.Alert('danger', 'Bütün alanları doldurunuz')
    } else {
        Request.Post({name: nameinput.value.trim(), department: department.value.trim(), salary: salaryinput.value.trim()}).then(result => {
            ui.AddPerson(result)
        })
        ui.Alert('success', 'Başarılı bir şekilde eklendi')
    }
    ui.ClearInputs()
    e.preventDefault()
}


function LoadedAllPerson() {
    Request.Get().then(data => {
        data.forEach(function (result) {
            personlist.innerHTML += `<tr>
                                            
            <td>${result.name}</td>
            <td>${result.department}</td>
            <td>${result.salary}</td>
            <td>${result.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr>`
        }) 
    })
}

function PersonList(e) {

    const element = e.target
    if (element.id === 'update-employee') {
        UpdatePerson(e.target)
    } 
    if (element.id === 'delete-employee') {
        DeletePerson(e.target)
    }
}

function UpdatePerson(data) {
    const tr = data.parentElement.parentElement
    const id = tr.children[3].textContent
    update.style = 'display: block'
    nameinput.value = tr.children[0].textContent
    salaryinput.value = tr.children[2].textContent
    departmentinput.value = tr.children[1].textContent 
    

    update.addEventListener('click', function() {
        if (nameinput.value === '' || departmentinput === '' || salaryinput.value === '') {
            ui.Alert('danger', 'Bütün alanları doldurunuz')
        } else {
            Request.Put(id, {name: nameinput.value.trim(), salary: salaryinput.value.trim(), department: departmentinput.value.trim()}).then(result => {
                ui.UpdatePerson(tr, result)
            })
            ui.Alert('success', 'Başarılı bir şekilde eklendi')
            update.style = 'display: none'
            ui.ClearInputs()
        }
    })
}

function DeletePerson(data) {
    const id = data.parentElement.previousElementSibling.previousElementSibling.textContent
    Request.Delete(id).then(result => { 
        ui.DeletePerson(data.parentElement.parentElement)
    })
}