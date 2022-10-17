//Creating div element
let div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","num");

//Creation of Event for the button 
var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="search";
button.addEventListener("click",kural);
div.append(input,button);
document.body.append(div);

//async,await and try & catch methods 
async function kural(){
    try {      
        
    let enterNum=document.getElementById("num").value;
    console.log(enterNum);
    let url=`https://api-thirukkural.vercel.app/api?num=${enterNum}`;
    let res= await fetch(url);
    let res1= await res.json();
    console.log(res1);
  
    // Creating Bootstrap designs by DOM
    let container=document.createElement("div");
    container.setAttribute("class","container");
    let row=document.createElement("div");
    row.setAttribute("class","row");
    let col=document.createElement("div");
    col.setAttribute("class","col-sm-4");
    col.style.marginLeft="350px";
    col.style.marginTop="10px";

    let ul=document.createElement("ul");
    ul.setAttribute("class","list-group");
    ul.style.textAlign="center";

    let active=document.createElement("li")
    active.classList.add("list-group-item","list-group-item-primary");
    active.innerHTML=`${res1.sect_tam}-${res1.chap_tam}`

    let line=document.createElement("li")
    line.classList.add("list-group-item","list-group-item-success");
    line.innerHTML=`<div>${res1.line1}<br>${res1.line2}</div>`
    

    let english=document.createElement("li")
    english.classList.add("list-group-item","list-group-item-danger");
    english.innerHTML=`${res1.eng}`
   

    ul.append(active,line,english);
    col.append(ul);
    row.append(col);
    container.append(row);
    document.body.append(container);
    } catch (error) {
        let ul=document.createElement("ul");
        ul.setAttribute("class","list-group");

        let err=document.createElement("li");
        err.classList.add("list-group-item","list-group-item-danger");
        err.style.textAlign="center";
        err.innerHTML=`Data Not Found !!!`//if userinput number is not between 1-1330
        ul.append(err);
        document.body.append(ul);
    }
}
