import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import CustFooter from "./CustFooter";
function Home(){
    return(
        <>   
        <Navbar></Navbar> 
         <Content></Content>
         <CustFooter></CustFooter>
         </>
    );
}

export default Home;