import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Form(){

   const navigate = useNavigate()
   
   
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [message, setMessage] = useState('');

   
   const [createSubscriber, { loading }] = useCreateSubscriberMutation()
   
   async function handleSubscribe(event: FormEvent) {
      event.preventDefault()
   
      await createSubscriber({
         variables:{
            name,
            email,
            phone,
            message
         }
      })

      alert(`Obrigado por nos enviar seu contato!

Logo entraremos em contato para atende-lo`)
  
      navigate(0)
   }


   return (
      <div className="p-4 w-full flex max-w-xl mr-0 ml-auto box-content">
         <form onSubmit={handleSubscribe} className="ml-16 flex flex-col w-4/5 justify-center gap-2 bg-white/40 rounded-md p-4 shadow-lg backdrop-blur-sm">

            <header className="flex justify-center flex-col items-center">
               <h2 className="text-2xl text-center font-bold bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl py-2 px-6 text-white mb-4">
               Contate-nos!
               </h2>
               <p className="text-lg text-center font-bold bg-gradient-to-r from-[#ff5047] to-[#ffcc00] text-white py-1 px-4 rounded-3xl shadow-md">Faça um orçamento sem compromisso!</p>
            </header>
           
               <label htmlFor="name" className="text-[#1586ff] text-md tracking-wide  flex flex-col">
                  Nome:
                  <input 
                     type="text" 
                     name="name" 
                     placeholder="Digite seu nome"
                     required
                     className="p-2 rounded bg-gradient-to-br from-white to-blue-100 shadow-sm border border-blue-100 outline-cyan-500"
                     onChange={event => setName(event.target.value)} 
                  />
               </label>          
                      
               <label htmlFor="email" className="text-[#1586ff] text-md tracking-wide  flex flex-col">
                  E-mail
                  <input 
                     type="email" 
                     name="email" 
                     placeholder="seu@email.com"
                     required
                     className="p-2 rounded bg-gradient-to-br from-white to-blue-100 shadow-sm  border border-blue-100 outline-cyan-500"
                     onChange={event => setEmail(event.target.value)} 
                  />
               </label>
                       
               <label htmlFor="phone" className="text-[#1586ff] text-md tracking-wide  flex flex-col">
                  Telefone:
                  <input 
                     type="text"
                     name="phone" 
                     placeholder="(00) 12345-6789"
                     required
                     className="p-2 rounded bg-gradient-to-br from-white to-blue-100 shadow-sm  border border-blue-100 outline-cyan-500"
                     onChange={event => setPhone(event.target.value)}
                  />
               </label>       

               <label htmlFor="message" className="text-[#1586ff] text-md tracking-wide  flex flex-col">
                  Mensagem:
                  <textarea
                     name="message" 
                     placeholder="Deixe sua mensagem"
                     className="p-2 rounded bg-gradient-to-br from-white to-blue-100 shadow-sm  border border-blue-100 resize-none outline-cyan-500"
                     onChange={event => setMessage(event.target.value)}
                  ></textarea>
               </label>
            
            <div className="flex w-full justify-center mt-4">
               <button 
                  type="submit" 
                  disabled={loading}
                  className="w-1/2 rounded-3xl p-2 font-bold text-gray-200 shadow-lg hover:scale-105 transition-all transform-gpu cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-500 animate-glow">
                  Enviar
               </button>
            </div>
         </form>
      </div>
   )
}

