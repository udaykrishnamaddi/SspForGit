import { useState } from "react";

const AddEmpModal=({onclose})=>{
    
    
  
       return(
          <>
          <div className="popup shadow-sm w-1/2 z-10 justify-center my-10 ">
          <div className="popup-inner ">
          
          <form className="flex  border  bg-gray-400 rounded h-auto flex-col gap-4 w-auto max-w-md ">
        
        <div className="row mx-auto m-8 text-center rounded-md w-auto ">
            
            <h3 className="text-xl  font-serif text-black opacity-1">Enter Employee Data</h3>
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto"   placeholder="Employee FirstName"/>
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto"   placeholder="Employee LastName"/>
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "   placeholder="Country" />
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "    placeholder="City Office" />
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "   placeholder="Role" />
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "    placeholder="Email" />
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "    placeholder="Seniority" />
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "    placeholder="Birthday" />
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "    placeholder="SOE" />
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "    placeholder="startdate" />
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "    placeholder="Nationality" />
            {/* <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "    placeholder="enddate" />
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "    placeholder="status" /> */}

          
        
        </div>
        <div className="flex flex-col md:flex md:flex-row">
        <button
        
        className="bg-green-500  p-4 mb-5 w-auto mx-auto text-white rounded-md"
        
        >
          Save</button> 
        <button
        className="bg-red-400  p-4 mb-5 w-auto mx-auto text-white rounded-md"
        onClick={onclose}   
        >
          Dismiss</button> 
  
        </div>
           
        </form>
          </div>
        </div>
          </>
       )
  
  }
  export default AddEmpModal