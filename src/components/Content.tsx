import { Topic } from "./Topic";


export function Content() {
   return (
      <div className="flex flex-col p-5">

         <h2 className="mb-4 text-3xl text-center font-bold text-white py-2 px-4 rounded-3xl bg-gradient-to-r from-[#ff5047] to-[#ffcc00] shadow-md  animate-grow">
            REDUZA SUA FATURA EM ATÉ 95%
         </h2>           

         <div className="flex flex-col justify-center items-center w-full ">
            <ul>
            
               <Topic title="Economia de energia" text="Não tendo mais que depender das tarifas energéticas os sistemas tem vida útil acima de 30 anos onde o retorno do seu investimento fica entre 4 e 6 anos!"/>

               <Topic title="Valorização do Imóvel" text="A instalação do sistema gera imediata valorização do imóvel em média de 10%, de acordo com a capacidade instalada!"/>

               <Topic title="Baixa Manutenção" text="Esse tipo de geração não requer um cuidado de manutenção exaustivo, apenas uma limpeza periódica!"/>
           
            </ul>

            <h3 className="p-2 w-full text-center text-md font-bold text-white bg-gradient-to-r from-[#ff5047] to-[#ffcc00] shadow-lg rounded-3xl" >
               SUSTENTABILIDADE ENERGÉTICA AJUDANDO NO SEU FUTURO!
            </h3>
         </div>
            
      </div>
   )
}