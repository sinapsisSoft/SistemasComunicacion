function messageAnalysis() {
    var txtMessage = document.getElementById("message");
    let longMessage = txtMessage.value.length;
    var newMessage =[];
    var message=txtMessage.value;
    let count=0;
    var tableView=document.getElementById("tableResult");
    var LongCode=document.getElementById("longCode");
    var tableHead="";
    tableHead="<tr><thead><th>Símbolo</th><th>Frecuencia</th><th>Longitud</th></thead></tr>";
    if (longMessage <= 0) {
        alert("Digite un mensaje para evaluar");
    } else {

        for (let i = 0; i < longMessage; i++) {
            
            var chars = message[i];
            
            let getChars="";
            for(let j=0;j<longMessage;j++){
                  
                if(message[j].indexOf(chars)!=-1){
                    
                    
                    if(newMessage.indexOf(chars)==-1 ){
                        getChars=chars;
                        newMessage.push(getChars); 
                       
                    }
                   
                }         
            }
          
        }
        
        var arrayResul=[];
        for(var i=0;i<newMessage.length;i++){       
            for(let j=0;j<longMessage;j++){
                if(newMessage[i]==message[j]){
                    count++;
                }
                
            } 
            tableHead+="<tr><td>"+newMessage[i]+"</td>"+"<td>"+count+"/"+longMessage+"</td><td>"+count +"</td></tr>";
            arrayResul.push("("+count+"/"+longMessage+"*Math.log2("+longMessage+"))");
            count=0;   
        }
        tableView.innerHTML=tableHead;
        var xEval=arrayResul.toString().replace(/\,/g,"+");
       
        xEval+="<br><strong>Resultado longitud de código:"+eval(xEval)+"</strong>";
        xEval=xEval.replace(/\Math./g,"");
        LongCode.innerHTML="H(s)="+xEval;   
        console.log(eval("1/2*Math.log2(2)")); 
        
    }


}