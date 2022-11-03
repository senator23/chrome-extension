const inputBtn = document.getElementById("save");
const inputEl= document.getElementById("input-el");
const ulel= document.getElementById("ul-el");
const dele = document.getElementById("delete");
let myLeads=[];
const tab=document.getElementById("save-tab");

const leadsfromlocalstorage=JSON.parse(localStorage.getItem("myLeads"));

if(leadsfromlocalstorage){
    myLeads=leadsfromlocalstorage;
    render(myLeads);
}

tab.addEventListener("click",function(){
    chrome.tabs.query({active:true, currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
        render(myLeads);
    })
})

function render(Leads){
    let listitems=""
        for(let i=0;i<Leads.length;i++){
        listitems+="<li><a target='_blank' href='"+ Leads[i] +"'>"+ Leads[i]+"</a></li>";
    }
    ulel.innerHTML=listitems;
}


dele.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads=[];
    render(myLeads);
})

dele.addEventListener("click",function(){
    // localStorage.clear();
    // myLeads=[];
    myLeads.pop();
    render(myLeads);
})

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=""

    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);
})
