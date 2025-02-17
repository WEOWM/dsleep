import { CgArrowLongDown } from "react-icons/cg";

const Booknow = ({className}) => {
  return (
    <button className={`px-5 py-2 border rounded-full flex items-center gap-3 ${className}`}>Book now <CgArrowLongDown className="-rotate-90" size={25}/></button>
  )
}

export default Booknow