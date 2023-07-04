const Weather = () => {
    return (
        <>
            <div className="top__container">
                <h1>Weather app</h1>
                <input type="search" name="" id="" />
                <input type="checkbox" checked />
                <span className="slider round"></span>
            </div>

            <div className="container">
                <div className="center__container">
                    <div className="clouds">
                        <img className="image" src="./img/nublado.svg" alt="" />
                        <p className="p__center">26.7°c</p>
                    </div>
                    <div className="wtp__container">
                        <div className="wind">
                            <p>Vientos:</p>
                            <p>150 k/h</p>
                        </div>

                        <div className="temperature">
                            <p>Nubes:</p>
                            <p>150 k/h</p>
                        </div>

                        <div className="pressure">
                            <p>Presión:</p>
                            <p>150 k/h</p>
                        </div>
                    </div>
                    <div className="country">
                            <p>Country:</p>
                            <p>Colombia</p>
                    </div>
                </div>           
            </div>
            <div className="botton__container">
                <button className="button">Cambiar a:</button>
            </div>
        </>
    )
}

export default Weather