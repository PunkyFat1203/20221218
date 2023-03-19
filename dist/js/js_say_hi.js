let say = document.querySelector('#say');

say.addEventListener('click', () => {
    let displayName = doument.querySelector('#display-name');
    let name = displayName.value;

    let response = doument.querySelector('#response');

    if (!name) {
        response.classList.remove('active');
    } else {
        response.innerHTML = `Hi, ${name}`;
        response.classList.add('active');
    }
})