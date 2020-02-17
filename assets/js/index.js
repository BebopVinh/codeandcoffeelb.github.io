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
				<div class="card mb-3" style="max-width: 540px;">
					<div class="row no-gutters">
						<div class="col-md-4">
							<p class="">${month}</p>
							<p class="">${date.getDate()}</p>	
						</div>
						<div class="col-md-8">
							<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
							</div>
						</div>
					</div>
				</div>`
			})
			.join("")
		let eventDiv = document.querySelector("div.meetup-api")
		eventDiv.innerHTML = allEvents
	}
})
