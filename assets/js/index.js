document.addEventListener("DOMContentLoaded", function() {
	console.log("Ready!")
	const url = "https://practical-wilson-757230.netlify.com/index.json"
	fetch(url)
		.then(response => response.json())
		.then(events => renderEvents(events))

	function renderEvents(events) {
		let allEvents = events
			.slice(0, 2)
			.map(e => {
				return `<div class="events row">
               <p>Time: ${e.local_time}</p>
               <p>Venue: ${e.venue_name}</p>
               <p>Address: ${e.venue_address1}, ${
					e.venue_city
				}, ${e.venue_state.toUpperCase()} ${e.venue_zip}</p>
               <p>URL: ${e.event_url}</p>
            </div>
            <br/>`
			})
			.join("")
		let eventDiv = document.querySelector("div.meetup-api")
		eventDiv.innerHTML = allEvents
	}
})
