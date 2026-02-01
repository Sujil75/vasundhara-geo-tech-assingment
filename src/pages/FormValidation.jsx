import React, {useState} from 'react'

import { BsEye } from "react-icons/bs";
import { RiEyeCloseLine } from "react-icons/ri";

function FormValidation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [error, setError] = useState("")    
  const [showPswd, setShowPswd] = useState(false)

  const handleChange = e => {
    const {name, value} = e.target

    setFormData({...formData, [name]: value.trim()})
    setError({...error, [name]: ""})
  }

  const handleClicks = e => {
    const {name} = e.target

    setError({...error, [name]: ""})
  }
    
  const handleSubmit = e => {
    e.preventDefault()
    const newErr = {}

    if (!formData.name) {
        newErr.name = "Name is required"
    }
    if (!formData.email) {
        newErr.email = "Email is required"
    }
    if (!formData.password) {
        newErr.password = "Password is required"
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (formData.email && !emailRegex.test(formData.email)) {
        newErr.email = "Invalid Email"
    }

    setError(newErr)
    if (Object.keys(newErr).length === 0) {
        alert("Form Submitted")
        console.log(formData)
        setFormData({name: "", email: "", password: ""})
    }
  }

  return (
    <div className='flex flex-col items-center gap-10 p-10'>
        <h1 className='font-bold text-[50px]'>Form Validation Register</h1>

        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4 w-[50%] p-10 rounded-[10px] border'>
            <div className='flex flex-col w-[50%] h-[100px]'>
                <label htmlFor='nameInput' className='font-bold text-[20px]'>Name</label>
                <input 
                    type='text' 
                    id='nameInput' 
                    placeholder='Enter you name here' 
                    className='box-border border h-[35px] rounded-[10px] p-5 outline-none'
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onClick={handleClicks}
                />
                <p className='pl-2 text-red-500'>{error.name}</p>
            </div>
            
            <div className='flex flex-col w-[50%] h-[100px]'>
                <label htmlFor='emailInput' className='font-bold text-[20px]'>Email</label>
                <input 
                    type='email' 
                    id='emailInput' 
                    placeholder='Enter email here' 
                    className='box-border border h-[35px] rounded-[10px] p-5 outline-none' 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onClick={handleClicks}
                />
                <p className='pl-2 text-red-500'>{error.email}</p>
            </div>
            
            <div className='flex flex-col w-[50%] h-[100px]'>
                <label htmlFor='passwordInput' className='font-bold text-[20px]'>Password</label>
                <div className='box-border border w-full flex items-center rounded-[10px]'>
                    <input 
                        type={!showPswd ? 'password' : 'text'} 
                        id='passwordInput' 
                        placeholder='Enter password here' 
                        className='box-border h-[35px] w-[85%] p-5 outline-none' 
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        onClick={handleClicks}
                    />
                    <button type='button' className='' onClick={() => setShowPswd(!showPswd)}>
                        {!showPswd ? 
                            <RiEyeCloseLine size="18" className='hover:cursor-pointer' /> : 
                            <BsEye size="18" className='hover:cursor-pointer' />
                        }
                    </button>
                </div>
                <p className='pl-2 text-red-500'>{error.password}</p>
            </div>
            
            <button type="submit" className='box-border p-3 pl-6 pr-6 bg-blue-600 text-white rounded-[8px] hover:bg-blue-800 cursor-pointer'>Submit</button>
        </form>
    </div>
  )
}

export default FormValidation