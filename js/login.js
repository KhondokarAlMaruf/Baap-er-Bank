document.getElementById('btn-submit').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    console.log(email);
    const userPass = document.getElementById('user-pass');
    const pass = userPass.value;
    console.log(pass);
    
    if(email ==='maruf@gmail.com' && pass === 'maruf'){
            window.location.href ='bank.html';
        }
        else{
            alert('please enter a valid user and password')
        }


})