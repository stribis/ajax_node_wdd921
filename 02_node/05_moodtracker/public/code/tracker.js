
getData ()
async function getData () {
  const response = await fetch('/api')
  const data = await response.json()

  console.log(data)

  data.forEach(mood => {
    const mood_container = document.createElement('div')
    mood_container.classList.add('mood')
    const template = `
      <img src="${mood.image64}" alt="${mood.mood}">
      <h2>${mood.mood}</h2>
      <ul>
        <li>${mood.temp}</li>
        <li>${mood.description}</li>
      </ul>
      <small>${mood.timestamp}</small>
    `
    mood_container.innerHTML = template
    document.querySelector('.moods').appendChild(mood_container)
  })


}

