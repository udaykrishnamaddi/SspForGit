import { useState } from "react";

const Updatemodal=({empdata,onclose})=>{
    console.log("i am empat",empdata)
    // {
    //     empId: 1,
    //     name: "Tony Reichert",
    //     phoneno:"949474944",
    //     email: "tony.reichert@example.com",
    //     mana1Id:"5",
    //     mana2Id:"5",
    //     actions:"",
    //   },
    
    const [empId, setempId] = useState(empdata.empId || ''); // Use product.price as default value if available
    const [name, setname] = useState(empdata.name || '');
    const [phoneno,setphoneno]=useState(empdata.phoneno || '');
    const [email,setemail]=useState(empdata.email || '');
    const [mana1id,setmana1id]=useState(empdata.mana1Id || '');
    const [mana2id,setmana2Id]=useState(empdata.mana2Id || '');
  
       return(
          <>
          <div className="popup shadow-sm w-1/2 z-10 justify-center my-10 ">
          <div className="popup-inner ">
          
          <form className="flex  border  bg-gray-400 rounded h-auto flex-col gap-4 w-auto max-w-md ">
        
        <div className="row mx-auto m-8 text-center rounded-md w-auto ">
            
            <h3 className="text-xl  font-serif text-black opacity-1">Update Product Details</h3>
            
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto"  defaultValue={empId}  placeholder="Employee Id"/>
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "   defaultValue={name} placeholder="Emp Name" />
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "   defaultValue={phoneno} placeholder="Emp Phone no" />
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto"  defaultValue={email}  placeholder="Employee email"/>
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "   defaultValue={mana1id} placeholder="Manager-1 Id" />
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "   defaultValue={mana2id} placeholder="Manager-2 Id" />
            
          
        
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