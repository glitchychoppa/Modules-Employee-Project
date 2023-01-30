export class UI {
    Alert(color, message) {
        const form = document.getElementById('employee-form')
        const div = document.createElement('div')
        div.className = `alert alert-${color}`
        div.textContent = message
        div.style = 'margin-top: 15px;'
        form.appendChild(div)

        setTimeout(function() {
            div.remove()
        }, 3500)
    }

    AddPerson(data) {
        const tr = document.createElement('tr')
        const persons = document.getElementById('employees')
        tr.innerHTML = `                     
        <td>${data.name}</td>
        <td>${data.department}</td>
        <td>${data.salary}</td>
        <td>${data.id}</td>
        <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
        <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>` 
        persons.appendChild(tr)
    }

    UpdatePerson(data, result) {
        console.log(data)
        data.innerHTML = `<tr>
        <td>${result.name}</td>
        <td>${result.department}</td>
        <td>${result.salary}</td>
        <td>${result.id}</td>
        <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
        <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td><tr>`
    }

    DeletePerson(data) {
        data.remove()
    }

    ClearInputs() {
        const nameinput = document.getElementById('name')
        const departmentinput = document.getElementById('department')
        const salaryinput = document.getElementById('salary')

        nameinput.value = ''
        departmentinput.value = ''
        salaryinput.value = ''
    }
}


