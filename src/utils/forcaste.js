const request=require('request')
const forecast=(latitude,longitude,callback)=>{
  const url='http://api.weatherstack.com/current?access_key=b86161c795aa439c9b928e3496ed9ea5&query='+latitude+','+longitude+'&unit=f'
  request({url,json:true},(error,{body})=>{
       if(error){
         callback('unable to connect to weather service!',undefined)
       }
       else if(body.error){
         callback('unable to find location',+undefined)
       }
       else{
        callback(undefined,body.current.weather_descriptions[0] + ' It is currently ' +
        body.current.temperature + ' degrees out. it feel like ' +
        body.current.feelslike + ' degree out')
       }
       
  }) 
}
module.exports=forecast