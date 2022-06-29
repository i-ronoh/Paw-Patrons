document.addEventListener('DOMContentLoaded', () => {
  // const projectUrl = "https://i-ronoh.github.io/dog-events-api/db.json";
  const projectUrl = "http://localhost:3000/events"

// CONTAINERS
let eventHandler = document.getElementById("eventHandler")

  //Get Events
  function getEvents () {
    let reqOptions = {
      method: 'GET'
    }

    fetch (projectUrl, reqOptions)
    .then ((response) => response.json())
    .then (results => {
      let eventsData = ""
      results.forEach(eventItem => {
        displayEvents(eventItem)
        // console.log (eventItem)
  })
  // .catch((err)=>
  //   console.log(err))
  })
  
  }

  // Display Event Card
  function displayEvents(eventCard) {
    let eventsData =  
    `
    <div class="event-data">
    <img src="${eventCard.image}" width="400" height="500" alt="eventImg">
      <h3>${eventCard.name}</p>
      <h4>Location: ${eventCard.location}</p>
      <h4>Date: ${eventCard.date}</p>
      <h4>Cover Charge: ${eventCard.entry}</p>
      <span ><a href="" id="like">&hearts; likes</a></span>

    </div>
    `
    eventHandler.innerHTML += eventsData

  }

  const newsletter = document.getElementById('footer-email-btn');
  newsletter.addEventListener('click', (event) => {
    alert ('Thank you for subscribing to our newsletter!')
  })



  getEvents()
})
    

