import ProductS from "./ProductS"
import Link from "next/link"

function ProductFeedS({products}) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
            
            {products
            .slice(0, 1)
            .map(({id, title, price, description, category, image}) => (
                <Link href="https://www.fjallraven.com/eu/en-gb/bags-gear/backpacks-bags/laptop-bags/foldsack-no-1">
                    <button>
                 <ProductS
                    key={id}
                    id={id}
                    title={title}
                    price={11995}
                    description={description}
                    category={category}
                    image={image}
                 />
                 </button>
                </Link>
             ))}
             

             {products
            .slice(1, 2)
            .map(({id, title, price, description, category, image}) => (
                <Link href="https://www.amazon.co.uk/Cyiozlir-Long-Sleeved-Placket-Sleeves-Baseball/dp/B086HVB8V9">
                    <button>
                 <ProductS
                    key={id}
                    id={id}
                    title={title}
                    price="15"
                    description={description}
                    category={category}
                    image={image}
                 />
                 </button>
                 </Link>
             ))}

             {products
            .slice(2, 3)
            .map(({id, title, price, description, category, image}) => (
                <Link href="https://www.amazon.com/Lega-Lightweight-Protect-Outdoor-Jackets/dp/B07BJ38ZFZ">
                    <button>
                 <ProductS
                    key={id}
                    id={id}
                    title={title}
                    price="60"
                    description={description}
                    category={category}
                    image={image}
                 />
                 </button>
                 </Link>
             ))}

             {products
            .slice(3, 4)
            .map(({id, title, price, description, category, image}) => (
                <Link href="https://botswana.desertcart.com/products/43627967-h-2-h-mens-casual-slim-fit-long-sleeve-v-neck-t-shirts">
                    <button>
                 <ProductS
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                 />
                 </button>
                 </Link>
             ))}

             <img className="md:col-span-full"
                    src="https://links.papareact.com/dyz"
                    alt=""
                />

            <div className="md:col-span-2">
            {products
            .slice(4, 5)
            .map(({id, title, price, description, category, image}) => (
                <Link href="https://www.snapdeal.com/product/qi-mign-viking-dragon-solid/619140454164">
                <button>
                 <ProductS
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                 />
                 </button>
                 </Link>
             ))}
            </div>

            {products
            .slice(5, 6)
            .map(({id, title, price, description, category, image}) => (
                <Link href="https://www.amazon.in/Somma-Swarovski-Zirconia-Solitaire-Brilliance/dp/B07B3PVZGZ">
                <button>
                 <ProductS
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                 />
                 </button>
                 </Link>
             ))}

            {products
            .slice(6, 7)
            .map(({id, title, price, description, category, image}) => (
                <Link href="https://www.instock2a.top/ProductDetail.aspx?iid=14033262&pr=64.88">
                <button>
                 <ProductS
                    key={id}
                    id={id}
                    title={title}
                    price="64.88"
                    description={description}
                    category={category}
                    image={image}
                 />
                 </button>
                 </Link>
             ))}
            
            {products
            .slice(7, 8)
            .map(({id, title, price, description, category, image}) => (
                <Link href="https://www.ebay.com/itm/111782172426?_trkparms=amclksrc%3DITM%26aid%3D1110006%26algo%3DHOMESPLICE.SIM%26ao%3D1%26asc%3D20200818143230%26meid%3D540d315405484364aacc9e7299d8460b%26pid%3D101224%26rk%3D4%26rkt%3D5%26sd%3D112411626638%26itm%3D111782172426%26pmt%3D0%26noa%3D1%26pg%3D2047675%26algv%3DDefaultOrganicWeb&_trksid=p2047675.c101224.m-1https://www.amazon.in/">
                <button>
                 <ProductS
                    key={id}
                    id={id}
                    title={title}
                    price="9.99"
                    description={description}
                    category={category}
                    image={image}
                 />
                 </button>
                 </Link>
             ))}

            {products
            .slice(9, 10)
            .map(({id, title, price, description, category, image}) => (
                <Link href="https://www.amazon.com/-/es/SanDisk-SSD-PLUS-interno-SDSSDA-1T00-G26/dp/B01F9G46Q8/ref=sr_1_11?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=sandisk%2B128gb%2Bsata&qid=1638631928&sr=8-11&th=1">
                <button>
                 <ProductS
                    key={id}
                    id={id}
                    title={title}
                    price="56.88" 
                    description={description}
                    category={category}
                    image={image}
                 />
                 </button>
                 </Link>

             ))}

            {products
            .slice(11, 12)
            .map(({id, title, price, description, category, image}) => (
                <Link href="https://www.amazon.com/-/es/WD-funciona-port%C3%A1til-Playstation-WDBDFF0020BBK-WESN/dp/B07HKN92MZ/ref=sr_1_8?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2OPXSW372POKZ&keywords=wd%2B2tb%2Bexternal%2Bhard%2Bdrive&qid=1638632016&sprefix=wd%2B2%2Caps%2C385&sr=8-8&th=1">
                <button>
                 <ProductS
                    key={id}
                    id={id}
                    title={title}
                    price="99.99"
                    description={description}
                    category={category}
                    image={image}
                 />
                 </button>
                 </Link>
             ))}

            {products
            .slice(12, 13)
            .map(({id, title, price, description, category, image}) => (
                <Link href="https://www.amazon.com/-/es/R241Y-Bbix-Tecnolog%C3%ADa-FreeSync-Ultrafino/dp/B08X4XZVXL/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=acer+sb220q+21.5-inch+bi%2C+full+hd+%281920+x+1080%29%2C+frameless+ultra-slim%2C+widescreen+%28hdmi+and+vga+ports%29%2C+black&qid=1638632111&sr=8-1">
                <button>
                 <ProductS
                    key={id}
                    id={id}
                    title={title}
                    price="208"
                    description={description}
                    category={category}
                    image={image}
                 />
                 </button>
                 </Link>
             ))}

            {products
            .slice(13, 14)
            .map(({id, title, price, description, category, image}) => (
                <Link href="https://www.amazon.com/Samsung-49-Inch-Curved-Monitor-LC49HG90DMNXZA/dp/B072C7TNC5">
                <button>
                 <ProductS
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                 />
                 </button>
                 </Link>
             ))}

            {products
            .slice(14, 15)
            .map(({id, title, price, description, category, image}) => (
                <Link href="https://www.amazon.com/MCS073-189-Rose-M/dp/B07ZHXJP91/ref=sr_1_1_sspa?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=biylaclesen%2BWOMEN%2B3-IN-1&qid=1638632373&sr=8-1-spons&smid=A3U9RCE56GV0D0&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyV0tESTI0U1RFOElWJmVuY3J5cHRlZElkPUEwMTY0MzQ3U1FSUUVXMERQMTQ0JmVuY3J5cHRlZEFkSWQ9QTAxNzczODdNWjZUOTlCVzZKWlomd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1&psc=1">
                <button>
                 <ProductS
                    key={id}
                    id={id}
                    title={title}
                    price="66 "
                    description={description}
                    category={category}
                    image={image}
                 />
                 </button>
                </Link>
             ))}

            {products
            .slice(15, products.length)
            .map(({id, title, price, description, category, image}) => (
                <Link href="https://www.amazon.in/">
                <button>
                 <ProductS
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                 />
                 </button>
                 </Link>
             ))}
        </div>
    )
}

export default ProductFeedS
