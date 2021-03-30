// Challenge 1
// capitalize() - makes the first character of a given string uppercase.
String.prototype.capitalize = function() {
  return this[0].toUpperCase() + this.substr(1)
}
let test_capitalize = "hello world" // expected "Hello world"
// console.log(test_capitalize.capitalize()) 

// Challenge 2
// allCaps() - makes all characters uppercase. 
String.prototype.allCaps = function() {
  return this.toUpperCase()
}
let test_allCaps = "foo bar" // expected "FOO BAR "
// console.log(test_allCaps.allCaps()) 

// Challenge 3
// capitalizeWords() - makes the first character of each word uppercase. Imagine that each word is separated by a space.
String.prototype.capitalizeWords = function() {
  let split = this.split(" ")
  for(i = 0; i < split.length; i++) {
    let updated = split[i].capitalize() 
    split[i] = updated
  }
  return split.join(' ')
}
let test_capitalizeWords = "do all the things" // expected "Do All The Things"
// console.log(test_capitalizeWords.capitalizeWords())
// ~ Advanced ~  
// capitalizeHeadline() - capitalizes all of the words except the words: the, in, a, an, and, but, for, at, by, from unless one of these words is the first word of the string!
String.prototype.capitalizeHeadline = function() {
  offLimits = ["the", "in", "a", "an", "and", "but", "for", "at", "by", "from"]
  let split = this.split(" ")
  split[0] = split[0].capitalize()
  for (i = 1; i < split.length; i++) {
    if (offLimits.includes(split[i]) == false) {
      let updated = split[i].capitalize() 
      split[i] = updated
    }
  }
  return split.join(" ")
}
let test_capitalizeHeadline = "the most foo in bar" // expected "The Most Foo in Bar"
// console.log(test_capitalizeHeadline.capitalizeHeadline())

// Challenge 4
// removeExtraSpaces() - Removes all spaces from the beginning and end of a String along with any extra spaces in the middle. If more than one space appears in the middle of a string it is replaced by a single space.
function whitespace(char) {
  return char != "" ? true : false 
}

String.prototype.removeExtraSpaces = function() {
  let split = this.split(" ")
  let filtered = split.filter(whitespace)
  return filtered.join(" ")
}
let test_removeExtraSpaces = "   Hello    world!   " // expected "Hello world!"
// console.log(test_removeExtraSpaces.removeExtraSpaces())
// ~ Advanced ~ 
// Remove all whitespace characters, this includes return, enter, and tabs along with spaces.
// 😯

// Challenge 5
// kebobCase() - Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.
String.prototype.kebobCase = function() {
  split = this.split(" ")
  for(i = 0; i < split.length; i++) {
    if(split[i] == "") {
      split.splice(i, 1) 
    }
  } 
  return split.join("-").toLowerCase()
}
let test_kebobCase = " Hello world " // expected "hello-world"
// console.log(test_kebobCase.kebobCase())
// ~ Advanced ~ 
// Remove special characters from the string. For example: "Hello World!" -> "hello-world" (notice the ! is removed)
// Strategies:
// Convert the whole string to lower case with: string.toLowerCase()
// Split the string into an array of characters with: string.split('')
// Filter out the characters you don't want. You want to keep letters, numbers, the space ' ', and the hyphen '-'. One way to approach that is to use the character code. Every character is assigned a number (the character code) for lowercase letters the a through z are codes: 97 to 122. The space " " is character code 32. You can get the character code using string.charCodeAt(). To preserve the numbers look for character codes 48 to 57 (0 to 9). You're looking for character codes 32, 48-57, 97-122, and 45.
// Use the removeExtraSpaces() to remove any extra spaces.
// Split on the space and join with hyphen.



// Challenge 6
// snakeCase() - Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.
String.prototype.snakeCase = function() {
  let split = this.split(" ")
  for(i = 0; i < split.length; i++) {
    if(split[i] === "") {
      split.splice(i, 1)
    } 
  }
  return split.join("_")
}
let test_snakeCase = " what the heck" // expected "what_the_heck"
// console.log(test_snakeCase.snakeCase())

// Challenge 7
// camelCase() - Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.
String.prototype.camelCase = function() {
  split = this.split(" ")
  firstWord = split[0]
  lowerCaseFirstWord = firstWord[0].toLowerCase() + firstWord.substr(1)
  split[0] = lowerCaseFirstWord
  for(i = 1; i < split.length; i++) {
    updated = split[i].capitalize()
    split[i] = updated
  } 
  return split.join("")
}
let test_camelCase = "Camel Case" // expected camelCase
// console.log('Camel', test_camelCase.camelCase())

// Challenge 8
// shift() this method will take the first character of a string and move to the end of a string.
// ~ Advanced ~ Include an optional second parameter that sets the number of characters to shift.
String.prototype.shift = function(num) {
  if(num == undefined) {
    charToShift = this[0]
    substring = this.substring(1)
  } else {
    charToShift = this.slice(0, num)
    substring = this.substring(num)
  }
  return substring + charToShift
}
let test_shift = "Hello World" // expected "ello WorldH"
// console.log(test_shift.shift())

// Challenge 9
// makeHashTag(str) - This function should convert the given string to a hash tag. A hash tag begins with # and no spaces. Each word in the phrase begins with an uppercase letter.
// If the given string has more than three words pick the three longest and make the hash tag from those.
String.prototype.makeHashTag = function() {
  split = this.split(" ")
  if(split.length > 3) {
    charCount = {}
    split.forEach(char => {charCount[char] = char.length})
    //let countArr = charCount.map(val => {console.log(val)})
    return charCount
  }
}
let test_makeHashTag = "Amazing bongo drums for sale" // expected ['#amazing', '#bongo', '#drums']
console.log(test_makeHashTag.makeHashTag())
// Strategies:
// Split the string into an array of words by splitting on the " ". Check the length. Sort by length. Uppercase each of the first three words and add '#' at the beginning.



// Challenge 10
// isEmpty(str) - Returns true if the given string is empty or contains only whitespace. White space includes: spaces, line returns, and tabs. These characters can be represented with: \n (new line) \r (carrige return), \t (tab).
String.prototype.isEmpty = function() {
  return 'isEmpty'
}
let test_isEmpty = "Abc def" // expected false 
// console.log(test_isEmpty.isEmpty()) ~~~~ DONT FORGET ME! 