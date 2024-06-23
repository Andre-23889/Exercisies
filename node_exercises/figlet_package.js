const output= require("figlet");

output(
    "Andrea",
    {
        font: "Blocks",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 160,
        whitespaceBreak: true,
    },
    (error, data)=> {
        if (error) {
            console.log("an error occured");
            console.dir(error);
        } else{
            console.log(data)
        }
    }
)
