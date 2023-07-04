import Image from 'next/image'

export default function Home() {
  return (
    <section className="flex items-center justify-center h-[100vh]">
      <div className="flex flex-col items-center">
        <img src="/gmb-logo.png" alt="Logo GMB Consulting" className="w-[50%] max-2-[50%]"/>
        <h2 className="m-[1rem] font-extrabold text-[30px]">TaxEngine</h2>
        <form
          action="" method="post" autoComplete="off"
          className="flex flex-col gap-3 w-[100%] max-w-[100%]"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="text" name="email"
              className="p-[10px] bg-gray-400 outline-0 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Senha</label>
            <input
              type="text" name="password"
              className="p-[10px] bg-gray-400 outline-0 rounded"
            />
          </div>
          <button 
            type="submit"
            className="bg-green-700 p-[10px] text-gray-50 font-medium rounded"
          >Fazer Login</button>
        </form>
      </div>
    </section>
  )
}
