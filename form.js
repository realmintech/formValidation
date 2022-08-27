   let form = document.getElementsByClassName('form1')[0]
   let title = document.getElementsByClassName('.titles')[0];
   let receive = document.getElementsByTagName('h3')[0];
   let names  =  document.getElementById('name1');
   let email = document.getElementById('email');
   let Pnumber = document.getElementById('number');
   let  fig = document.getElementById('Pnumber');
   let upload = document.getElementById('upload');
   let upload2 = document.getElementById('fileid');
   let user = document.getElementById('user')
   let username =document.getElementById('username')
   let useremail = document.getElementById('useremail')
   let usernumber = document.getElementById('usernumber')
   

form.addEventListener('submit' ,(e)=>{
    e.preventDefault()
    const user = [];
    user[0] =   document.getElementById('username')
    user[1] =   document.getElementById('useremail')
    user[2] =   document.getElementById('usernumber')
    user[3] =   document.getElementById('usertitle')
    document.getElementById('usertitle').innerHTML += master.value
    document.getElementById('username').innerHTML += name1.value;
    document.getElementById('useremail').innerHTML += email.value;
    document.getElementById('usernumber').innerHTML += number.value;
   
    if(names.value == "" || names.value == 0){
        document.getElementById('error').innerHTML = "Your name is required";
        error.style.color =  "#da3400";  
        error.style.fontSize = "20px" 
    }else{
        document.getElementById('error').innerHTML = "Nice nice";
        error.style.color = "green" ;
        error.style.fontSize = "30px" 
    }
    if (email.value.includes('@') && email.value.includes('.') ){
        document.getElementById('title').innerHTML = "Your email is valid";
        titles.style.color = "green"
        
    }else{
        document.getElementById('title').innerHTML = "Input valid email"
    }
    if(!(email.value.includes('@') && email.value.includes('.') )){
        useremail.style.display = "none"
    }
    if(email.value == ""){
        document.getElementById('title').innerHTML= "Input your email"
    };
    if (Pnumber.value == ""){
        document.getElementById('Pnumber').innerHTML = "Fill in the space"
    }
    else if (Pnumber.length >= 12){
        document.getElementById('Pnumber').innerHTML = "Invalid input "
    }
    else if(Pnumber.value.startsWith('080')
    || Pnumber.value.startsWith('081')
    || Pnumber.value.startsWith('090')
    || Pnumber.value.startsWith('091')
    || Pnumber.value.startsWith('070')
    || Pnumber.value.startsWith('+234')) {
        document.getElementById('Pnumber').innerHTML = "Congrat your number is valid"
    }else {
        document.getElementById('Pnumber').innerHTML = "Invalid number"
    };
    if(!(Pnumber.value.startsWith('080')
    || Pnumber.value.startsWith('081')
    || Pnumber.value.startsWith('090')
    || Pnumber.value.startsWith('091')
    || Pnumber.value.startsWith('070')
    || Pnumber.value.startsWith('+234')) && !(Pnumber.length >= 12)){
        usernumber.style.display = "none"
    }
    if(upload.value== ""|| upload.value == 0){
        fileid.innerHTML = "please upload a file"
        fileid.style.color = "red"
    }else if(upload.files[0].size > (1024*1024*1) ){
        fileid.innerHTML ="image greater than 1MB"
        fileid.style.color = "red"
    }else{
        fileid.innerHTML = "Good"
        fileid.style.color = "green"
        fileid.style.fontSize = "30px"
    }
    
})


