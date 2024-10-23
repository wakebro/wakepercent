// ** Styles
import 'animate.css/animate.css'
import React from 'react'

interface SampleProps {
  children: React.ReactNode;
}

// const LayoutWrapper = (props: SampleProps) => {
function LayoutWrapper (props: SampleProps) {
  return (
    <div className='app-content content overflow-hidden' style={{paddingTop:'145px'}}>
      <div className='content-overlay'></div>
      <div className='header-navbar-shadow' style={{top:'30px'}}/>
      <div className='content-wrapper container-xxl p-0 animate__animated animate__fadeIn' style={{maxWidth:'none'}}>
        <div className='content-body'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default LayoutWrapper
