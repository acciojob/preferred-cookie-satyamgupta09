//your JS code here. If required
let fontColor=document.getElementById('fontcolor');
let fontSize=document.getElementById('fontsize');
let btn=document.getElementById('submit');

btn.addEventListener('click', function(){
	let data={
		fontcolor:fontColor.value,
		fontsize:fontSize.value
	}
	document.cookie="data="+JSON.stringify(data) ";expires=" + new Date(Date.now() + 365*24*60*60*1000).toUTCString();
})

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

let cookieData=getCookie('data');
if(cookieData){
	// fontColor.innertHTML=`${data.fontcolor}`;
	// fontSize.innerHTML=`${data.fontsize}`;
	let parsedData = JSON.parse(cookieData);

  // Set the values of the inputs based on the cookie data
  fontColor.value = parsedData.fontcolor;
  fontSize.value = parsedData.fontsize;
}
