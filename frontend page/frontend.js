//For Image
const img = document.querySelectorAll('.image');


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
        
    })
    console.log(entries);
})

observer.observe(img[0]);

//For bio

const bio = document.querySelectorAll('.bio');


const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        if (entry.isIntersecting) observer1.unobserve(entry.target)
        
    })
    console.log(entries);
})

observer.observe(bio[0]);

//For Innov8 Image
const innov8Image = document.querySelectorAll('.innov8_image');


const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        // if (entry.isIntersecting) observer2.unobserve(entry.target)
        
    })
    console.log(entries);
})

observer.observe(innov8Image[0]);

//For Innov8 bio
const innov8Imagebio = document.querySelectorAll('.innov8_bio');


const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        // if (entry.isIntersecting) observer2.unobserve(entry.target)
        
    })
    console.log(entries);
})

observer.observe(innov8Imagebio[0]);

//For codecademy image
const codecademyimg = document.querySelectorAll('.codecademy_img');


const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        if (entry.isIntersecting) observer4.unobserve(entry.target)
        
    })
    console.log(entries);
})

observer4.observe(codecademyimg[0]);

//For codecademy bio
const codecademybio = document.querySelectorAll('.codecademy_bio');


const observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        if (entry.isIntersecting) observer5.unobserve(entry.target)
        
    })
    console.log(entries);
})

observer5.observe(codecademybio[0]);

// Form validation

let submit = document.getElementById('submit');

submit.addEventListener('click', validation);

submit.addEventListener('click', validateEmail)

function validation(e) {
    let yourName = document.getElementById('name');
    if (yourName.value == '') {
        yourName.style.border = '2px solid red';
        alert('Please fill in your name!');
        return false;
    }
    let email = document.getElementById('email');
    if (email.value == '') {
        alert('Please fill in your email')
        return false;
    }
    let message = document.getElementById('message');
    if (message.value == '') {
        alert('Please state a valid message.')
        return false;
    }
}

function validateEmail(e) {
    let emailID = document.getElementById('email').value;
    atpos = emailID.indexof('@');
    dotpos = emailID.indexof('.');

    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Please enter correct email ID");
        return false
    }
}

let menu = document.getElementById('menubar');

let nav = document.querySelector('nav')
let open  = false;

menu.addEventListener('click', dropDown);

function dropDown() {
    open?open=false:open=true;
    open?nav.style.display = 'flex':nav.style.display = 'none'
}

// menu.addEventListener('click', close)

// function close() {
//     if (nav.style.display = 'flex') {
//         nav.style.display = 'none'
//         return
//     }
// }

