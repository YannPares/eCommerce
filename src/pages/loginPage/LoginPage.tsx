

const LoginPage = () => {
  return (
    <>
    <main className="relative mx-[35%] my-28 p-10 bg-slate-100 flex text-center flex-col rounded-3xl shadow-2xl">
    <div >
        <strong>You have an account?</strong><br /><br />
        <input className="text-center px-20 m-2" type="text" placeholder="Mail" /> <br />
            <input className="text-center px-20 m-2" type="text" placeholder="Password" /> <br />
        <button className="mt-5 p-2 bg-slate-500 rounded-xl">Login</button><br />
    </div>
    <br />
    <hr />
    <article className="formContainer bg-slate-100">
    <div className="flex flex-col"> 
        <strong className="p-5">New user</strong>
        <form className="" action="">
            <input className="text-center px-20 m-2" type="text" placeholder="Name" /> <br />
            <input className="text-center px-20 m-2" type="text" placeholder="Mail" /> <br />
            <input className="text-center px-20 m-2" type="text" placeholder="Password" /> <br />
            <input className="text-center px-20 m-2" type="text" placeholder="Repeat Password" /> <br />
            <input className="text-center px-20 m-2" type="text" placeholder="Street" /> <br />
            <button className="mt-5 p-2 bg-slate-500 rounded-xl">Registrer</button>
           
         
        </form>      
        
    </div></article>
    </main>
    </>
  )
}

export default LoginPage