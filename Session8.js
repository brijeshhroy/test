let record = require('fs');

record.readFile("D:\\FileSync-creations\\Level 1\\Test1.txt", 'utf-8',
    (err, info) => {
        if (err) {
            console.log("This is the issue :- ", err)
            console.log("It ends now");
        }

        if (info) {
            console.log("This is the first readfile data :- ", info);
            record.readFile("../FreeCodeCamp/FSys/Test.txt", 'utf-8',
                (error, daata) => {
                    if (error)
                        console.log("error")
                    if (daata) {
                        console.log("This is the second readfile data :- ", daata);
                        record.writeFile("D:\\NODEJS\\FreeCodeCamp\\1\\2\\Async.txt", daata + info
                            , { flag: 'a' }, (wrong) => {
                                if (wrong)
                                    console.log("Somethins is missing")
                                else
                                    console.log("Everything is done");
                            })
                    }

                }

            )
        }

    }
)






/*
Points to Note 

1. Two dots like (../FreeCodeCamp/FSys/Test.txt) moves the control to the folder in which folder containing this file is present.
    Eg. D stores NODEJS 
        NODEJS stores FreeCodeCamp
        FreeCodeCamp has Session8.js

    So now ../  will move control to NODEJS , as NODEJS is the folder in which FreeCodeCamp folder which has Seesion8.js 
    present.

2. Readfile error handling takes 2 parameters however writefile errorhandling only takes one paramter for error.

*/

