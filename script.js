<script>
// CHANGE TRAFFIC LIGHT
function changeLight(color) { 

document.querySelectorAll(".light").forEach(light => {
light.classList.remove("active");
}); 

document.getElementById(color).classList.add("active"); 

}
// RESET TRAFFIC LIGHT
function resetLight() { 

document.querySelectorAll(".light").forEach(light => {
light.classList.remove("active");
}); 

}
// DRIVER REGISTRATION
document.getElementById("driverForm")
.addEventListener("submit", function(event) { 

event.preventDefault(); 

const name = document.getElementById("driverName").value;
const car = document.getElementById("carType").value;
const destination = document.getElementById("destination").value;
const direction = document.getElementById("direction").value; 

document.getElementById("message").innerHTML =
"Registration Successful!<br><br>" +
"Driver: " + name + "<br>" +
"Car Type: " + car + "<br>" +
"Destination: " + destination + "<br>" +
"Direction: " + direction; 

this.reset(); 

});
</script>