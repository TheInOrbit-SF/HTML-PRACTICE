const btn = document.getElementById("btn");
const status = document.getElementById("status");
const fuel = document.getElementById("fuel");
const speed = document.getElementById("speed");
const alt = document.getElementById("altitude");

btn.addEventListener("click",() => {
  status.textContent="Ignition ON!";
  btn.disabled = true;
});
setTimeout(() => {
  status.textContent="Launched";
  for(let i=100,i>=0,i--){
    fuel.textContent="FUEL:"+i+"%";
    setTimeout(() => {
    },1000);
  }
},5000);
alert("JS LOADED!");
