//  1- file
const { log } = require("console");
const fs = require("fs");

// 2- functions 

//  ========== add function =========
function Add(data) {
  const readFfile = fs.readFileSync("./file.json", "utf-8");   // string
  const parsereadFfile = JSON.parse(readFfile);               // js code => array []
  parsereadFfile.push(data);                                 // [{id:1} ] => js code
  fs.writeFileSync("./file.json", JSON.stringify(parsereadFfile));
}

//  ========== Delete function =========
function Delete(data) {
  const readFfile = fs.readFileSync("./file.json", "utf-8");  // string
  const parsereadFfile = JSON.parse(readFfile);              // js code => array []
  let x = parsereadFfile.filter(ele =>  ele.id != data.id);
  fs.writeFileSync("./file.json", JSON.stringify(x));
}

//  ========== list  function =========
function List(data) {
    const readFfile = fs.readFileSync("./file.json", "utf-8");  // string
    const parsereadFfile = JSON.parse(readFfile);              // js code => array []
    switch (data.checked) { 
        case "all":
           console.log("alll",parsereadFfile);
          break;
    
          case "true":
           console.log( parsereadFfile.filter(ele =>  ele.checked ==true))
            break;
    
             case "false":
                console.log( parsereadFfile.filter(ele =>  ele.checked ==false))
                break;
        default:
          break;
      }
}

//  ========== Edite  function =========
function Edit(data) {

    const readFfile = fs.readFileSync("./file.json", "utf-8"); // string
    const parsereadFfile = JSON.parse(readFfile);             // js code => array []
    let target = parsereadFfile.filter(ele =>  ele.id == data.id);
    target[0].checked=data.checked
    target[0].name=data.name
    let after = parsereadFfile.filter(ele =>  ele.id != data.id);
    fs.writeFileSync("./file.json", JSON.stringify(parsereadFfile));


}

module.exports = { Add, Delete, Edit, List };



// // 320px — 480px: Mobile devices
// 481px — 768px: iPads, Tablets
// 769px — 1024px: Small screens, laptops
// 1025px — 1200px: Desktops, large screens
// 1201px and more —  Extra large screens, TV