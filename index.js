// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",okokok)
var data=JSON.parse(localStorage.getItem("md"))||[];

function okokok(){

    event.preventDefault()
    var obj={
        match:document.querySelector("#matchNum").value,

        teamA:document.querySelector("#teamA").value,

        teamB:document.querySelector("#teamB").value,

        date:document.querySelector("#date").value,

        venue:document.querySelector("#venue").value,
    }
 data.push(obj)
 localStorage.setItem("md",JSON.stringify(data))
}

