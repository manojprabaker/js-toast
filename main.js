let btn=document.getElementById("button");
let mDiv=document.getElementById("toast");
btn.addEventListener("click",function(e){
	if(mDiv.childElementCount==0)
	{
	function createMain(tag,atrb,value,innertxt)
	{
		let divTop =document.createElement(tag);
		divTop.setAttribute(atrb,value);
		divTop.innerText=innertxt;
		mDiv.appendChild(divTop)		
		
	}
	
	createMain("div","id","top-div","");
	createMain("div","id","bot-div","This is a Toast Message");
	
	let topDiv=document.getElementById("top-div");
	let botDiv=document.getElementById("bot-div");
	console.log(topDiv);
	
	
	function createinnerDiv(tag,atrb,value,innertxt)
	{
		let divTop =document.createElement(tag);
		divTop.setAttribute(atrb,value);
		divTop.innerText=innertxt;
		topDiv.appendChild(divTop)		
		
	}

	createinnerDiv("div","id","inner-div","");
	createinnerDiv("div","id","inner-div-right","");
	
	let innerDiv=document.getElementById("inner-div");
	let innerDivRight=document.getElementById("inner-div-right");
		
	function createLeftDiv(tag,atrb,value,innertxt)
	{
		let divTop =document.createElement(tag);
		divTop.setAttribute(atrb,value);
		divTop.innerText=innertxt;
		innerDiv.appendChild(divTop)
	}
	
	createLeftDiv("p","class","icon","");
	createLeftDiv("h2","class","heading","Bootsrtap");
	
	function createRightDiv(tag,atrb,value,innertxt)
	{
		let divTop =document.createElement(tag);
		divTop.setAttribute(atrb,value);
		divTop.innerText=innertxt;
		innerDivRight.appendChild(divTop)
	}
	
	createRightDiv("p","class","eta","Just Now");
	createRightDiv("i","class","fa-solid fa-xmark","");
	
	let closBtn=document.getElementsByClassName("fa-solid fa-xmark");
	closBtn[0].addEventListener("click",function(b){
		let closeDiv=b.target.parentNode.parentNode.parentNode;
		console.log(closeDiv);
		botDiv.remove();
		topDiv.remove();
	});
	
	// let mainDiv =document.createElement("div");
	// mDiv.appendChild(mainDiv);
	// mainDiv.setAttribute("class","toast");
	
	// let topDiv=document.createElement("div");
	// mainDiv.appendChild(topDiv);
	// topDiv.setAttribute("class","top-div");
	
	// let botDiv=document.createElement("div");
	// mainDiv.appendChild(botDiv);
	// botDiv.setAttribute("class","bot-div");
	
	// let innerDiv=document.createElement("div");
	// topDiv.appendChild(innerDiv);
	// innerDiv.setAttribute("class","inner-div");
	
	
	// let innerDivright=document.createElement("div");
	// topDiv.appendChild(innerDivright);
	// innerDivright.setAttribute("class","inner-div-right");
	
	
	// let icon=document.createElement("i");
	// innerDiv.appendChild(icon);
	// icon.setAttribute("class","f-question");
	
	// let heading=document.createElement("h2");
	// innerDiv.appendChild(heading);
	// heading.setAttribute("class","heading");
	// heading.innerText="Bootsrtap";
	
	// let eta=document.createElement("p");
	// innerDivright.appendChild(eta);
	// eta.setAttribute("class","eta");
	// eta.innerText="Just Now";
	
	
	// let closBtn=document.createElement("i");
	// innerDivright.appendChild(closBtn);
	// closBtn.setAttribute("class","fa-solid fa-xmark");
	
	
	// let msg=document.createElement("h3");
	// botDiv.appendChild(msg);
	// msg.setAttribute("class","toast-msg");
	// msg.innerText="This is a Toast Message";
	
	// closBtn.addEventListener("click",function(b){
		// let closeDiv=b.target.parentNode.parentNode.parentNode;
		// console.log(closeDiv);
		// closeDiv.remove();
	// });
	}
});



// function create(tag,atrb,value)
	// {
		// let divTop =document.createElement(tag);
		// divTop.setAttribute(atrb,value);
		// return tag; 		
		// mDiv.appendChild(divTop);
	// }
	
	// create("div","classs","left-div");



// let iBtn=document.getElementsByClassName("fa-info");
// let tooltip=document.getElementById("help");

// iBtn[0].addEventListener("mouseenter",function(e){
	// console.log("running");
	// let div=document.createElement("div");
	// div.classList.add("tool-tip");
	// tooltip.appendChild(div);
	
	// let para=document.createElement("p");
	// para.classList.add("para");
	// div.appendChild(para);
	// para.innerText="Once Sign Offs are obtained,manage all studies,sign offs and changes in Settings"
	
	
	// let lnMore=document.createElement("a");
	// lnMore.classList.add("ln-more");
	// div.appendChild(lnMore);
	// lnMore.innerText="Learn More";
	
	// let manage=document.createElement("a");
	// manage.classList.add("manage");
	// div.appendChild(manage);
	// manage.innerText="OK";
	
	
	
	
	// manage.addEventListener("click",function(evenObj){
		// div.remove();
		// console.log("df");
	// })
	
// });

	
