let singleton;

setInterval(()=>{
  singleton=require('./Singleton');
  console.log(new singleton()._time);
},1000);
