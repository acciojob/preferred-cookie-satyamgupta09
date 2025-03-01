// //your JS code here. If required
// let fontColor=document.getElementById('fontcolor');
// let fontSize=document.getElementById('fontsize');
// let btn=document.getElementById('submit');

// btn.addEventListener('click', function(){
// 	let data={
// 		fontcolor:fontColor.value,
// 		fontsize:fontSize.value
// 	}
// 	document.cookie="data="+JSON.stringify(data) ";expires=" + new Date(Date.now() + 365*24*60*60*1000).toUTCString();
// })

// function getCookie(name) {
//   let cookieArr = document.cookie.split(';');
//   for (let i = 0; i < cookieArr.length; i++) {
//     let cookie = cookieArr[i].trim();
//     if (cookie.indexOf(name + "=") === 0) {
//       return cookie.substring(name.length + 1, cookie.length);
//     }
//   }
//   return null; // Return null if the cookie is not found
// }

// let cookieData=getCookie('data');
// if(cookieData){
// 	// fontColor.innertHTML=`${data.fontcolor}`;
// 	// fontSize.innerHTML=`${data.fontsize}`;
// 	let parsedData = JSON.parse(cookieData);

//   // Set the values of the inputs based on the cookie data
//   fontColor.value = parsedData.fontcolor;
//   fontSize.value = parsedData.fontsize;
// }
let fontColor = document.getElementById('fontcolor');
let fontSize = document.getElementById('fontsize');
let btn = document.querySelector('input[type="submit"]');

// Function to get cookie value by name
function getCookie(name) {
  let cookieArr = document.cookie.split(';');
  for (let i = 0; i < cookieArr.length; i++) {
    let cookie = cookieArr[i].trim();
    if (cookie.indexOf(name + "=") === 0) {
      return cookie.substring(name.length + 1, cookie.length);
    }
  }
  return null; // Return null if the cookie is not found
}

// Event listener to save font color and font size to cookies when the "Save" button is clicked
// btn.addEventListener('click', function(event) {
//   event.preventDefault();  // Prevent the form from submitting and refreshing the page
  
//   let fontColorValue = fontColor.value;
//   let fontSizeValue = fontSize.value;
  
//   // Save individual cookies for fontcolor and fontsize
//   document.cookie = "fontcolor=" + fontColorValue + ";expires=" + new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
//   document.cookie = "fontsize=" + fontSizeValue + ";expires=" + new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
// });

btn.addEventListener('click', function(event) {
	event.preventDefault();

	let fontColorValue = fontColor.value;
	let fontSizeValue = fontSize.value;

	document.cookie = `fontcolor=${fontColorValue}; expire=${new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString()}`;
	document.cookie = `fontsize-${fontSizeValue}; expire=${new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString()}`;
})

// Check if there are saved preferences in cookies on page load
window.onload = function() {
  let savedFontColor = getCookie('fontcolor');
  let savedFontSize = getCookie('fontsize');

  if (savedFontColor) {
    fontColor.value = savedFontColor; // Apply saved font color
    document.documentElement.style.setProperty('--fontcolor', savedFontColor);
  }

  if (savedFontSize) {
    fontSize.value = savedFontSize; // Apply saved font size
    document.documentElement.style.setProperty('--fontsize', savedFontSize + 'px');
  }
};
