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
				return `<div class="events row"> ${e.local_time}</div>`
			})
			.join("")
		let eventDiv = document.getElementById("meetup-api")
		eventDiv.innerHTML = allEvents
	}
})
