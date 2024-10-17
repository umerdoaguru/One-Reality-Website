import React from 'react'
import styled from 'styled-components'

function PrivacyPolicy() {
  return (
   <Wrapper>
   <h1 className='text-center mt-3 mb-4'>Privacy Policy</h1>
   
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

              <div className="container mb-4">

                <ul className=''>
                    <li><span>What data is collected :</span> The types of data collected, such as name, date of birth, and location </li>
                    <li><span>How data is collected :</span> Whether data is collected through user entry or cookies </li>
                    <li><span>How data is used :</span>  What the data is used for, such as marketing, usability, or service functionality </li>
                    <li><span>Who has access to the data :</span> Whether the data is shared with third parties or partners, and if it's sold to other businesses</li>
                    <li><span>How data is stored and protected :</span> How the data is stored and protected, such as through encryption or service locality </li>
                    <li><span>How to opt out :</span> How users can opt out of the policy and request deletion of their data 
 </li>
                    <li><span>Contact information : </span>
                    Contact information for privacy-related requests </li>
                    <li><span>Effective date : </span>   The date the policy comes into effect</li>
                </ul>
              </div>
   
   </Wrapper>
  )
}

export default PrivacyPolicy

const Wrapper = styled.div`
    
    li{
        margin-top: 2rem;
    }
    span{
        font-weight: bold;
    }
`