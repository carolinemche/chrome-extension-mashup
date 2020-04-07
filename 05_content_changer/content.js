// A2Z F17
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F17

// This is the content script for the extension

// It only runs on github.com as indicated in manifest.json
// "content_scripts": [
//   {
//     "matches": [
//       "http://github.com/*",
//       "https://github.com/*"
//     ],
//     "js": ["content.js"]
//   }
// ],

window.onload = comicSans;
window.onload = swapImg;






// looks for all elements that are in body tag
let body = document.getElementsByTagName("BODY")[0];

//looks for paragraphs tags elements
let paragraphs= document.getElementsByTagName('p');

//function to get a random number
function getRandom(max){
  return Math.floor(Math.random() * Math.floor(max));
}

//changes the font size for current paragraph (so they are all different)
for (var i = 0; i < paragraphs.length; i++) {
  //inside the loop to generate a new number everytime
  let num = getRandom(100);
  paragraphs[i].style.fontSize = num + "px" ;
  paragraphs[i].style.fontFamily = "Comic Sans MS, cursive, sans-serif";


}

// sets all text font to comic sans;
function comicSans(){
  body.style.fontFamily = "Comic Sans MS, cursive, sans-serif";
}



function swapImg(img) {
  // most popular image on dis image
  let newImage = chrome.extension.getURL("images/yoga.png");
  //gets image and changes it to yoga image
  img.src = newImage;
}


for (var i in document.images) {
  swapImg(document.images[i]);
}



// EXAMPLE CODE IS BELOW (USE FOR REFERENCE)

// Look for all elements that are an "avatar" or "gravatar"
var avatars = document.getElementsByClassName('avatar');
var gravatars = document.getElementsByClassName('gravatar');

// Call swapImg() for all of these DOM elements
for (var i = 0; i < avatars.length; i++) {
  swapImg(avatars[i]);
}

for (var j = 0; j < gravatars.length; j++) {
  swapImg(gravatars[j]);
}

// Change the image to a file that is part of this extension
// The file must be made available in manifest.json
//   "web_accessible_resources": [
//      "images/rainbow.png"
// ]
// function swapImg(img) {
//   var newimg = chrome.extension.getURL("images/rainbow.png");
//   img.src = newimg;
// }


// Look for a "repository" description
var descriptions = document.getElementsByClassName('repository-description');

// This is just a silly algorithm that reverses the text
for (var k = 0; k < descriptions.length; k++) {
  // Look at the text
  var txt = descriptions[k].innerHTML;
  // Split it up
  var words = txt.split(/\s+/);
  // Reverse the array
  words = words.reverse();
  //Join it back together
  txt = words.join(' ');
  // Set the new text and change the background-color
  descriptions[k].innerHTML = txt;
  descriptions[k].style['background-color'] = '#F0C';
  }
