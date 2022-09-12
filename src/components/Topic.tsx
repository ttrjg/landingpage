interface getText {
   title: string;
   text: string;
}


export function Topic(props:getText){
   return (
      <li className="mb-4 ">
         <h3 className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white mb-4 w-fit">
            {props.title}
         </h3>
         <p className="text-justify p-2 rounded-lg bg-gradient-to-br from-white to-blue-100/60 backdrop-blur-sm text-[#7A9424]">
            {props.text}
         </p>
      </li>
   )
   
}