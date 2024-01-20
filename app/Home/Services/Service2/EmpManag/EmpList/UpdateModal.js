import { useState } from "react";

const Updatemodal=({empdata,onclose})=>{
    
    // {
    //     empId: 1,
    //     name: "Tony Reichert",
    //     phoneno:"949474944",
    //     email: "tony.reichert@example.com",
    //     mana1Id:"5",
    //     mana2Id:"5",
    //     actions:"",
    //   },
    
    const [Id, setId] = useState(empdata.id || ''); // Use product.price as default value if available
    const [firstname, setFirstname] = useState(empdata.firstname || '');
    const [lastname, setLastname] = useState(empdata.lastname || '');
    const [country,setCountry]=useState(empdata.country || '');
    const [cityoffice, setCityOffice] = useState(empdata.cityoffice || '');
    const [role, setRole] = useState(empdata.role || '');
    const [email,setemail]=useState(empdata.email || '');
    const [seniority,setSeniority]=useState(empdata.seniority || '');
    const [birthday,setBirthday]=useState(empdata.birthday || '');
    const [soe,setSoe]=useState(empdata.soe || '');
    const [startdate,setStartdate]=useState(empdata.startdate || '');
    const [enddate,setEnddate]=useState(empdata.enddate || '');
    const [status,setStatus]=useState(empdata.status || '');
    const [nation,setNation]=useState(empdata.nationality || '');

  
       return(
          <>
          <div className="popup shadow-sm w-1/2 z-10 justify-center my-10 ">
          <div className="popup-inner ">
          
          <form className="flex  border  bg-gray-400 rounded h-auto flex-col gap-4 w-auto max-w-md ">
        
        <div className="row mx-auto m-8 text-center rounded-md w-auto ">
            
            <h3 className="text-xl  font-serif text-black opacity-1">Update Employee Details</h3>
            
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto"  defaultValue={Id}  placeholder="Employee Id"/>
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "   defaultValue={firstname} placeholder="Employee FirstName" />
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "   defaultValue={lastname} placeholder="Employee LastName" />
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "   defaultValue={country} placeholder="Employee Country" />
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto"  defaultValue={cityoffice}  placeholder="Employee City Office"/>
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "   defaultValue={role} placeholder="role" />
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "   defaultValue={email} placeholder="email" />
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "   defaultValue={seniority} placeholder="Seniority" />
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "   defaultValue={birthday} placeholder="Birth-Date" />
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "   defaultValue={soe} placeholder="State of Employement" />
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "   defaultValue={startdate} placeholder="Start Date" />
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "   defaultValue={enddate} placeholder="End Date" />
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "   defaultValue={status} placeholder="Status" />
            <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "   defaultValue={nation} placeholder="Nationality" />
            
          
        
        </div>
        <div className="flex flex-col md:flex md:flex-row">
        <button
        className="bg-yellow-800  p-4 mb-5 w-auto mx-auto text-white rounded-md"
        
        >
          Save</button> 
        <button
        className="bg-black  p-4 mb-5 w-auto mx-auto text-white rounded-md"
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
  export default Updatemodal