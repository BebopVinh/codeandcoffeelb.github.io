document.addEventListener("DOMContentLoaded", function() {
	console.log("Ready!")
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	]
	const url = "https://practical-wilson-757230.netlify.com/index.json"
	fetch(url)
		.then(response => response.json())
		.then(events => renderEvents(events))

	function renderEvents(events) {
		let allEvents = events
			.slice(0, 2)
			.map(e => {
				const date = new Date(e.local_time)
				const month = months[date.getMonth()]
				return /*html*/ `
				<div class="card" >
					<h4 class="card-header">
						${month} ${date.getDate()}
					</h4>
					<div class="card-body">
						<h4 class="card-title">${e.venue_name}</h4>
						<h5 class="card-subtitle mb-2 text-muted">${e.venue_address1}</h5>
						<a class="card-link" href="#">${e.event_url}</a>
					</div>
				</div>`
			})
			.join("")
		let eventDiv = document.querySelector("div.card-deck")
		eventDiv.innerHTML = allEvents
	}
})
