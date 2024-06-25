function frequency()
{
let text="The quick brown fox jumps over the lazy dog";
let d={}

for(let i of text)
{

if (!(i in d))
{
var key=i
var value=1
d[key]=value
}
   

else
{
value=d[i]+1
d[i]=value
}

}

console.log(d)
}

frequency()