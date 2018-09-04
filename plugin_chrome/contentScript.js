window.setTimeout(registerEditables,500)

var all_editable = []
var active_textbox

function registerEditables() {
  dictionary = window.dictionary // TODO find a better way of importing this

  // find all contenteditables
  var editable = document.getElementsByTagName("DIV")
  for (var i = 0; i < editable.length; i++) {
    if (all_editable[i].getAttribute('contentEditable')) {
      all_editable.push(editable[i])
    }
  }

  editable = document.getElementsByTagName("TEXTAREA")
  for (var i = 0; i < editable.length; i++) {
    all_editable.push(editable[i])
  }

  editable = document.getElementsByTagName("INPUT")
  for (var i = 0; i < editable.length; i++) {
    all_editable.push(editable[i])
  }

  // set up event listeners
  for (var i = 0; i < contentEditables.length; i++) {
    contentEditables[i].addEventListener("keyup", textBoxModified)
  }
}

function textBoxFocusIn(e) {
  composeBox = e.target
  console.log(activebox)
}

function textBoxFocusOut(e) {
  clearRecommendation()
  activebox = null
}


function textBoxModified(e) {

}
