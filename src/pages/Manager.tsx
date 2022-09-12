
import { Header } from "../components/Header";
import { MessageModal } from "../components/MessageModal";
import { useGetSubscriberQuery } from "../graphql/generated";
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CSVLink } from "react-csv";
import { FileArrowDown } from "phosphor-react";


export function Manager(){

    const { data } = useGetSubscriberQuery() 

    let csvData:Array<any> = [["Nome", "Email", "Telefone", "Mensagem", "Enviado"]]
        
        data?.subscribers.map(data => {
          let row:Array<string> = []
          row.push(data.name)
          row.push(data.email)
          row.push(data.phone)
          row.push(data.message)
          row.push(data.createdAt)
          csvData.push(row)
        })

  
    
  
   return (

      <div className="w-screen h-screen bg-gray-100 overflow-hidden">
        <Header />

        <div className="flex mt-24 flex-col">

          <table className="table-fixed mx-10 border-collapse shadow-sm bg-slate-200 overflow-scroll max-h-full">
            <thead>
              <tr className="border-y border-slate-100 bg-slate-300">
                <th className="p-2">Nome</th>
                <th className="p-2">Email</th>
                <th className="p-2">Telefone</th>
                <th className="p-2">Mensagem</th>
                <th className="p-2">Enviado</th>
              </tr>
            </thead>
            <tbody className="">
                    {data?.subscribers.map(subs => { 
                      const newDate = new Date(subs.createdAt)
                      const availableDateFormatted = format(newDate, "EEEE' • 'd' de ' MMMM' • 'k'h'mm", {locale: ptBR})
                      return (
                        <tr className="border-y border-t-2 border-slate-100 ">
                          <td className=" p-2 truncate text-center">{subs.name}</td>
                          <td className=" p-2 truncate text-center">{subs.email}</td>
                          <td className=" p-2 truncate text-center">{subs.phone}</td>
                          <td className=" p-2 flex justify-center relative overflow-visible"><MessageModal message={subs.message} /></td>
                          <td className=" p-2 truncate text-center">{availableDateFormatted}</td>
                        </tr>
                      )
                    })}
            </tbody>
          </table>
          <div className="flex items-start ml-6">
            <button  className="px-4 py-2 bg-blue-500 mt-10 ml-5w-1/2 rounded-3xl p-2 font-bold text-gray-200 shadow-md hover:scale-105 transition-all transform-gpu cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-500 ml-5 flex items-center gap-2">
              <FileArrowDown size={32} />
              <CSVLink data={csvData}>Expotar para excel</CSVLink>           
            </button>
          </div>
          
        </div>

      </div>
   )
}