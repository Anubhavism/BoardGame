(function(){

	let n= prompt("Enter n in n*n!!");
	for(let i=1;i<=n;i++){
		for(let j=1;j<=n;j++){
			let block=document.createElement('svg');
			block.setAttribute("class","blocks");
			block.setAttribute("onClick","colorChange(this);this.onclick=null;");
			let square=document.createElement('rect');
			square.setAttribute("width","100px");
			square.setAttribute("height","100px");
			block.appendChild(square);
			document.getElementById('container').appendChild(block);
		}
		document.getElementById('container').appendChild(document.createElement('br'));
	}
	
})();
let blue=0,red=0;
	function colorChange(block){
		if((blue+red)%2==0){
			block.style.background="blue";
			blue++;
			document.getElementById('blueScore').innerHTML=blue;
		}
		else{
			block.style.background="red";
			red++;
			document.getElementById('redScore').innerHTML=red;
		}
	}