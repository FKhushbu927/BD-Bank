document.getElementById('btn-submit').addEventListener('click', function(){

    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //get the  password
    // set id on the html element
    //get the value from the 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
 
     //verify email and password
     if(email === 'abcd123@gmail.com' && password === 'secret-pass'){
             window.location.href = 'bank.html';
     }
     else{
         alert('invalid user ');
     }

})