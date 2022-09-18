function loadBackground() {
  var gradient = [["#B58ECC", "#5DE6DE"], ["#B58ECC", "#5DE6DE"], ["#80FF72", "#7EE8FA"], 
                  ["#6782B4", "#B1BFD8"], ["#fc5c7d", "#6a82fb"], ["#c33764", "#1d2671"],
                  ["#00b09b", "#96c93d"], ["#00f260", "#0575e6"], ["#fc4a1a", "#f7b733"],
                  ["#74ebd5", "#acb6e5"], ["#ff9966", "#ff5e62"], ["#dce35b", "#45b649"]]
  var num = Math.floor(Math.random() * gradient.length)

  document.body.style.background = `linear-gradient(0deg, ${gradient[num][0]} 0%, ${gradient[num][1]} 100%)`
  console.log(gradient[num][0] + "  :  " + gradient[num][1])
}
 
window.onload = function() {
  console.log(`  __________________
  |   Bienvenid@!    |
   ------------------
          \\   ^__^
           \\  (oo)\\_______
             (__)\\        )\\/\\
                  ||----w |
                  ||     ||`)
  loadBackground()
}