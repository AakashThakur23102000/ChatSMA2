import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Image from "next/image"
import Banner1 from "/public/shop_banner1.png"
import Banner2 from "/public/shop_banner2.png"
import Banner3 from "/public/shop_banner3.png"

function BannerS() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-50 to-transparent bottom-0 z-20"/>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}>
                    <div>
                        <Image loading="lazy" src={Banner2} alt=""/>
                    </div>
                    <div>
                        <Image loading="lazy" src={Banner1} alt=""/>
                    </div>
                    <div>
                        <Image loading="lazy" src={Banner3} alt=""/>
                    </div>

            </Carousel>
            
        </div>
    )
}

export default BannerS
