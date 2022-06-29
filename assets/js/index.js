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
      <br>
      <div class="like">
                <i id="thumbsUp" class="fa fa-thumbs-o-up" aria-hidden="true"> Attending</i>
                <i id="thumbsDown" class="fa fa-thumbs-o-down" aria-hidden="true"> Not Interested</i>
              </div>
      </div>
      `
      
      eventHandler.innerHTML += eventsData
      
      let attend = document.querySelector('.fa-thumbs-o-up');
      attend.addEventListener('click', (event) => {
        attend.style.color = 'orange'
        notInterested.style.color = 'white'
        alert ('Looking forward to seeing you there!')

      })

      let notInterested = document.querySelector('.fa-thumbs-o-down');
      notInterested.addEventListener('click', (event) => {
        notInterested.style.color = 'orange'
        alert ('Shucks! Sure hope to see you next time!')
        attend.style.color = 'white'
      })
      
      //adding like functionality
      // const like = 10;
      
      // function like(){
        //     likeCount++;
        // }
        
        // document.querySelector("#like")
        // like.addEventListener("click", (e) => {
          //   const liker = document.getElementById("like")
          
          //   like.style.color = "blue"
          //   liker.innerText = '${eventCard.likes}' + 1
          
          // })
          
          // const like = document.querySelector("#like")
          // like.addEventListener('click', (e) => {
            //   e.preventDefault()
            //   console.log("liker")
            //   like.getElementsByClassName.color = 'red'
            // })
          }
          
          // let attend = document.getElementById('thumbsUp');
          // attend.addEventListener('click', (event) => {
          //   alert ('Looking forward to seeing you there!')
          // })
          
          
          const newsletter = document.getElementById('footer-email-btn');
          newsletter.addEventListener('click', (event) => {
            alert ('Thank you for subscribing to our newsletter!')
    `${footer-email}`.innerHTML.reset()
  })
  
  getEvents()

})

// //GET QUOTE
// const quote = document.getElementById('quotation');
// quote.addEventListener('click', (event) => {
// alert (Math.floor((Math.random() * 2500) + 1000))

