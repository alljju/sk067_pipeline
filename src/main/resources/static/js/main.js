document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("searchForm")
  const dateInput = document.getElementById("date")

  // Set default date to today
  const today = new Date().toISOString().split("T")[0]
  dateInput.value = today

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const location = document.getElementById("location").value
    const date = document.getElementById("date").value
    const startTime = document.getElementById("startTime").value
    const endTime = document.getElementById("endTime").value

    const params = new URLSearchParams({
      location: location,
      date: date,
      startTime: startTime,
      endTime: endTime,
    })

    window.location.href = `search.html?${params.toString()}`
  })
})
