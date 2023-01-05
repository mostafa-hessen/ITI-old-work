const { log } = require("console");
const Helper = require("./Helper");

function extractData(data) {
  let result = data.reduce(
    (acc, ele) => {
      //  ele => id=1 =>  [id,1] =>[]
      let [key, value] = ele.split("=");
      acc[key] = value;
      // {id:1 , name:"task1" }
      return acc; //{id:1 , name:"task1" }
    },
    { id: new Date().getTime(),checked:false } // generat id 
  ); //{id:1}

  return result;
}

function main(Arrguments) {
  let [ , , opreation, ...data] = Arrguments;

  switch (opreation) {
    case "add":
        Helper.Add(extractData(data));
        break;

      case "delete":
        Helper.Delete(extractData(data));
        break;


        case "list":
            Helper.List(extractData(data));
            break;

            case "edit":
            Helper.Edit(extractData(data));
            break;

    default:
      break;
  }
}
main(process.argv);




console.log("Hello world")




// function hello(Uname){
//   return `hello ${Uname}`
// }

// function userName(myName){
//   let result=hello(myName)
//   console.log(result)
// }

// userName('mostafa')



console.log("Hi");

setTimeout(()=>{
  console.log("Hi I'm setTimeOut");
})

console.log("Bebo");
 