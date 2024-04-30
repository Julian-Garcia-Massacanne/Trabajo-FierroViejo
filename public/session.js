
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
    debugger;
    let form = document.getElementById('register');
    form.addEventListener('submit', (ev) =>{
        ev.preventDefault();
        let name = document.getElementById('name').value;
        let surname = document.getElementById('surname').value;
        let dni = document.getElementById('dni').value;
        let mail = document.getElementById('mail').value;
        let date = document.getElementById('date').value;
        let password = document.getElementById('password').value;
        
        body = {
            name : name,
            surname : surname,
            dni : dni,
            mail : mail,
            date : date,
            password : password
        }
        console.log(body);

        fetch('/register', {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
              },
            body :JSON.stringify(body)
        })
        .then((res)=>{
            window.location.href="http://localhost:8000/index.html"
        })
    })
}