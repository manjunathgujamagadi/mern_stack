import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div>
      <div className='container'>
       <label htmlFor="">Name</label>
       <input  name='name' type="text" /> <br />
       <label htmlFor="">Email</label>
       <input  name='name' type="text" /> <br />
       <label htmlFor="">Mobile No</label>
       <input  name='name' type="text" /><br />

       <select name="" id="">
        <option value="">Sales</option>
        <option value="">HR</option>
        <option value="">Opearations</option>
       </select><br />
       <label htmlFor="">Gender</label>
       <input type="radio" /> <label htmlFor="">M</label>
       <input type="radio" /> <label htmlFor="">F</label><br />
       <label htmlFor="">Course</label>
       <input type="checkbox" />
       <label htmlFor="">MCA</label>
       <input type="checkbox" />
       <label htmlFor="">BCA</label>
       <input type="checkbox" />
       <label htmlFor="">BSC</label>

      </div>

    </div>
  )
}
 
export default Home