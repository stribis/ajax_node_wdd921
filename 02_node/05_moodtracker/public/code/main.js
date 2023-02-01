function setup () {
  // Disable Canvas
  noCanvas()

  // Video Capture
  const video = createCapture()
  video.parent('main-container')
  video.size(320, 240)



let lat, lon, temp, description

if ('geolocation' in navigator) {
  // console.log(navigator)

  navigator.geolocation.getCurrentPosition(async position => {

    try {
      // TODO: error handling 

      lat = position.coords.latitude
      lon = position.coords.longitude

      const response = await fetch(`/weather/${lat},${lon}`)
      const data = await response.json()
      
      // create template
      temp = data.weather.main.temp
      description = data.weather.weather[0].description

      const template = `
      <div class="more-info">
        <div>${temp}</div>
        <div>${description}</div>
      </div>
      `
      const weatherDiv =  document.createElement('div')
      weatherDiv.innerHTML = template
      document.querySelector('#main-container').append(weatherDiv)


    } catch (error) {
      console.error(error)
    }


  })
} else { 
  console.error('Browser does not support Geolocation')
}

}