document.addEventListener("DOMContentLoaded", function () {
   // Handler when the DOM is fully loaded
   console.log("Ready!")
   // async function getEvents() {
   //    let response = await fetch("https://api.meetup.com/code-and-coffee-long-beach/events?&sign=true&photo-host=public&page=20", {
   //       mode: 'no-cors'
   //    })
   //    let events = await response.json()
   //    return events
   // }

   // let events = getEvents()

   let events
   fetch("https://api.meetup.com/code-and-coffee-long-beach/events?&sign=true&photo-host=public&page=20", {
      mode: "no-cors"
   }).then(
      response => {
         // response.json()
         console.log(response)
      }
   )
});