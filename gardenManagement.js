const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

if (temperature > 80) {
  console.log("Watering on");
} else {
  console.log("Watering off");
}

// if timeOfDay equals night, or evening, the conosle will log "Lights on"
if (timeOfDay === "night" || timeOfDay === "evening") {
  console.log("Lights On");
  // else the console will log "Lights off"
} else {
  console.log("Lights off");
}

while (soilMoisture < 40) {
  soilMoisture = soilMoisture + 5;
  console.log(soilMoisture);
}
