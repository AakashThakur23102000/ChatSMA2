import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import { async } from "@firebase/util"
import Header from "../../components/Header";
import Image from "next/image"
import Logo3 from "../../public/logo_big.png"
import Google from "../../public/Google.png"

function signin({ providers }) {
    return (
        <>
        <Header/>
       <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-37 px-14 text-center">
        < Image className="w-80"
            src={Logo3}
            alt=""
            />
        <p className="font-xs italic">
            -by Jadugars
        </p>

        <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <Image 
              
              src={Google}
              height={30}
              width={30}/>
            <button className="p-3 bg-blue-600 rounded-lg text-white" onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/' })}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
        </div>
       </div> 
      </>
    )
}
// server side render
export async function getServerSideProps() {
    const providers = await getProviders();

    return{
        props: {
            providers
        }
    }
}

export default signin
