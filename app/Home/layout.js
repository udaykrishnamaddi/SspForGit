import React from 'react'
import Nav1 from '../components/nav4'
import Footer from "../components/Footer"
// import Footer from '@app/components/Footer'
const layout = ({children}) => {
  return (
    <div >
        
        <Nav1 />
        
        {children}
        {/* <Footer/> */}
    </div>
  )
}

export default layout