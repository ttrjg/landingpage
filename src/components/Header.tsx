import logo from '../assets/logo.svg';

export function Header() {
   return (
      <div className="flex items-center justify-center mt-2 mb-2">
         <img src={logo} alt="logo" />
      </div>
   )
}

