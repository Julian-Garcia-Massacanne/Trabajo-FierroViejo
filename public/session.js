
/*
function login(){
    console.log("Hola Iniciar Sesion")
    let form = document.getElementById('login');
    console.log(form.getElementById('dni').value);
    form.addEventListener('click', (ev)=>{
        ev.preventDefault();
        let dni = document.getElementById("dni").value;
            let password = document.getElementById("password").value;
            fetch('http://localhost:8000/', {
                method: "get"
            })
            .then((res)=>res.json())
            .then((res)=>{
                window.location.href="http://localhost:8000/register.html"
            }))
} */

function register(){
    let form = document.getElementById('register');
    form.addEventListener('submit', (ev) =>{
        ev.preventDefault();
        fetch('/register', {
            method: "post"
        })
        .then((res)=>{
            res.send("Holanda")
            //window.location.href="http://localhost:8000/index.html"
        })
    })
}