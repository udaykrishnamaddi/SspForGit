import { useState } from "react";

const Updatemodal=({onclose,empdata})=>{
    console.log(empdata.asstID,"check me");
    const [assetid, setassetid] = useState(empdata.asstID || ''); // Use product.price as default value if available
    const [name, setname] = useState(empdata.empName || '');
    const [empid,setempid]=useState(empdata.empId || '');
    const [asetdata,setasetdata]=useState(empdata.asstName || '');
  
       return(
          <>
          <div className="popup shadow-sm w-1/2 z-10 justify-center my-10 ">
          <div className="popup-inner ">
          
          <form className="flex  border  bg-gray-400 rounded h-auto flex-col gap-4 w-auto max-w-md ">
        
        <div className="row mx-auto m-8 text-center rounded-md w-auto ">
            
            <h3 className="text-xl  font-serif text-black opacity-1">Update Product Details</h3>
            
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto"  defaultValue={empdata.empName}  placeholder="Employee name"/>
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "   defaultValue={assetid} placeholder="asset Id" />
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "   defaultValue={asetdata} placeholder="Asset details" />
            
          
        
        </div>
        <div className="flex flex-col md:flex md:flex-row">
        <button
        className="bg-yellow-800  p-4 mb-5 w-auto mx-auto text-white rounded-md"
        
        >
          Update</button> 
        <button
        className="bg-black  p-4 mb-5 w-auto mx-auto text-white rounded-md"
        onClick={onclose}   
        >
          Close</button> 
  
        </div>
           
        </form>
          </div>
        </div>
          </>
       )
  
  }
  export default Updatemodal