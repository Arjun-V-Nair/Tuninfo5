
function adduser() {
    user_name=document.getElementById("user_name").value;
    if(user_name == "")
    {
        alert('Display Name input is empty!');
    }
    else
   localStorage.setItem("user_name",user_name);
    window.location="ti.html";
}