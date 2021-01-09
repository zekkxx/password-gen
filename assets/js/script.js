const genBtn = document.getElementById("generate"); // document.querySelector("#generate")
const passOutput = document.getElementById("password");

// console.log("Script is connected!");

genBtn.addEventListener("click", function(){
    const passwordLength = prompt("How many characters do you want in your password between 8 and 128?");
    console.log(passwordLength);
    const lowerChar = confirm("Do you want to include lower case characters?");
    const lowerCharSet = "qwertyuioplkjhgfdsazxcvbnm"; // "abcdefghijklmnopqrstuvwxyz"
    const upperChar = confirm("Do you want to include upper case characters?");
    const upperCharSet = "QWERTYUIOPLKJHGFDSAZXCVBNM";
    const numChar = confirm("Do you want to include number characters?");
    const numCharSet = "0123456789";
    const specialChar = confirm("Do you want to include special characters?");
    const specialCharSet = "!@#$%";
    let approvedCharSet="";
    if(lowerChar){
        approvedCharSet+=lowerCharSet
    }
    if(upperChar){
        approvedCharSet+=upperCharSet
    }
    if(numChar){
        approvedCharSet+=numCharSet
    }
    if(specialChar){
        approvedCharSet+=specialCharSet
    }
    let password="";
    for(let i=0; i<passwordLength; i++){
        let index=Math.floor(Math.random() * approvedCharSet.length);
        password+=approvedCharSet[index];
    }
    console.log(password);
    passOutput.textContent = password;
})