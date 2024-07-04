import React from 'react'
import sbi from '../../images/sbi.webp'
import pnb from '../../images/pnb.webp'
import bank_of_india from '../../images/bank_of_india.webp'
import barodra from '../../images/barodra.webp'
import hdfc from '../../images/hdfc.webp'
import yes from '../../images/yes.webp'
import icici from '../../images/icici.webp'
import union from '../../images/union.webp'
import lic from '../../images/lic.webp'
import kotak from '../../images/kotak.webp'
import styled from 'styled-components'



function Bank_Partner() {
  return (
    <Wrapper>
    <div className="container-fluid mt-5" >
        <div  className="container">

<h2 className='text-center'>
Our Banking Partner
</h2>

<div className="row">

    <div className="col-lg-4">
        <img src={sbi} alt="" />
    </div>
    <div className="col-lg-4">
          <img src={pnb} alt="" />
    </div>
    <div className="col-lg-4">
          <img src={barodra} alt="" />
    </div>
    <div className="col-lg-4">
          <img src={bank_of_india} alt="" />
    </div>
    <div className="col-lg-4">
          <img src={icici} alt="" />
    </div>
    <div className="col-lg-4">
          <img src={lic} alt="" />
    </div>
    <div className="col-lg-4">
          <img src={yes} alt="" />
    </div>
    <div className="col-lg-4">
          <img src={kotak} alt="" />
    </div>
    <div className="col-lg-4">
          <img src={lic} alt="" />
    </div>
</div>


        </div>


    </div>
    
    
    
    </Wrapper>
  )
}

export default Bank_Partner

const Wrapper = styled.div`


`