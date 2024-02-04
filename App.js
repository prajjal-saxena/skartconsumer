import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'

const App = () => {

  const [isChecked, setIsChecked] = useState(false)
  const [getCustomer, setGetCustomer] = useState([])

  const handleCheckboxChange = () => {
     setIsChecked(!isChecked)
  }

  const getData = async() => {
    const res = await axios.get('http://localhost:5000/customer-type-data')
    setGetCustomer(res.data)
  }

  const [directName, setDirectname] = useState('');
  console.log("direc", directName)
  const [postData, setPostData] = useState({
     customer : '',
     legal_name : '',
     party_code : '',
     iec_no : '',
     eori_no : '',
     parent_id : '',
     pan_no : '',
     tan_no : '',
     gstin_no : ''
  })
  
  const  getCustomername=useCallback((newCustomerName)=>{
    debugger
    setPostData({
      ...postData,
      customer: newCustomerName
    });
  },[])

  // useEffect(()=>{
  //   updateCustomerInPostData(directName);
  // },[directName])
console.log(postData.customer)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
      // customer: name === 'customer' ? directName : null ,
    }));
  };


  const handleSubmit = async(e) => {
      e.preventDefault()

       try{
         const response = await axios.post('http://localhost:4500/customer', postData)
       }
       catch{
         console.log("Error ")
       }
  }

  const handleCustomerTypeChange = (elem) => {
     setDirectname(elem)
  }

  useEffect(() => {
    if(directName !==null && directName !=="" ){
      getCustomername(directName)
    }
    getData()
  },[directName])

  return (
    <>
       <div>
         <div>
            <table className='table'>
               <thead>
                  <tr>
                    <th scope='col'>#</th>
                    <th>Customer Type</th>
                    <th>Vendor Type</th>
                    <th>Company List</th>
                    <th>Type of Customer</th>
                    <th>Legal Name</th>
                    <th>Party Name</th>
                    <th>IEC Number</th>
                    <th>EORI Number</th>
                    <th>Parent Id</th>
                    <th>PAN Number</th>
                    <th>TAN Number</th>
                    <th>GSTIN Number</th>
                  </tr>
               </thead>
               <tbody>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>

               </tbody>
            </table>
         </div>


         <div>
           <div className='container'>
             <form onSubmit={handleSubmit}>
              <div className='d-flex justify-content-between'>
                  <div>
                        <p><input checked={isChecked} onChange={handleCheckboxChange} class="form-check-input" name='customer' value={directName} type="checkbox"  id="exampleCheckbox"/>Customer Type</p>
                        {/* <p style={{display: 'none'}}><input type='text' onChange={handleInputChange}  name='customer' value={directName}/></p> */}
                        <div className='ml-4'>
                          {getCustomer.map((elem) => (
                              elem.ct_name === 'Customer' ?
                               <p><input disabled={!isChecked} onChange={()=> handleCustomerTypeChange(elem.ctype_name)} class="form-check-input" type="checkbox" value='' id="exampleCheckbox"/>{elem.ctype_name}</p>
                               : null  
                          ))}
                          
                        </div>
                  </div>
                  <div>
                        <p><input class="form-check-input" type="checkbox" value="" id="exampleCheckbox"/>Vendor Type</p>
                        <div className='ml-4'>
                          <p><input class="form-check-input" type="checkbox" value="" id="exampleCheckbox"/>Prajjal</p>
                          <p><input class="form-check-input" type="checkbox" value="" id="exampleCheckbox"/>Akshay</p>
                          <p><input class="form-check-input" type="checkbox" value="" id="exampleCheckbox"/>Amit</p>
                        </div>
                  </div>           
              </div>

              <div className='d-flex justify-content-between'>
                  <div>
                      <p><input class="form-check-input" type="checkbox" value="" id="exampleCheckbox"/>Company List</p>
                        <div className='ml-4'>
                          <p><input class="form-check-input" type="checkbox" value="" id="exampleCheckbox"/>Prajjal</p>
                          <p><input class="form-check-input" type="checkbox" value="" id="exampleCheckbox"/>Akshay</p>
                          <p><input class="form-check-input" type="checkbox" value="" id="exampleCheckbox"/>Amit</p>
                        </div>
                  </div>
                  <div>
                    <label for="cars">Type of Customer</label>
                    <select name="cars" id="cars">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>           
              </div>


              <div className='d-flex justify-content-between'>
                  <div>
                    <label class="form-label">Legal Name</label>
                    <input type='text' name='legal_name' value={postData.legal_name} onChange={handleInputChange} />
                  </div>
                  <div>
                    <label class="form-label">Party Name</label>
                    <input type='text' name='party_code' value={postData.party_code}  onChange={handleInputChange}/>
                  </div>           
              </div>

              <div className='d-flex justify-content-between'>
                  <div>
                    <label class="form-label">IEC Number</label>
                    <input type='text' name='iec_no' value={postData.iec_no}  onChange={handleInputChange}/>
                  </div>
                  <div>
                    <label class="form-label">EORI Number</label>
                    <input type='text' name='eori_no' value={postData.eori_no} onChange={handleInputChange} />
                  </div>           
              </div>

              <div className='d-flex justify-content-between'>
                  <div>
                    <label class="form-label">Parent Id</label>
                    <input type='text' name='parent_id' value={postData.parent_id}  onChange={handleInputChange}/>
                  </div>
                  <div>
                    <label class="form-label">PAN Number</label>
                    <input type='text' name='pan_no' value={postData.pan_no}  onChange={handleInputChange}/>
                  </div>           
              </div>

              <div className='d-flex justify-content-between'>
                  <div>
                    <label class="form-label">TAN Number</label>
                    <input type='text' name='tan_no' value={postData.tan_no}  onChange={handleInputChange}/>
                  </div>
                  <div>
                    <label class="form-label">GSTIN Number</label>
                    <input type='text' name='gstin_no' value={postData.gstin_no}  onChange={handleInputChange}/>
                  </div>           
              </div>

              <button type='submit'>Submit</button>
            </form>
           </div>
         </div>


       </div>
    </>
  )
}

export default App
