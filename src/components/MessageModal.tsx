import { Envelope } from "phosphor-react";
import { useState } from "react";

interface PropGetMessage {
   message: string;
}

export function MessageModal(props: PropGetMessage) {

   const [visible, setVisible] = useState(false)

   function toggleVisibility(){
      setVisible(!visible)
   }

   return (
      <div className=" overflow-visible">
         <button onClick={toggleVisibility}>
            <Envelope size={32} color="#64748b" weight="thin" />
         </button>
         
         {visible? (
               <div className={"absolute z-50 -bottom-72 -left-36 h-72 w-96 rounded-xl bg-gray-200 backdrop-blur-sm p-6 shadow-md flex-col border border-gray-300 "}>
                  
                  <header className=" w-full flex items-center gap-2">
                        <Envelope size={32} color="#ff5047" weight="thin" />
                        <p className="font-bold text-gray-600">Messagem</p> 
                  </header>
         
                  <div className="h-[1px] w-full bg-gradient-to-r from-gray-200 via-gray-800 to-gray-200 my-2">
                  </div>
         
                  <div className="flex items-center h-3/5">
                        {props.message}
                  </div>
         
                  <div className="h-[1px] w-full bg-gradient-to-r from-gray-200 via-gray-800 to-gray-200 my-2">
                  </div>
         
                  <div className=" w-full flex items-end justify-end">
                     <div onClick={toggleVisibility} className="mr-2 w-1/2 p-2 text-center rounded-xl font-bold text-gray-100 bg-gradient-to-r from-blue-600/80 to-cyan-500">
                           Fechar
                     </div>  
                  </div>
               </div> 
         ) : ("")}
                 
   </div>     
   )
}