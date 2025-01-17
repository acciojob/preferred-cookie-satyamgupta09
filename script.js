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
// Your JS code here

let fontColor = document.getElementById('fontcolor');
let fontSize = document.getElementById('fontsize');
let btn = document.getElementById('submit');

// Event listener to save font color and font size to cookies when the "Save" button is clicked
btn.addEventListener('click', function(event) {
  event.preventDefault();  // Prevent the form from submitting and refreshing the page
  
  let data = {
    fontcolor: fontColor.value,
    fontsize: fontSize.value
  };
  
  // Save the data object as a cookie, stringified
  document.cookie = "data=" + JSON.stringify(data) + ";expires=" + new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
});

// Function to get a cookie by its name
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

// Retrieve the 'data' cookie if it exists
let cookieData = getCookie('data');
if (cookieData) {
  // Parse the cookie data back into an object
  let parsedData = JSON.parse(cookieData);

  // Set the values of the inputs based on the cookie data
  fontColor.value = parsedData.fontcolor;
  fontSize.value = parsedData.fontsize;

  // Apply the styles to the document body
  document.body.style.color = parsedData.fontcolor;  // Set the text color
  document.body.style.fontSize = parsedData.fontsize + "px";  // Set the font size
}
