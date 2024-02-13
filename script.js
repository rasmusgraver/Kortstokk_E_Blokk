function tilfeldigKort() {
  // Tilfeldig tall 1 til 13:
  const tall = Math.floor(Math.random() * 13) + 1
  // Img elementet som holder på kortet vårt:
  const kortElm = document.querySelector(".container img")

  // Endrer til en tilfeldig kløver:
  // (Trenger ikke denne lenger)  kortElm.src = "kortstokk/" + tall + "_of_clubs.png"

  // Finner en tilfeldig "suit":
  const suits = ["spades", "hearts", "clubs", "diamonds"]
  const suit_index = Math.floor(Math.random() * 4)
  const suit = suits[suit_index]

  // Endrer til et tilfeldig KORT:
  kortElm.src = "kortstokk/" + tall + "_of_" + suit + ".png"
}
setInterval(tilfeldigKort, 1000)
