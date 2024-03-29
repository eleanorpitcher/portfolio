import React from 'react'
import LocationPin from '../assets/location-pin.png'

function Intro() {
  return (
    <div>
    <div className="container-fluid d-flex flex-column align-items-center text-center" >
          <h1 className="m-4 row">Hi, I'm Eleanor,</h1>
          <h2 className="display-1 m-4 fw-bold" style={{letterSpacing: '-4px'}} >A Front-End Developer.</h2>
        </div>
        <div className="container-fluid d-flex flex-column align-items-center text-center">
          <div className="row text-center justify-content-center">
            <p className="col-7 fs-3 m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo commodi laborum magni fuga perferendis quasi impedit enim pariatur consectetur dolorem ipsum libero deserunt expedita non, officia, ullam vel rem quidem!</p>
          </div>
        </div>
        

        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
            <div className="col-1 col-md-1 mt-4">
              <img src={LocationPin} style={{height: '30px', width: 'auto' }}/>
            </div>
            <div className="col-1 col-md-1 mt-4">
              <p className='fs-5 fw-bold'>Barcelona</p>
            </div>    
            </div>
        </div>
    </div>
  )
}

export default Intro