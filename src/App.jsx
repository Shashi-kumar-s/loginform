import './App.css'
import { FormGroup,FormControl,Input,InputLabel,Button } from '@mui/material'

function App() {

  return (
    <>
     <div className=' max-w-screen-xxl '>
      <FormGroup className=' w-[90%] md:w-[40%] mx-auto pt-5 border mt-10 p-6 rounded-lg shadow-2xl'>
      <h1 className='font-bold text-center'>Signup Form</h1>
      <FormControl className='inpu'>
        <InputLabel variant='outlined'>Enter Your Name</InputLabel>
        <Input type='text' />
      </FormControl>
      <FormControl className="inpu">
        <InputLabel variant='outlined'>Email</InputLabel>
        <Input type='email'/>
      </FormControl>
      <FormControl className='inpu'>
        <InputLabel variant='outlined'>Phone</InputLabel>
        <Input type='phone'/>
      </FormControl>
      <FormControl className='inpu'>
        <InputLabel variant='outlined'>Password</InputLabel>
        <Input type='password'/>
      </FormControl>
      <FormControl className='inpu'>
        <InputLabel variant='outlined'>Confirm Password</InputLabel>
        <Input type='password'/>
      </FormControl>
      <div className='flex justify-center items-center mt-3 space-x-2'>
      <Button variant='contained' className='w-[30%]'>Login</Button>
      <Button variant='contained' className='w-[30%]'>Signup</Button>
      </div>
      </FormGroup>
    </div>
    </>
  )
}

export default App
