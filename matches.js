// write js code here corresponding to matches.html
var all=JSON.parse(localStorage.getItem("md"))
var all2=JSON.parse(localStorage.getItem("fav"))||[]

all.forEach(function el(e){
    e.preventDefault

var tr=document.createElement("tr")

var td1=document.createElement("td")
td1.innerText=e.match

var td2=document.createElement("td")
td2.innerText=e.teamA

var td3=document.createElement("td")
td3.innerText=e.teamB

var td4=document.createElement("td")
td4.innerText=e.date

var td5=document.createElement("td")
td5.innerText=e.venue

var td6=document.createElement("td")
td6.innerText="favourites"
td6.style.backgroundColor="green"
td6.addEventListener("click",function(){
fave(e)
})



tr.append(td1,td2,td3,td4,td5,td6)
document.querySelector("tbody").append(tr)

})

function fave(e){
 all2.push(e)
 localStorage.setItem("fav",JSON.stringify(all2))
}
