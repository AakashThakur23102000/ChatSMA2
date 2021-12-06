import Link from "next/link"
import Image from "next/image"
import Aakash from "../public/profile_Aakash.png"
import Harsh from "../public/profile_Harsh.png"
import Aaryan from "../public/profile_Aaryan.png"
  

function Suggestions() {
    
 
    return (
        <div className="mt-16 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400">Contact US</h3>
                <button className="text-gray-600 font-semibold">JIMS Students</button>
            </div>

            
                
                    <div className="flex items-center justify-between mt-3">
                        <Image 
                            className="w-10 h-10 rounded-full border p-[2px]" 
                            src={Aakash} 
                            alt=""
                            height = {40} 
                            width={40} />
                        <div className="flex-1 ml-4">
                            <h2 className="font-semibold text-sm">Aakash Thakur</h2>
                             
                        </div>
                        <Link href = "https://www.instagram.com/aakashthakur20001972/">
                    <button className="text-blue-400 text-xs">View Profile</button>
                        </Link>
                    </div>    
                

                    
                    <div className="flex items-center justify-between mt-3">
                        <Image className="w-10 h-10 rounded-full border p-[2px]" src={Harsh} 
                            alt="" 
                            height = {40} 
                            width={40}/>
                        <div className="flex-1 ml-4">
                            <h2 className="font-semibold text-sm">Harsh Pratap Singh</h2>
                             
                        </div>
                        <Link href = "https://www.instagram.com/harshsingh7231/">
                    <button className="text-blue-400 text-xs">View Profile</button>
                        </Link>
                    </div>    

                    
                    <div className="flex items-center justify-between mt-3">
                        <Image className="w-10 h-10 rounded-full border p-[2px]" src={Aaryan}
                            height = {40} 
                            width={40}
                            alt="" />
                        <div className="flex-1 ml-4">
                            <h2 className="font-semibold text-sm">Aaryan Pratap Singh</h2>
                             
                        </div>
                        <Link href="https://www.instagram.com/aaryan.pratap/">
                    <button className="text-blue-400 text-xs">View Profile</button>
                        </Link>
                    </div>    
                
                
        </div>
    )
}

export default Suggestions
