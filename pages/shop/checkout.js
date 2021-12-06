import Header from "../../components/Header"
import HeaderS from "../../components/HeaderS"
import Image from "next/image"
import CheckoutLOGO from "../../public/checkoutS.png"

function checkout() {
    return (
        <div className="bg-gray-50">
            <Header/>
            <HeaderS/>

            <main className="lg:flex max-w-screen-2xl mx-auto">
                {/*Left*/}
                    <div className="flex-grow m-5 shadow-sm">
                        <Image
                            src={CheckoutLOGO}
                            width={1020}
                            height={250}
                            objectFit="contain"
                            />
                        <div className="flex flex-col p-5 space-y-10 bg-white">
                            <h1 className="text-3xl border-b pb-4">Your Shopping Basket</h1>
                        </div>    
                    </div>
                {/*Right*/}

            </main>
        </div>
    )
}

export default checkout
