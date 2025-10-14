document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search)
  const parkingId = urlParams.get("id")
  const date = urlParams.get("date")
  const startTime = urlParams.get("startTime")
  const endTime = urlParams.get("endTime")

  if (!parkingId || !date || !startTime || !endTime) {
    window.location.href = "index.html"
    return
  }

  // Declare getParkingLotById function or import it here
  function getParkingLotById(id) {
    // Dummy implementation for illustration
    return {
      id: id,
      name: "Sample Parking Lot",
      address: "Sample Address",
      features: ["Feature 1", "Feature 2"],
      pricePerHour: 1000,
    }
  }

  const parking = getParkingLotById(parkingId)

  if (!parking) {
    alert("주차장을 찾을 수 없습니다.")
    window.location.href = "index.html"
    return
  }

  // Display parking information
  document.getElementById("parkingName").textContent = parking.name
  document.getElementById("parkingAddress").textContent = parking.address

  const featuresList = document.getElementById("featuresList")
  parking.features.forEach((feature) => {
    const badge = document.createElement("span")
    badge.className = "feature-badge"
    badge.textContent = feature
    featuresList.appendChild(badge)
  })

  // Display booking time
  document.getElementById("bookingDate").textContent = date

  const startHour = Number.parseInt(startTime.split(":")[0])
  const endHour = Number.parseInt(endTime.split(":")[0])
  const duration = endHour - startHour

  document.getElementById("bookingTime").textContent = `${startTime} - ${endTime} (${duration}시간)`

  // Calculate price
  const totalAmount = parking.pricePerHour * duration
  document.getElementById("priceDetail").textContent = `${parking.pricePerHour.toLocaleString()}원 × ${duration}시간`
  document.getElementById("totalAmount").textContent = `${totalAmount.toLocaleString()}원`

  // Handle form submission
  const bookingForm = document.getElementById("bookingForm")
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const bookingData = {
      parkingId: parking.id,
      parkingName: parking.name,
      parkingAddress: parking.address,
      date: date,
      startTime: startTime,
      endTime: endTime,
      duration: duration,
      totalAmount: totalAmount,
      licensePlate: document.getElementById("licensePlate").value,
      vehicleType: document.getElementById("vehicleType").value,
      userName: document.getElementById("userName").value,
      userPhone: document.getElementById("userPhone").value,
    }

    const dataParam = encodeURIComponent(JSON.stringify(bookingData))
    window.location.href = `confirmation.html?data=${dataParam}`
  })
})
