var codes = {};

function frequency(str) {
    var freqs = {};
    alert(str);
    for (var i = 0; i < str.length; i++) {

        if (freqs[str[i]] == undefined) {
  
            freqs[str[i]] = 1;
        } else {
            freqs[str[i]] = freqs[str[i]] + 1;
          
        }
    }

    return freqs;
}
var menssage="diego d ";
//alert(menssage.replace(/\ /g,'$'));
w = frequency(menssage);
//console.log(sortfreq(w));

function sortfreq(freqs) {
    var tuples = [];
    for (var let in freqs) {
        tuples.push([freqs[let],let]);
    }
    return tuples.sort();
}

function buildtree(tuples) {
    while (tuples.length > 1) {
        var leasttwo = [tuples[0][1], tuples[1][1]];
        //console.log(leasttwo);
        var rest = tuples.slice(2, tuples.length);
        //console.log(rest);
        var combfreq = tuples[0][0] + tuples[1][0];
        //console.log(combfreq);
        tuples = rest;
        end = [combfreq, leasttwo];
        //console.log(end);
        tuples.push(end)
        tuples.sort();
        while (tuples.length > 1) {
            leastTwo = [tuples[0][1], tuples[1][1]]
            //console.log(leastTwo);  
            theRest = tuples.slice(2, tuples.length);
            //console.log(theRest);  
            combFreq = tuples[0][0] + tuples[1][0];
            //console.log(combFreq);  
            tuples = theRest;
            end = [combFreq, leastTwo];
            tuples.push(end);
            //console.log(tuples);  
            tuples.sort();
            //console.log(tuples);  
        }
        return tuples[0][1];

    }
    return tuples;
}
var tree = buildtree(sortfreq(w));
console.log(tree);
code = {};
pat = '';
//assiging codes to each letter  
function assignCode(node, pat) {
    if (typeof (node) == typeof ("")) {
        code[node] = pat;
       
    }
    else {
        alert(node[0]);
        assignCode(node[0], pat + '0');
        assignCode(node[1], pat + '1');
    }
}
assignCode(tree,1);
console.log(code);