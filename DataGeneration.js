const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user:c%40lyPs0@sit314.lfsylsi.mongodb.net/?retryWrites=true&w=majority')
const Sensor = require('./model/schema'); 

var sensor_amount = 10

const sensordata = [];

   for (let i = 0; i < sensor_amount; i++)
   {
    sensordata.push(
        {id: i,
        name: "Sensor " + i,
        light_intensity: 0,
        temperature: 0,
        occupancy: true,
        switch_status: true}
    )
   }  

   const light_low = 0;
   const light_high = 100;
   function light_reading()
   {
    return Math.floor(Math.random() * (light_high - light_low) + light_low); 
   }
   
   for (let i = 0; i < sensor_amount; i++)
   {
    sensordata[i].light_intensity = light_reading();
   }

   const temp_low = 10;
   const temp_high = 40;
   function temp_reading()
   {
    return Math.floor(Math.random() * (temp_high - temp_low) + temp_low);
   } 
   
   for (let i = 0; i < sensor_amount; i++)
   {
    sensordata[i].temperature = temp_reading();
   }

   function randBool()
   {
    return Math.random() > 0.5 ? true : false;
   }

   for (let i = 0; i < sensor_amount; i++)
   {
    sensordata[i].occupancy = randBool();
    sensordata[i].switch_status = randBool();
   }

   for (let i = 0; i < sensor_amount; i++)
   {
    const newSensor = new Sensor({
        id: sensordata[i].id,
        name: sensordata[i].name,
        light_intensity: sensordata[i].light_intensity,
        temperature: sensordata[i].temperature,
        occupancy: sensordata[i].occupancy,
        switch_status: sensordata[i].switch_status
        });

        newSensor.save().then(doc => {
            console.log(doc);
            })
   }


   
   
