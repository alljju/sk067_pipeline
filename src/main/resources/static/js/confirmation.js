document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search)
  const dataParam = urlParams.get("data")

  if (!dataParam) {
    alert("예약 정보를 찾을 수 없습니다.")
    window.location.href = "index.html"
    return
  }

  try {
    const bookingData = JSON.parse(decodeURIComponent(dataParam))

    // Generate booking ID
    const bookingId = `PH${Date.now().toString().slice(-8)}`
    document.getElementById("bookingId").textContent = bookingId

    // Display parking information
    document.getElementById("confirmParkingName").textContent = bookingData.parkingName

    // Display booking date and time
    document.getElementById("confirmDate").textContent = bookingData.date
    document.getElementById("confirmTime").textContent =
      `${bookingData.startTime} - ${bookingData.endTime} (${bookingData.duration}시간)`

    // Display vehicle and user information
    document.getElementById("confirmLicensePlate").textContent = bookingData.licensePlate
    document.getElementById("confirmUserName").textContent = bookingData.userName
    document.getElementById("confirmUserPhone").textContent = bookingData.userPhone

    // Display total amount
    document.getElementById("confirmTotalAmount").textContent = `${bookingData.totalAmount.toLocaleString()}원`
  } catch (error) {
    console.error("Error parsing booking data:", error)
    alert("예약 정보를 불러오는 중 오류가 발생했습니다.")
    window.location.href = "index.html"
  }
})
