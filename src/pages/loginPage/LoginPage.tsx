import { useState } from "react"


const LoginPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    mail: '',
    password: '',
    street: '',
    auth: false

  })

  const {name, mail, password, street} = formState;

  const handleChange = ({ target } : any) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !mail || !password || !street) "there is missing information"
  
    const newUser = {
      name,
      mail,
      password,
      street
    }
  }
  return (
    <>
    <main className="mx-[25%] my-28 p-10 bg-slate-100 flex text-center flex-col rounded-3xl shadow-2xl">
    <form >
        {/* <strong>You have an account?</strong><br /><br /> */}
        <input className="text-center  m-2" type="text" placeholder="Mail" /> <br />
            <input className="text-center m-2" type="text" placeholder="Password" /> <br />
        <button className="mt-5 p-2 bg-slate-500 rounded-xl">Login</button><br />
    </form>
    <br />
    <hr />
    <article className="formContainer bg-slate-100">
    <div className="flex flex-col"> 
        <strong className="p-5">New user</strong>
        <form className="" action="" >
            <input className="text-center  m-2" type="text" value={name} placeholder="Name" /> <br />
            <input className="text-center  m-2" type="text" value={mail} placeholder="Mail" /> <br />
            <input className="text-center  m-2" type="text" value={password} placeholder="Password" /> <br />
            <input className="text-center  m-2" type="text" value={password} placeholder="Repeat Password" /> <br />
            <input className="text-center  m-2" type="text" value={street} placeholder="Street" /> <br />
            <button type="submit" onSubmit={handleSubmit} className="mt-5 p-2 bg-slate-500 rounded-xl">Registrer</button>
           
         
        </form>      
        
    </div></article>
    </main>
    </>
  )
}

export default LoginPage