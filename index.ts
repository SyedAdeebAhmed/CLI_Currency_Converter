import inquirer from "inquirer";

const currencyConverter = async()=>{

const input = await inquirer.prompt([
    {
        type: "string",
        name: "amount",
        message: "Please enter the ammount you want to convert : ",
    },
    {
        type: "list",
        name: "currency",
        message: "Please select your currency : ",
        choices: ["PKR", "USD", "EURO", "INR", "RIYAL"],
    },
]);

const converted = await inquirer.prompt([
    {
        type: "list",
        name: "currency",
        message: "Please select the currency in which you want to convert the ammount : ",
        choices: ["PKR", "USD", "EURO", "INR", "RIYAL"],
    }
])


const convertPKRToCURRENCIES = async()=> {

if(input.currency == "PKR" && converted.currency == "PKR"){
    console.log("The ammount is already in PKR");
}else if(input.currency == "PKR" && converted.currency == "USD"){

    const currentUSD = await inquirer.prompt([
        {
            type: "number",
            name: "currentRate",
            message: "Please enter the current rate of USD : ",
            
        }
    ])

    const result = input.amount / currentUSD.currentRate
    console.log("The converted ammount from PKR To USD is : $" + result);

}else if(input.currency == "PKR" && converted.currency == "EURO"){
    const currentEURO = await inquirer.prompt([
        {
            type: "number",
            name: "currentRate",
            message: "Please enter the current rate of EURO : ",
            
        }
    ])

    const result = input.amount / currentEURO.currentRate;
    console.log("The converted ammount from PKR To EURO is : €" + result);

}else if(input.currency == "PKR" && converted.currency == "INR"){

    const currentINR = await inquirer.prompt([
        {
            type: "number",
            name: "currentRate",
            message: "Please enter the current rate of INR : ",
            
        }
    ])

    const result = input.amount / currentINR.currentRate;
    console.log("The converted ammount from PKR To INR is : ₹" + result);

}else if(input.currency == "PKR" && converted.currency == "RIYAL"){
    const currentRIYAL = await inquirer.prompt([
        {
            type: "number",
            name: "currentRate",
            message: "Please enter the current rate of RIYAL in PKR : ",
        }
    ])

    const result = input.amount / currentRIYAL.currentRate;
    console.log("The converted ammount from PKR To RIYAL is : ریال" + result);
}
}

const convertUSDToCURRENCIES = async()=> {
    
    if(input.currency == "USD" && converted.currency == "USD"){
        console.log("The ammount is already in USD");
    }else if(input.currency == "USD" && converted.currency == "PKR"){
    
        const currentUSD = await inquirer.prompt([
            {
                type: "number",
                name: "currentRate",
                message: "Please enter the current rate of USD in PKR : ",
                
            }
        ])
    
        const result = input.amount * currentUSD.currentRate;
        console.log("The converted ammount from USD To PKR is : " + result);
    
    }else if(input.currency == "USD" && converted.currency == "EURO"){
        const currentEURO = await inquirer.prompt([
            {
                type: "number",
                name: "currentRate",
                message: "Please enter the current rate of USD in EURO : ",
                
            }
        ])
    
        const result= input.amount * currentEURO.currentRate; 
        console.log("The converted ammount from USD To EURO is : €" + result);
    
    }else if(input.currency == "USD" && converted.currency == "INR"){
    
        const currentINR = await inquirer.prompt([
            {
                type: "number",
                name: "currentRate",
                message: "Please enter the current rate of USD in INR : ",
                
            }
        ])
    
        const result = input.amount * currentINR.currentRate;
        console.log("The converted ammount from USD To INR is : ₹" + result);
    
    }else if(input.currency == "USD" && converted.currency == "RIYAL"){
        const currentRIYAL = await inquirer.prompt([
            {
                type: "number",
                name: "currentRate",
                message: "Please enter the current rate of USD in RIYAL: ",
            }
        ])
    
        const result = input.amount * currentRIYAL.currentRate;
        console.log("The converted ammount from USD To RIYAL is : ریال" + result);
    }
    
    }

    const convertEUROToCURRENCIES = async()=> {
    
        if(input.currency == "EURO" && converted.currency == "EURO"){
            console.log("The ammount is already in EURO");
        }else if(input.currency == "EURO" && converted.currency == "PKR"){
        
            const currentUSD = await inquirer.prompt([
                {
                    type: "number",
                    name: "currentRate",
                    message: "Please enter the current rate of EURO in PKR : ",
                    
                }
            ])
        
            const result = input.amount * currentUSD.currentRate;
            console.log("The converted ammount from EURO To PKR is : " + result);
        
        }else if(input.currency == "EURO" && converted.currency == "USD"){
            const currentEURO = await inquirer.prompt([
                {
                    type: "number",
                    name: "currentRate",
                    message: "Please enter the current rate of USD in EURO : ",
                    
                }
            ])
        
            const result= input.amount * currentEURO.currentRate; 
            console.log("The converted ammount from EURO To USD is : $" + result);
        
        }else if(input.currency == "EURO" && converted.currency == "INR"){
        
            const currentINR = await inquirer.prompt([
                {
                    type: "number",
                    name: "currentRate",
                    message: "Please enter the current rate of EURO in INR : ",
                    
                }
            ])
        
            const result = input.amount * currentINR.currentRate;
            console.log("The converted ammount from EURO To INR is : ₹" + result);
        
        }else if(input.currency == "EURO" && converted.currency == "RIYAL"){
            const currentEURO = await inquirer.prompt([
                {
                    type: "number",
                    name: "currentRate",
                    message: "Please enter the current rate of EURO in Riyal : ",
                }
            ])
        
            const result = input.amount * currentEURO.currentRate;
            console.log("The converted ammount from EURO To RIYAL is : ریال" + result);
        }
    }

    const convertINRToCURRENCIES = async()=> {

        if(input.currency == "INR" && converted.currency == "INR"){
            console.log("The ammount is already in INR");
        }else if(input.currency == "INR" && converted.currency == "PKR"){
        
            const currentINR = await inquirer.prompt([
                {
                    type: "number",
                    name: "currentRate",
                    message: "Please enter the current rate of INR in PKR : ",
                    
                }
            ])
        
            const result = input.amount * currentINR.currentRate;
            console.log("The converted ammount from INR To PKR is : " + result);

        }else if(input.currency == "INR" && converted.currency == "USD"){
                
            const currentUSD = await inquirer.prompt([
                {
                    type: "number",
                    name: "currentRate",
                    message: "Please enter the current rate of INR in USD : ",
                    
                }
            ])

            const result = input.amount * currentUSD.currentRate;
            console.log("The converted ammount from INR To USD is : $" + result);

        }else if(input.currency == "INR" && converted.currency == "EURO"){

            const currentEURO = await inquirer.prompt([
                {
                    type: "number",
                    name: "currentRate",
                    message: "Please enter the current rate of INR in EURO : ",
                    
                }
            ])

            const result = input.amount * currentEURO.currentRate;
            console.log("The converted ammount from INR To EURO is : €" + result);

        }else if(input.currency == "INR" && converted.currency == "RIYAL"){

            const currentRIYAL = await inquirer.prompt([
                {
                    type: "number",
                    name: "currentRate",
                    message: "Please enter the current rate of INR in RIYAL : ",
                    
                }
            ])


            const result = input.amount * currentRIYAL.currentRate;
            console.log("The converted ammount from INR To RIYAL is : ریال" + result);

        }

    }

    const convertRIYALToCURRENCIES = async()=> {

        if(input.currency == "RIYAL" && converted.currency == "RIYAL"){
            console.log("The ammount is already in RIYAL");
        }else if(input.currency == "RIYAL" && converted.currency == "PKR"){
        
            const currentRIYAL = await inquirer.prompt([
                {
                    type: "number",
                    name: "currentRate",
                    message: "Please enter the current rate of RIYAL in PKR : ",
                    
                }

            ])

            const result = input.amount * currentRIYAL.currentRate;
            console.log("The converted ammount from RIYAL To PKR is : " + result);

        }else if(input.currency == "RIYAL" && converted.currency == "USD"){

            const currentUSD = await inquirer.prompt([
                {
                    type: "number",
                    name: "currentRate",
                    message: "Please enter the current rate of RIYAL in USD : ",

                }
            ])

            const result = input.amount * currentUSD.currentRate;
            console.log("The converted ammount from RIYAL To USD is : $" + result);

        }else if(input.currency == "RIYAL" && converted.currency == "EURO"){

            const currentEURO = await inquirer.prompt([
                {
                    type: "number",
                    name: "currentRate",
                    message: "Please enter the current rate of RIYAL in EURO : ",

                }
            ])

            const result = input.amount * currentEURO.currentRate;

            console.log("The converted ammount from RIYAL To EURO is : €" + result);

        }else if(input.currency == "RIYAL" && converted.currency == "INR"){

            const currentINR = await inquirer.prompt([
                {
                    type: "number",
                    name: "currentRate",
                    message: "Please enter the current rate of RIYAL in INR : ",

                }
            ])

            const result = input.amount * currentINR.currentRate;
            console.log("The converted ammount from RIYAL To INR is : ریال" + result);

        }
    }


if(input.currency == "PKR"){

    convertPKRToCURRENCIES();

}else if(input.currency == "USD"){

    convertUSDToCURRENCIES();

}else if(input.currency == "EURO"){

    convertEUROToCURRENCIES();

}else if(input.currency == "INR"){

    convertINRToCURRENCIES();

}else if(input.currency == "RIYAL"){

    convertRIYALToCURRENCIES();

}

// const response = await inquirer.prompt([
//     {
//         type: "list",
//         name: "choice",
//         message: "Do you want to convert another amount?",
//         choices: ["Yes", "No"],
//     },
// ]);

// if (response.choice === "Yes") {
//     currencyConverter();
// } else {

//     console.log("Thanks for using our currency converter!");

// }

}

currencyConverter();



    