function pangram() {
    let text="The quick brown fox jumps over the lazy dog";
    let lowerText=text.toLowerCase();
    let uniqueText=new Set(lowerText.replace(/[^a-z]/g, ''));
    let uniqueArray=Array.from(uniqueText);
    let sorted=uniqueArray.sort();
    d=[]
    for(let i=97;i<=122;i++)
    {
        d.push(String.fromCharCode(i));
    }
    if(sorted.length===d.length)
    {
        console.log("Pangram is there");
    }
    else
    {
        console.log("Pangram is not there");
    }



}

pangram()