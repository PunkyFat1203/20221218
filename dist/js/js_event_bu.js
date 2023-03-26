// let addBtn = document.querySelector('#add-btn');

// addBtn.addEventListener('click', () => {
//     let menu = document.querySelector('#menu');
//     let li = document.createElement('li');
//     li.innerHTML = '5';
//     menu.appendChild(li);
//     // bindLi();
// })

// let menu = document.querySelector('#menu');

// menu.addEventListener('click', (e) => {
//     let target = e.target;
//     let tag = target.tagName;
//     if (tag == 'LI') {
//         console.log(target.innerHTML);
//     }
// })

let lis = document.querySelectorAll('#menu li')

lis.forEach(function (li) {
    li.addEventListener('click', function (e) {
        console.log(li.innerHTML)
    })
})

let addBtn = document.querySelector('#add-btn')

addBtn.addEventListener('click', function (e) {
    let menu = document.querySelector('#menu')
    let li = document.createElement('li')
    li.innerHTML = '5'

    menu.appendChild(li)
})
