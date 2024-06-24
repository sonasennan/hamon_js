function palindrome() 
{
    var text="Madam";
    var text1=text.toLowerCase();
    var rev="";

    for(var i=text1.length-1;i>=0;i--)
    {
        rev=rev+text1[i];
    }

    if(text1===rev)
    {
    console.log("String is Palindrome");
    }

    else
    {
    console.log("String is not Palindrome");
    }
}

palindrome()