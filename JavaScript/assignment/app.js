//Defining a function that returns array elements larger than a number
function largest(arr,n)
{
    let newArr=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>n)
            newArr.push(arr[i]);
    }
    return newArr;

}

//Extracting unique characters from a string
function uniqueCharacters(str)
{
    let ans="";
    for(let i=0;i<str.length;i++)
    {
        if(!(ans.includes(str[i])))
        {
            ans=ans+str[i];
        }

    }
    return ans;
}

//Javascript program that accepts list of country names as input and returns the longest country name as output
function countryName(arr)
{
    let ans="";
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i].length>ans.length)
        ans=arr[i];
    }
    return ans;
}

//Javascript program to count number of vowels in string
function countVowel(str)
{
    let strng="";
    let count=0;
    for(let i=0;i<str.length;i++)
    {
        strng=str.toLowerCase();
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u')
        {
            count++;

        }
    }
    return count;
}
//Function to generate a number within range start to end
function rand(start,end)
{
let diff=end-start;
num=Math.floor(Math.random()*diff)+start;
return num;

}