// https://jsonplaceholder.typicode.com/users
let hi="";
let btn = document.getElementById('btn')
let divContainer= document.querySelector( ".tableContai")

function  displayInfo()
{
    new Promise((succes,error)=>{

        let url = "https://jsonplaceholder.typicode.com/users"
        var xt=new XMLHttpRequest();
        xt.open("GET",url)
         xt.onreadystatechange=function(){

            if(xt.readyState==4){
                if(xt.status==200){
                    let data=JSON.parse(xt.responseText)
                    succes(data);
                }
                else{
                    error("error")
                }
            }
         }

         xt.send("")
    })
    .then(respons=>{
        respons.forEach(ele => {
           hi+= `
            
            <!--========= tr ====== -->
            <tr>
              <td style="display: flex; align-items: center">
                <div class="img" style="margin-right: 5px"></div>
                <span class="content">${ele.name}</span>
              </td>
              <td>${ele.username}</td>
              <td>${ele.email}</td>
      
              <!--  -->
              <td class="address">
                #
      
                <table class="allAdresses">
                  <!-- <img src="./images/img3.png" width="100" alt=""> -->
                  <tbody>
      
                    <tr>
                      <td>street</td>
                      <td>${ele.address.street}</td>
                    </tr>
      
                    <tr>
                      <td>suite</td>
                      <td>${ele.address.suite}</td>
                    </tr>
      
      
                    <tr>
                      <td>city</td>
                      <td>${ele.address.city}</td>
                    </tr>
      
      
                    <tr>
                      <td>zipcode</td>
                      <td>${ele.address.zipcode}</td>
                    </tr>
                  </tbody>
                </table>
      
              </td>
            </tr>
            <!--========= tr ====== -->
            
            
            `
            
        });
    })
    .catch(erore=>{
        console.log(erore);
    })
}

displayInfo()

function divWithDom(){
    // displayInfo()
    divContainer.innerHTML=`
    <table class="content-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>userName</th>
        <th>email</th>
        <th>address</th>
      </tr>
    </thead>


    <tbody>
    

   ${hi}

      
    </tbody>
  </table>
    
    
    
    
    `

}
btn.addEventListener('click',divWithDom)












/*
  <!--========= tr ====== -->
      <tr>
        <td style="display: flex; align-items: center">
          <div class="img" style="margin-right: 5px"></div>
          <span class="content">Domenic</span>
        </td>
        <td>Domenic</td>
        <td>88,110</td>

        <!--  -->
        <td class="address">
          #

          <table class="allAdresses">
            <!-- <img src="./images/img3.png" width="100" alt=""> -->
            <tbody>

              <tr>
                <td>street</td>
                <td>Kulas Light</td>
              </tr>

              <tr>
                <td>suite</td>
                <td>Apt. 556</td>
              </tr>


              <tr>
                <td>city</td>
                <td>Gwenborough</td>
              </tr>


              <tr>
                <td>zipcode</td>
                <td>92998-3874</td>
              </tr>
            </tbody>
          </table>

        </td>
      </tr>
      <!--========= tr ====== --> */


