const genBtn = document.getElementById("generate"); // document.querySelector("#generate")
const passOutput = document.getElementById("password");

genBtn.addEventListener("click", generatePassword);

function generatePassword() {
    const passwordLength = passwordLengthGenerator();
    const approvedCharSet = approvedCharSetGenerator();
    let password="";
    for(let i=0; i<passwordLength; i++){
        let index=Math.floor(Math.random() * approvedCharSet.length);
        password+=approvedCharSet[index];
    }
    console.log(password);
    passOutput.textContent = password;
}

function passwordLengthGenerator(){
    var pLength = prompt("How many characters do you want in your password between 8 and 128?");
    if(pLength < 8 || pLength > 128 || isNaN(pLength)){
        alert("No. Follow instructions goof!");
        return passwordLengthGenerator();
    } else {
        return pLength;
    }
}

function approvedCharSetGenerator(){
    let approvedCharSet="";
    if(confirm("Do you want to include lower case characters?")){
        approvedCharSet+="qwertyuioplkjhgfdsazxcvbnm"; // "abcdefghijklmnopqrstuvwxyz"
    }
    if(confirm("Do you want to include upper case characters?")){
        approvedCharSet+="QWERTYUIOPLKJHGFDSAZXCVBNM";
    }
    if(confirm("Do you want to include number characters?")){
        approvedCharSet+="0123456789";
    }
    if(confirm("Do you want to include special characters?")){
        approvedCharSet+="!@#$%";
    }
    if(approvedCharSet.length){
        return approvedCharSet;
    } else {
        alert("No. Follow instructions goof!");
        return approvedCharSetGenerator();
    }
}
