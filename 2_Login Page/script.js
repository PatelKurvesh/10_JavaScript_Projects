

function myFunction(){
    debugger;
    const user = document.getElementById("uname").value
    const pwd = document.getElementById("pwd").value

        if(user == "admin" && pwd == "admin"){
            document.write("Login successfully")
        }
        else{
            window.alert("Check Your Credentials")
        }
}
    