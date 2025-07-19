import React from 'react'

function About() {
  return (
    <>
      <div className='d-flex flex-column'>
        <div style={{margin:"40px",width:"100vw",height:"700px",backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage:"url('./truckimages.png')"}}>
          About
        </div>
        <div className='d-flex flex-row mb-5'>
          <h2>Customer Driver Relation</h2>
          <img style={{width:"900px", height:"500px"}} src="./customerdriver.jpeg" alt="" />
        </div>
        <div className='d-flex flex-row'>
          <img style={{width:"500px", height:"500px",marginRight:"0px"}} src="./bike.jpeg" alt="" />
          <h2>Shift anything with us</h2>
        </div>
      </div>
    </>
  )
}

export default About