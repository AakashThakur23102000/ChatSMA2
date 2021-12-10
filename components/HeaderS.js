import React from "react";
import Image from "next/image";
import Logo3 from "/public/logo_shop.png";


import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter} from "next/router";



const HeaderS= () => {
    const { data: session } = useSession();
    const router = useRouter();

    return (
        <header className="bg-white sticky top-0 z-50">
            {/* top nav */}
            <div className="flex items-center p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0" >
                    <Image 
                        onClick={() => router.push('/shop')}
                        src={Logo3} 
                        alt=""
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                        />
                </div>
            
            {/* serarch bar */}
            
            <div className="hidden place-content-center sm:flex items-center h-10 rounded-md flex-grow space-x-12 cursor-pointer bg-blue-50 hover:bg-blue-100">
            
            <p className="cursor-pointer"
            onClick={() => router.push('/shop')}>Today's Deals</p>
            </div>
            
            {/* Right */}
            <div className="flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                <div className=" linkS">
                    <p onClick={signIn}> Hello user {session?.user?.username} </p>
                
                    <p onClick={signOut }  className="font-extrabold md:text-sm"> Log Out </p>
                    
                </div>
                
                <div className="linkS"><p>Returns</p>
                     <p className="font-extrabold md:text-sm">& Orders</p>
                </div>
                
                <div onClick={() => router.push('/shop/checkout')} className=" relative flex  items-center linkS">
                    
                    
                    
                </div>
            </div>

            </div>
            
            
        </header>
    )
}

export default HeaderS
