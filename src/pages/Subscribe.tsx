import { Content } from "../components/Content"
import { Form } from "../components/form"
import { Header } from "../components/Header"
import Image from "../assets/background.jpg"

export function Subscribe() {
   return (
      <div className="h-screen flex flex-col items-center overflow-hidden ">

        <div>
          <img className="w-max h-full cover z-[-1] absolute left-0" 
          src={Image} 
          alt="" 
        />
        </div>

          <Header />

    
        <div className="h-full flex items-center">
          <div className="grid grid-cols-2 gap-auto max-w-[1100px]  ">
              <Content />
              <Form />
          </div>  
        </div>
    </div>
   )
}
