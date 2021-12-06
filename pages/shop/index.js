import Header from "../../components/Header"
import HeaderS from "../../components/HeaderS"
import BannerS from "../../components/BannerS"
import ProductFeedS from "../../components/ProductFeedS"
function index({products}) {
    return (
        <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
            <Header/>
            <HeaderS/>

            <main className="max-w-screen-2xl mx-auto">
                {/**banner */}
                <BannerS />


                {/* product feed  */}
                <ProductFeedS products={products}/>
                
            </main>

        </div>
    )
}

export default index


export async function getServerSideProps(context) {
    const products = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json(),
    );

    return { props: {
        products,
    }}
}
