const searchInput = document.querySelector("data-search")

let games = [ ]

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase
})

fetch("./gamelist")
  .then(res => res.json())
  .then(data => {})
