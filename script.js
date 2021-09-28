class FormController {
    constructor(validations) {
        this.validations = validations
    }
    run() {
        this.validations.validate()
    }
}

class SubmitFormEvents {
    constructor(formFields) {
        this.form = document.querySelector('#form')
        this.formFields = formFields
    }
    validate() {
        this.form.onsubmit = (event)=>{
            event.preventDefault()
            this.formFields.validate()
        }
    }
}

class FormElementsValidate {
    constructor(nameController, ageController, sexController) {
        this.nameController = nameController
        this.ageController = ageController
        this.sexController = sexController
    }
    validate() {
        this.nameController.run()
        this.ageController.run()
        this.sexController.run()
    }
}

class NameController {
    constructor(alertNameController) {
        this.alertNameController = alertNameController
        this.name = document.querySelector('#name')
    }
    run() {
        this.name.value.length < 4 ? this.alertNameController.show('Nome muito pequeno. Por favor escreva um nome maior') : this.alertNameController.hidden()
    }
}

class NameAlertController{
    constructor(){
        this.name = document.querySelector('#nameAlert')
    }

    show(response){
        this.name.classList.remove('hidden')
        this.name.innerHTML = response
    }

    hidden(){
        this.name.classList.add('hidden')
        this.name.innerHTML = ''
    }
}

class AgeController {
    constructor(ageAlertController) {
        this.ageAlertController = ageAlertController
        this.age = document.querySelector('#age')
    }
    run() {
        this.age.value < 18 ? this.ageAlertController.show('Idade mínima é 18 anos') : this.ageAlertController.hidden()
    }
}

class AgeAlertController{
    constructor(){
        this.age = document.querySelector('#ageAlert')
    }

    show(response){
        this.age.classList.remove('hidden')
        this.age.innerHTML = response
    }

    hidden(){
        this.age.classList.add('hidden')
        this.age.innerHTML = ''
    }
}

class SexController {
    constructor(sexAlertController) {
        this.sexAlertController = sexAlertController
        this.sex = document.querySelector('#sex')
    }
    run() {
        this.sex.checked !== true ? this.sexAlertController.show('Sexo requerido masculino') : this.sexAlertController.hidden()
    }
}

class SexAlertController{
    constructor(){
        this.sex = document.querySelector('#sexAlert')
    }

    show(response){
        this.sex.classList.remove('hidden')
        this.sex.innerHTML = response
    }

    hidden(){
        this.sex.classList.add('hidden')
        this.sex.innerHTML = ''
    }
}

const nameAlert = new NameAlertController()
const nameField = new NameController(nameAlert)

const ageAlert = new AgeAlertController()
const ageField = new AgeController(ageAlert)

const sexAlert = new SexAlertController()
const sexField = new SexController(sexAlert)

const formFields = new FormElementsValidate(nameField, ageField, sexField)

const formEvents = new SubmitFormEvents(formFields)

const controller = new FormController(formEvents)
controller.run()