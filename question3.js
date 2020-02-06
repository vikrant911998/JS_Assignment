//Question 3

function sortStrings(){
    let strs = [];
    let num = parseInt(prompt('Enter the Number of Strings'));
    
    for(let i=0;i<num;i++){
        let str = prompt(`Enter the String ${i+1}`);
        strs.push(str);
    }
    
    strs.sort();
    
    for(let item of strs){
        console.log(item);
    }
}
sortStrings();