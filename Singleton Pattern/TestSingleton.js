let singleton;

setInterval(()=>{
  singleton=require('./Singleton');
  console.log(new singleton()._time);// Logs same time everytime 
},1000);
