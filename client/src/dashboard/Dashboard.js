import pic from "./back.jpg"
import React, { useEffect, useState } from 'react'

function Dashboard()
{

  
   return(
   <div class="col main pt-5 mt-3">
    <img src={pic} style={{width: "100%",height: "auto",filter: "blur(4px)"}}/>
   </div>
   );
}

export default Dashboard;