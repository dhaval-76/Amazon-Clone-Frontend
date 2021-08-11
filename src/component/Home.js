import React from "react";
import "../css/Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="background_img"
                />
                <div className="home_row">
                    <Product
                        id="487528"
                        key={487528}
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 October 2011"
                        image="https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UY327_FMwebp_QL65_.jpg"
                        rating={4}
                        price={500}
                    />
                    <Product
                        id="754275"
                        key={754275}
                        title="HP Pavilion Gaming 15.6-inch(39.62 cms) FHD Gaming Laptop (Ryzen 5-3550H/8GB/1TB HDD/M.2 Slot/Windows 10/NVIDIA GTX 1650 4GB/Shadow Black/2.25 kg), 15-ec0100AX"
                        image="https://images-na.ssl-images-amazon.com/images/I/71FeUtw%2BTPL._SL1500_.jpg"
                        rating={4}
                        price={53490}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="465788"
                        key={465788}
                        title="Helix Smart Watch Digital Black Dial Unisex-Adult Watch-TW0HXW204T"
                        image="https://images-na.ssl-images-amazon.com/images/I/81SWIot1FTS._UL1500_.jpg"
                        rating={4}
                        price={4299}
                    />
                    <Product
                        id="487475"
                        key={487475}
                        title="2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi, 128GB) - Space Grey (3rd Generation)"
                        image="https://images-na.ssl-images-amazon.com/images/I/81Y5WuARqpS._SL1500_.jpg"
                        rating={5}
                        price={69790}
                    />
                    <Product
                        id="186498"
                        key={186498}
                        title="All-new Echo Dot (4th Gen) | #1 smart speaker brand in India with Alexa (Blue)"
                        image="https://images-na.ssl-images-amazon.com/images/I/61Xg3SBl%2B2L._SL1000_.jpg"
                        rating={4}
                        price={4299}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="465778"
                        key={465778}
                        title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                        image="https://images-na.ssl-images-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg"
                        rating={5}
                        price={159900}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
