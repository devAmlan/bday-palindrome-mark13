const selecteddate = document.querySelector("#selecteddate")
const checkbtn = document.querySelector("#checkbtn")
const result = document.querySelector("#result")

function dateFormats(){
  var d = new Date(selecteddate.value)
  var year = d.getFullYear()
  var date = d.getDate()
  var month = d.getMonth()+1;
  var format1 = date.toString()+month.toString()+year.toString()
  var format2 = month.toString()+date.toString()+year.toString()
  var format3 = month.toString()+date.toString()+year.toString().slice(-2)
  return [format1,format2,format3]
}
function checkPalindrome(){
   if(selecteddate.value !== ""){
    let listofDates = dateFormats()
    for (let i = 0; i < listofDates.length; i++) {
      console.log()
      if(listofDates[i] === listofDates[i].split("").reverse().join("")){
          result.innerHTML = '<h3>'+'Congrats Your birthday is Palindrome'+'</h3>'
      }else{
          result.innerHTML = '<h3>'+'Sorry your birthday is not Palindrome'+'</h3>'
      }
    }
   }else{
       alert('Please enter a day')
   }
}
checkbtn.addEventListener('click',checkPalindrome)
