let record = require('fs');  

record.readFile("D:\\FileSync-creations\\Level 1\\Test1.txt" , 'utf-8',
(err,info) =>
{
    if(err)
    {
        console.log("This is the issue :- ",err)
    console.log("It ends now");
    }
    
    if(info)
    {console.log(info);
    
    }
    
}
)

record.readFile("../index.txt" , 'utf-8', 
(error,daata)=>
{
    if(error)
    console.log(error)
    if(daata)
    console.log(daata);
}

    )



