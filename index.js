const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name) {
  kittens.push(name)
  return "boblyou runcle"
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
var newKittens = [... kittens]
newKittens.push(name)
return newKittens
}

function prependKitten(name) {
  var newKittens = [... kittens]
  newKittens.unshift(name)
  return newKittens
}

function removeLastKitten() {
 return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
