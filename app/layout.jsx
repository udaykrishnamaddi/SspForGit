// import '@styles/global.css';
'use client'
import '../styles/global.css'
import { Provider } from 'react-redux';
import {Store} from "./Redux/Store"
import Nav from './components/Nav';
import { Modal } from '@nextui-org/react';
import { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic';


const RootLayout = ({children}) => {
  const[isclient,setclient]=useState(false)
  useEffect(()=>{
  setclient(true)
  },[])
  return (
    <html lang='en'>
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" />
      </head>
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