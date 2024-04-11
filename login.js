

//File Read json

//Function data from html

var formLogin = document.getElementById("login");

formLogin.addEventListener("submit", async (e) => {
  e.preventDefault();

  var username = document.getElementById("lusername").value;
   var password = document.getElementById("lpassword").value;

  console.log(username);
  console.log(password);

  var user = await LoginForm(username, password);

  try{
    var warnning=document.getElementById('warnning-mge');
    warnning.style.color="green";
    warnning.textContent="Login Success !!";
  }catch(error){
    console.error("Login Error",error.message);
  }
});

const  LoginForm = async (username, password)=> {
  var usersData = await fetch("./usersData.json").then((res) => {
    return res.json();
  });
  return new Promise((res, rej) => {
    setTimeout(() => {
        var count=0;
      var user=usersData.users.find((user)=>{
        
      if(user.name === username && user.password === password){
        res(user);
        count++;
      }
        
      });
      if(count==0){
        rej(document.getElementById('warnning-mge').textContent="Invalid username or Password");
      }
    }, 1000);
  });
}
