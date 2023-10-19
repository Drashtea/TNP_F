import React from "react";
import pic from "./back.jpg"

function TnpDashboard()
{
   return(
   <div class="col main pt-5 mt-3">
    <img src={pic} style={{width: "100%",height: "auto",filter: "blur(4px)"}}/>
   </div>
   );
}

export default TnpDashboard;