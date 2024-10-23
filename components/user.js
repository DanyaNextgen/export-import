function user(item) {
    const div = document.createElement('div')
    const name = document.createElement('p')
    const input = document.createElement('input')
    const age = document.createElement('span')

    name.innerHTML = item.name
    input.innerHTML = item.input
    age.innerHTML = item.age

    div.append(name, input, age)

    div.classList.add('user')
    return div
}

export { user }