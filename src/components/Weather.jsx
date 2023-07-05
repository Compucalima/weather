import axios from "axios"
import { useState, useEffect } from "react"
import Wait from "./Wait"

const Weather = () => {

    const [ data, setData ] = useState({})
    const [countrys, setCountrys] = useState('')
    const [onLoad, setOnLoad] = useState(true)
    const [temperature, setTemperature] = useState(true)

    const changeTemp = () => setTemperature(!temperature)

    useEffect(()=> {

        navigator.geolocation.getCurrentPosition(function(Position){
            const Latitude = Position.coords?.latitude
            const Longitude = Position.coords?.longitude
            const weaterUrl1= `https://api.openweathermap.org/data/2.5/weather?lat=${Latitude}&lon=${Longitude}&appid=55499aeb43c1f14e789bc948de62d7f3&lang=es&units=metric`
            
            console.log(Latitude, Longitude);
            axios.get(weaterUrl1).then((resp) =>{
                setData(resp.data) 
                setOnLoad(false)
            })

        },function(error){
            console.error(error);
        },{enableHighAccuracy: true})

    },[])
   
    const weaterUrl = `https://api.openweathermap.org/data/2.5/weather?q=${countrys}&appid=55499aeb43c1f14e789bc948de62d7f3&lang=es&units=metric`
    
    const searchCountry = (event) => {
        if(event.key === 'Enter'){
            axios.get(weaterUrl).then((resp) =>{
                setData(resp.data)
                console.error(resp.data.weather[0].icon);
            })
        }
    }

    return (
        <>
            <section className='todo'>{ onLoad && <Wait /> }

                <div className="top__container">
                    <h1 className="title__app">Weather app</h1>
                    <input value={countrys}  onChange={event => setCountrys(event.target.value)} placeholder="Ingrese país a mostrar" onKeyPress={searchCountry} type="text" name="" id="" className="search__country" />
                </div>

                <div className="container">
                    <div className="center__container">
                        <div className="clouds">
                        {data.weather && data.weather.length > 0 && (<img className="image" src={`./img/${data.weather[0]?.icon}.svg`} alt="" />)}                        
                            <p className="p__center">{temperature ? Math.round(data.main.temp) + "°C" : Math.round((data.main.temp * 9/5) + 32) + "°F" } </p>
                        </div>
                        <div className="wtp__container">
                            <div className="wind">
                                <p>Vientos:</p>
                                <p>{data.wind?.speed} k/h</p>
                            </div>
                            <div className="clouds__now">
                                <p>Nubes:</p>
                                {data.weather && data.weather.length > 0 && (<p>{data.weather[0]?.description}</p>)}
                            </div>
                            <div className="pressure">
                                <p>Presión:</p>
                                <p>{data.main?.pressure}</p>
                            </div>
                        </div>
                        <div className="country">
                                <p>Country:</p>
                                <p>{data.name}</p>
                        </div>
                    </div>           
                </div>
                <div className="botton__container">
                    <button className="button" onClick={changeTemp}>Celsius/Farenheit</button>
                </div>

            </section>
        </>
    )
}

export default Weather