export default class Operation{

    constructor() {
        String.prototype.replaceAt=function(index, char) {
            var a = this.split("");
            a[index] = char;
            return a.join("");
        }

        String.prototype.deleteAt = function (index, predicate) {
            var c = this[+index];
            if (!predicate || predicate(c)) {
                var before = this.substring(0, Math.max(index - 1, 0));
                var after = this.substring(Math.min(index + 1, this.length - 1));
                return before + after;
            }
            return this;
        }        
    }

    add(a,b){
        console.log(`(Log) Add ${a} + ${b}`);
            console.log(`(Log) Generating tape...`);
            let tape = "";
            for(let i = 0 ; i < a ; i++){
                tape += "0";
            }
            tape += "c";
            for(let i = 0 ; i < b ; i++){
                tape += "0";
            }
            console.log(`(Log) Generating tape succes`);
            console.log(`(Log) Tape : ${tape}`);
    
            let i = 0;
            let currState = 'q0';
            let result = [];
            let loop = true;
            // while(loop){
            //     console.log(`(Log) curr state : ${currState} - curr tape : ${tape} - curr index : ${i}`);
            //     result.push(`${currState}-${tape}-${i}`);
            //     switch (currState) {
            //         case 'q0':{
            //             if(tape.charAt(i) === "0"){
            //                 tape = tape.replaceAt(i,"X");
            //                 i = i+1;
            //                 currState = 'q1';
            //             }else if(tape.charAt(i) === "c"){
            //                 tape = tape.replaceAt(i,"X");
            //                 currState = 'q5';
            //             }
            //             break;
            //         }
            //         case 'q1':{
            //             if(tape.charAt(i)=== "0"){
            //                 i += 1;
            //             }else if(tape.charAt(i) === "c"){
            //                 i += 1;
            //                 currState = 'q2';
            //             }
            //             break;
            //         }
            //         case 'q2':{
            //             if(i === tape.length){
            //                 tape += "0";
            //                 i -= 1;
            //                 currState = 'q3';
            //             }else if(tape.charAt(i) === "0"){
            //                 i += 1;
            //             }
            //             break;
            //         }
            //         case 'q3':{
            //             if(tape.charAt(i) === '0'){
            //                 i -= 1;
            //             }else if(tape.charAt(i) === 'c'){
            //                 i -= 1;
            //                 currState = 'q4';
            //             }
            //             break;
            //         }
            //         case 'q4':{
            //             if(tape.charAt(i) === '0'){
            //                 i -= 1;
            //             }else if(tape.charAt(i) === 'X'){
            //                 i += 1;
            //                 currState = 'q0';
            //             }
            //             break;
            //         }
            //         case 'q5':{
            //             console.log(`(Log) Program end`);
            //             loop = false;
            //             break;
            //         }
            //         default:
            //             break;
            //     }
            // }
            while(loop){
                result.push(`${currState}-${tape}-${i}`);
                switch (currState) {
                    case 'q0':{
                        if(tape.charAt(i) === "0"){
                            tape = tape.replaceAt(i,"B");
                            i+=1;
                            currState = 'q1'
                        }
                        break;
                    }
                    case 'q1':{
                        if(tape.charAt(i) === "0"){
                            i += 1;
                        }else if(tape.charAt(i) === "c"){
                            tape = tape.replaceAt(i,"0");
                            i+=1;
                            currState = 'q2';
                        }
                        break
                    }
                    case 'q2':{
                        loop = false;
                        break;
                    }
                    default:
                        break;
                }
            }
            return result;
    }

    sub(a,b){
        console.log(`(Log) Subtract ${a} - ${b}`);
        console.log(`(Log) Generating tape..`);
        let tape = "";
        for(let i = 0 ; i < a ; i++){
            tape += "0";
        }
        tape += "C";
        for( let i = 0 ; i < b ; i++){
            tape += "0";
        }
        console.log(`(Log) Generating tape success`);
        console.log(`(Log) Tape : ${tape}`)

        let i = 0;
        let currState = 'q0';
        let result = [];
        let loop = true;
        while(loop){
            console.log(`(Log) curr state : ${currState} - curr tape : ${tape} - curr index : ${i}`);
            result.push(`${currState}-${tape}-${i}`);
            switch (currState) {
                case 'q0':{
                    if(tape.charAt(i) == "0"){
                        i += 1;
                    }else if(tape.charAt(i) == "C"){
                        i += 1;
                        currState = 'q1';
                    }
                    break;
                }
                case 'q1':{
                    if(tape.charAt(i) == "X"){
                        i += 1;
                    }else if(tape.charAt(i) == "0"){
                        tape = tape.replaceAt(i,"X");
                        i -= 1;
                        currState = 'q2';
                    }else{
                        i -= 1;
                        currState = 'q5';
                    }
                    break;
                }
                case 'q2':{
                    if(tape.charAt(i) == 'X'){
                        i -= 1;
                    }else if(tape.charAt(i) == "C"){
                        i -= 1;
                        currState = 'q3';
                    }
                    break;
                }
                case 'q3':{
                    if(tape.charAt(i) === 'B' || (i === 0)){
                        i = (tape.charAt(i) == 'B') ? i+1 : i;
                        currState = 'q4';
                    }else if(tape.charAt(i) === '0'){
                        i -= 1;
                    }
                    break;
                }
                case 'q4':{
                    if(tape.charAt(i) === '0'){
                        tape = tape.replaceAt(i,"B");
                        i +=1;
                        currState = 'q0'
                    }else{
                        tape = tape.replaceAt(i,"B");
                        i+=1;
                        currState = 'q6'
                    }
                    break;
                }
                case 'q5':{
                    if(tape.charAt(i) == "X"){
                        tape = tape.replaceAt(i,"B")
			            i-=1;
                    }else if(tape.charAt(i) == "C"){
                        tape = tape.replaceAt(i,"B")
			            i-=1;
			            currState = 'q7';
                    }
                    break;
                }
                case 'q6':{
                    if(tape.charAt(i) === "C" || tape.charAt(i) === "X"){
                        tape = tape.replaceAt(i,"B");
                        i+=1;
                    }else if(tape.charAt(i) === "0"){
                        i+=1;
                    }else{
                        tape += "0"
                        currState = 'q7';
                    }
                    break;
                }
                case 'q7':{
                    loop = false;
                }
                default:
                    break;
            }
        }
    return result;
    }

    mult(a,b){
        console.log(`(Log) Multiply ${a} * ${b}`);
        console.log(`(Log) Generating tape..`);
        let tape1 = "";
        for(let i = 0 ; i < a ; i++){
            tape1 += "0";
        }
        tape1 += "1";
        for( let i = 0 ; i < b ; i++){
            tape1 += "0";
        }
        console.log(`(Log) Generating tape success`);
        console.log(`(Log) Tape : ${tape1}`)
        let tape2 = "";
        let tape3 = "";
        let i = 0;
        let j = 0;
        let k = 0;
        let currState = 'q0';
        let result = [];
        /*result obj = {
            tape1:
            tape2:
            tape3:
            i:
            j:
            k:
            state:
        }*/
        let loop = true;
        while(loop){
            console.log(`Curr State ${currState} - Tape 1 ${tape1} - Tape 2 ${tape2} - Tape 3 ${tape3}  i,j,k = ${i},${j},${k}`);
            result.push({
                tape1:tape1,
                tape2:tape2,
                tape3:tape3,
                i:i,
                j:j,
                k:k,
                state:currState
            })
            switch (currState) {
                case 'q0':{
                    if(tape1.charAt(i) === "0" && (tape2.charAt(j) === "" || tape2.charAt(j) === "B") && (tape3.charAt(k) === "" || tape3.charAt(j) === "B") ){
                        tape1 = tape1.replaceAt(i,"B");
                        tape2 = tape2.replaceAt(j,"0");
                        i+=1;
                        j+=1;
                    }else if(tape1.charAt(i) === "1" && (tape2.charAt(j) === "" || tape2.charAt(j) === "B") && (tape3.charAt(k) === "" || tape3.charAt(j) === "B")){
                        tape1 = tape1.replaceAt(i,"B");
                        i += 1;
                        currState = 'q1';
                    }
                    break;
                }
                case 'q1':{
                    if(tape1.charAt(i) === "0" && (tape2.charAt(j) === "" || tape2.charAt(j) === "B") && (tape3.charAt(k) === "" || tape3.charAt(j) === "B")){
                        j -= 1;
                        currState = 'q2';
                    }else if((tape1.charAt(i) === "" || tape1.charAt(i) === "B") && (tape2.charAt(j) === "" || tape2.charAt(j) === "B") && (tape3.charAt(k) === "" || tape3.charAt(j) === "B")){
                        currState = 'q4';
                    }
                    break;
                }
                case 'q2':{
                    if(tape1.charAt(i) === "0" && tape2.charAt(j) === "0" && (tape3.charAt(k) === "" || tape3.charAt(j) === "B")){
                        j -= 1;
                    }else if(tape1.charAt(i) === "0" && (tape2.charAt(j) === "" || tape2.charAt(j) === "B") && (tape3.charAt(k) === "" || tape3.charAt(j) === "B")){
                        j += 1;
                        currState = 'q3';
                    }
                    break;
                }
                case 'q3':{
                    if(tape1.charAt(i) === "0" && (tape2.charAt(j) === "" || tape2.charAt(j) === "B") && (tape3.charAt(k) === "" || tape3.charAt(j) === "B")){
                        tape1 = tape1.replaceAt(i,"B")
                        i+= 1;
                        currState = 'q1';
                    }else if(tape1.charAt(i) === "0" && tape2.charAt(j) === "0" && (tape3.charAt(k) === "" || tape3.charAt(j) === "B")){
                        tape3 = tape3.replaceAt(k,"0");
                        j+=1;
                        k+=1;
                    }
                    break;
                }
                case 'q4':{
                    loop = false;
                }
                default:
                    break;
            }
        }
        return result;
    }
    
}