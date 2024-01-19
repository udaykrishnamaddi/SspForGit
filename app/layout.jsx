// import '@styles/global.css';
'use client'
import '../styles/global.css'
import { Provider } from 'react-redux';
import {Store} from "./Redux/Store"
import Nav from './components/Nav';
import { Modal } from '@nextui-org/react';
import { useEffect, useState } from 'react';



const RootLayout = ({children}) => {
  const[isclient,setclient]=useState(false)
  useEffect(()=>{
  setclient(true)
  },[])
  return (
    <html lang='en'>
        <body>
            <div>
                <div />
            </div>
            <main>
                {/* <Nav/> */}
                
               
                <Provider store={Store()}>{children}</Provider>
                

            </main>


        </body>

    </html>
  )
}

export default RootLayout