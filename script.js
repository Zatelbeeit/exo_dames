var tableElement = document.createElement("table");
var div = document.getElementsByTagName("div")[0];
div.appendChild(tableElement);


for (let i=0; i < 10; i++){
    var trElement = document.createElement("tr");
    tableElement.appendChild(trElement);

    for(let j=0; j < 10; j++){
        var cellElement = document.createElement("td");
        trElement.appendChild(cellElement);
        
        var pawn = document.createElement("div");
        pawn.classList.add("pawn");
        
        if(j%2 == i%2){
            cellElement.classList.add("white");
             
        }else{
            cellElement.classList.add("black");
            if(i < 4) {
                pawn.style.backgroundColor = "blue";
                cellElement.appendChild(pawn);
            }else if(i >= 6) {
                pawn.style.backgroundColor = "green";
                cellElement.appendChild(pawn);
            }
        }  
        
        pawn.addEventListener("click", function(){
            this.style.backgroundColor = "green";
        })
    }
}

