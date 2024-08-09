import React from 'react'
import sbi from '../../images/sbi.webp'
import pnb from '../../images/pnb.webp'
import bank_of_india from '../../images/bank_of_india.webp'
import barodra from '../../images/barodra.webp'
import hdfc from '../../images/hdfc.webp'
import indian_bank from '../../images/indian_bank1.png'
import icici from '../../images/icici.webp'
import union from '../../images/union.webp'
import lic from '../../images/lic.webp'
import iifl_bank from '../../images/iifl_bank.jpg'
import Axis_Bank from '../../images/Axis_Bank.png'
import Bandhan_Bank from '../../images/Bandhan_Bank.png'
import styled from 'styled-components'



function Bank_Partner() {
  return (
    <Wrapper>
    <div className="container-fluid mt-5 mb-5" >
        <div  className="container">

<h2 className='text-center'>
Our Banking Partner
</h2>
<div
                className="underline mx-auto"
                style={{
                  height: 3,
                  width: "4rem",
                  backgroundColor: "#34495E",

                  marginTop: 20,
                  marginBottom: 20,
                }}
              ></div>

<div className="row g-5">

    <div className="col-lg-3 col-md-4 text-center " data-aos="zoom-in"> 
        <img src={sbi} alt="" />
    </div>
    <div className="col-lg-3 col-md-4 text-center  " data-aos="zoom-in">
          <img src={pnb} alt="" />
    </div>
    <div className="col-lg-3 col-md-4 text-center  " data-aos="zoom-in">
          <img src={barodra} alt="" />
    </div>
    <div className="col-lg-3 col-md-4 text-center  " data-aos="zoom-in">
          <img src={bank_of_india} alt="" />
    </div>
    <div className="col-lg-3 col-md-4 text-center  " data-aos="zoom-in">
          <img src={icici} alt="" />
    </div>
    <div className="col-lg-3 col-md-4 text-center  " data-aos="zoom-in">
          <img src={lic} alt="" />
    </div>
    <div className="col-lg-3 col-md-4 text-center marginset " data-aos="zoom-in">
          <img src={indian_bank} alt="" />
    </div>
    <div className="col-lg-3 col-md-4 text-center marginset1 " data-aos="zoom-in">
          <img src={iifl_bank} alt="" />
    </div>
   
   

   
    <div className="col-lg-3 col-md-4 text-center hdfc " data-aos="zoom-in">
          <img src={hdfc} alt="" />
    </div>
    <div className="col-lg-3 col-md-4 text-center  " data-aos="zoom-in">
          <img src={union} alt="" />
    </div>
    <div className="col-lg-3 col-md-4 text-center  " data-aos="zoom-in">
          <img src={Axis_Bank} alt="" />
    </div>
    <div className="col-lg-3 col-md-4 text-center bb  " data-aos="zoom-in">
          <img src={Bandhan_Bank} alt="" />
    </div>
    </div>
   
  


        </div>


    </div>
    
    
    
    </Wrapper>
  )
}

export default Bank_Partner

const Wrapper = styled.div`

img{
      width: 15rem;
}
h2{
      /* color: #006c28; */
      
      
      color: #01614e;
      /* color: #d29b33; */
      font-family: "Playfair Display";

}
.marginset{
      margin-top: -0rem;
      @media screen and (max-width: 768px) {
            margin-top: 2rem;
            
      }
}
.marginset1{
      margin-top: -0.4rem;
      @media screen and (max-width: 768px) {
            margin-top: 0rem;
            
      }
}
.bb{
     
      @media screen and (max-width: 768px) {
            margin-top: 4rem;
            
      }
}
.hdfc{
     
      @media screen and (max-width: 768px) {
            margin-top: -1rem;
            
      }
}


`