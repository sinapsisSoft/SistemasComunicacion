var message;
var w="";
var tree;
function loadHuffman(data){
    w = frequency(data);
    tree = buildtree(sortfreq(w));
    assignCode(tree,0);
    
}
function messageAnalysis() {
    var txtMessage = document.getElementById("message");
    let longMessage = txtMessage.value.length;
    message=txtMessage.value;
    var newMessage =[];
    let count=0;
    var tableView=document.getElementById("tableResult");
    var tableCode=document.getElementById("tableResultCode");
    var LongCode=document.getElementById("longCode");
    var tableHead="";
    tableHead="<tr><thead><th>Símbolo</th><th>Frecuencia</th><th>Longitud</th></thead></tr>";
    var tableHeadCode="";
    tableHeadCode="<tr><thead><th>Símbolo</th><th>Código</th></thead></tr>";
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
        var sumPro=[];
       
        for(var i=0;i<newMessage.length;i++){       
            for(let j=0;j<longMessage;j++){
                if(newMessage[i]==message[j]){
                    count++;
                }
                
            } 
            tableHead+="<tr><td>"+newMessage[i]+"</td>"+"<td>"+count+"/"+longMessage+"</td><td>"+count +"</td></tr>";
            sumPro.push("("+count+"/"+longMessage+")*2");
            arrayResul.push("("+count+"/"+longMessage+")*Math.log2("+longMessage+"/"+count+")");
            count=0;   
        }
        tableView.innerHTML=tableHead;
        var xEval=arrayResul.toString().replace(/\,/g,"+");
        var entropia=eval(xEval);
        var xMedia=sumPro.toString().replace(/\,/g,"+");
        var logMedia=eval(xMedia);
        var xTasaCompre="Math.log2("+newMessage.length+")/"+logMedia;
        var efi=entropia/logMedia;
        var redun=efi-1;
        xEval+="<br><strong>Resultado de la entropia del código:"+entropia+" Bits/Simbolo</strong>";
        xEval+="<br><strong>Resultado de la longitud media:"+logMedia+"</strong>";
        xEval+="<br><strong>Resultado de la tasa de comprensión:"+eval(xTasaCompre)+"</strong>";
        xEval+="<br><strong>Resultado del rendimiento:"+efi+"</strong>";
        xEval+="<br><strong>Resultado del redundancia:"+redun+"</strong>";
        
        xEval=xEval.replace(/\Math./g,"");
        LongCode.innerHTML="H(s)="+xEval;   
        console.log(eval("1/2*Math.log2(2)"));
       
        loadHuffman(message);
        
        for(let x in code){
            tableHeadCode+="<tr><td>"+x+"</td>"+"<td>"+code[x]+"</td></tr>";
            console.log(x+"="+code[x]);
        }
        tableCode.innerHTML=tableHeadCode;
    }

    
}