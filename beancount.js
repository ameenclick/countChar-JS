 function countChar(s,char){
    let count=0
    for(let i=0;i< s.length;i++)
    {
        if(s[i] === char)
        {
            count=count+1
        }
    }
    return count
}

console.log(countChar("AdeeBbbbBBbbB","A"))