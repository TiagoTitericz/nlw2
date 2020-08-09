// Procurar o botão
document.querySelector('#add-time')
.addEventListener('click', cloneField)
// Quando clicar no botão

// Executar uma ação
function cloneField() {
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // pegar os campos
    const fields = newFieldContainer.querySelector('input')

    // para cada campo, limpar
    fields.forEach(function(field) {
        field.value = ""
    })

    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}