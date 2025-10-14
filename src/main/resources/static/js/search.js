document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search)
  const location = urlParams.get("location") || "강남역"
  const date = urlParams.get("date") || ""
  const startTime = urlParams.get("startTime") || ""
  const endTime = urlParams.get("endTime") || ""

  // Update header
  document.getElementById("locationTitle").textContent = `${location} 주차장`
  document.getElementById("searchInfo").textContent = `${date} ${startTime} - ${endTime}`

  // Display parking lots
  const parkingList = document.getElementById("parkingList")
  const mapMarkers = document.getElementById("mapMarkers")
  const results = window.searchParkingLots(location) // Assuming searchParkingLots is a global function

  document.getElementById("resultCount").textContent = `${results.length}개의 주차장`

  results.forEach((parking, index) => {
    // Create parking card
    const card = createParkingCard(parking, { date, startTime, endTime })
    parkingList.appendChild(card)

    // Create map marker
    const marker = createMapMarker(parking, index)
    mapMarkers.appendChild(marker)
  })
})

function createParkingCard(parking, searchParams) {
  const card = document.createElement("div")
  card.className = "parking-card"

  const bookingUrl = `booking.html?id=${parking.id}&date=${searchParams.date}&startTime=${searchParams.startTime}&endTime=${searchParams.endTime}`

  card.innerHTML = `
        <div class="parking-card-header">
            <div class="parking-card-info">
                <h3 class="parking-name">${parking.name}</h3>
                <div class="parking-address">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>${parking.address}</span>
                </div>
                <div class="parking-distance">${parking.distance}km</div>
            </div>
            <div class="parking-rating">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span class="rating-value">${parking.rating}</span>
                <span class="rating-count">(${parking.reviewCount})</span>
            </div>
        </div>
        
        <div class="features-list">
            ${parking.features.map((feature) => `<span class="feature-badge">${feature}</span>`).join("")}
        </div>
        
        <div class="parking-card-footer">
            <div class="parking-details">
                <div class="detail-row hours">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>${parking.operatingHours}</span>
                </div>
                <div class="detail-row spots">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                        <polygon points="12 15 17 21 7 21 12 15"></polygon>
                    </svg>
                    <span>${parking.availableSpots}자리 가능 / ${parking.totalSpots}</span>
                </div>
            </div>
            <div class="parking-price">
                <div class="price-amount">${parking.pricePerHour.toLocaleString()}원</div>
                <div class="price-unit">시간당</div>
            </div>
        </div>
        
        <a href="${bookingUrl}" class="btn btn-primary btn-large" style="margin-top: 1rem;">예약하기</a>
    `

  return card
}

function createMapMarker(parking, index) {
  const marker = document.createElement("div")
  marker.className = "map-marker"
  marker.textContent = index + 1

  // Position markers in a grid pattern for visual representation
  const row = Math.floor(index / 3)
  const col = index % 3
  marker.style.left = `${20 + col * 30}%`
  marker.style.top = `${20 + row * 30}%`

  marker.addEventListener("click", () => {
    document.querySelectorAll(".map-marker").forEach((m) => m.classList.remove("selected"))
    marker.classList.add("selected")
  })

  return marker
}
