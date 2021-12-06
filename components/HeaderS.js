import React from "react";
import Image from "next/image";
import Logo3 from "/public/logo_shop.png";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter} from "next/router";



const HeaderS= () => {
    const { data: session } = useSession();
    const router = useRouter();

    return (
        <header className="bg-white">
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
            <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-blue-400 hover:bg-blue-500">
                <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                <SearchIcon className="h-12 p-4 "/>
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
            {/* bottom nav */}
            <div className="flex items-center space-x-3 p-2 pl-6 bg-purple-50 text-sm">
                
                <p className="linkS">Today's Deals</p>
                <p className="linkS hidden lg:inline-flex">Electronics</p>
                <p className="linkS hidden lg:inline-flex">Food & Grocery</p>
                
                <p className="linkS hidden lg:inline-flex">Buy Again</p>
                <p className="linkS hidden lg:inline-flex">Toolkit</p>
                <p className="linkS hidden lg:inline-flex">Health</p>
            </div>
            
        </header>
    )
}

export default HeaderS
