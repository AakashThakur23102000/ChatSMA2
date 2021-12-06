import Image from "next/image"
import Logo1 from "../public/logo_big.png"
import Logo2 from "../public/logo_small.png"
import {
    SearchIcon,
    PlusCircleIcon,
    PaperAirplaneIcon,
    MenuIcon,
    PuzzleIcon
} from "@heroicons/react/outline"
import{ HomeIcon, ShoppingCartIcon} from "@heroicons/react/solid"
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/dist/client/router"
import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtoms"
import Link from 'next/link'

function Header() {
    const { data: session } = useSession();
    const [open, setOpen] = useRecoilState(modalState) 
    const router = useRouter();
    

    return ( 
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">                   
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
            {/*Left*/}
            
                <div onClick={() => router.push('/')} className="relative hidden lg:inline w-24 cursor-pointer" >
                    <Image src={Logo1} 
                           layout="fill"
                           objectFit="contain" />
                </div>

                <div onClick={() => router.push('/')} className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
                    <Image src={Logo2} 
                           layout="fill"
                           objectFit="contain" />
                </div>
              
            
            {/*Middle - seacrh input field */}
                <div className="max-w-xs">
                <div className="relative mt-1 p-3 rounded-md ">
                    <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                        <SearchIcon className='h-5 w-5 text-gray-500' />
                    </div>
                    <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md'
                     type="text" 
                     placeholder="Search" />
                </div>
                </div>   
            
            {/*Right*/}
            <div className="flex items-center justify-end space-x-4">
            
            <HomeIcon onClick={() => router.push('/')} className="navBtn"/>
            <MenuIcon className="h-6 md:hidden cursor-pointer"/>

            {session ? (
<>

<Link href="/chat">
<div className="relative navBtn">
<PaperAirplaneIcon className="navBtn rotate-90" />

</div>
</Link>   

<PlusCircleIcon onClick={() => setOpen(true)} className="navBtn"/>
<Link href="/Meme_Gen">
    <PuzzleIcon className="navBtn"/>
</Link>
<Link href="/shop">
    <div className="relative navBtn">
        <ShoppingCartIcon className="navBtn"/>
            
    </div>
</Link>

<img onClick={signOut} 
src={session.user.image}
alt="" 
className="h-10 rounded-full cursor-pointer"/>

</>

            ): (
                <button onClick={signIn}>Sign In</button>
            ) 
            }
            
            
            </div>

            </div>
        </div>
    )
}

export default Header;
