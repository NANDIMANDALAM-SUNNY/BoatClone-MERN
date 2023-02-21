import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Offers = () => {
  return (
    <>
        <div className='offermain d-flex justify-content-around' >
            <div className='d-flex justify-content-around'>
                <div>
                    <img width='40px' src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_2_small.png?v=1663586590'/>
                </div>
                <div >
                    <p style={{margin:0,fontWeight:"700"}} >1 YEAR</p>
                    <p style={{margin:0,fontWeight:"700"}}>WARRANTY</p>
                </div>
            </div>
            <div>
            <div className='d-flex justify-content-around'>
                <div>
                    <img width='40px' src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_3_small.png?v=1663586612'/>
                </div>
                <div >
                    <p style={{margin:0,fontWeight:"700"}} >FREE 7 DAYS</p>
                    <p style={{margin:0,fontWeight:"700"}}>REPLACEMENT</p>
                </div>
            </div>
            </div>
            <div>
            <div className='d-flex justify-content-around'>
                <div>
                    <img width='40px' src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_1_small.png?v=1663586576'/>
                </div>
                <div >
                    <p style={{margin:0,fontWeight:"700"}} >FREE</p>
                    <p style={{margin:0,fontWeight:"700"}}>SHIPPING</p>
                </div>
            </div>
            </div>
            <div>
            <div className='d-flex justify-content-around'>
                <div>
                    <img width='40px' src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_4_small.png?v=1663586627'/>
                </div>
                <div >
                    <p style={{margin:0,fontWeight:"700"}} >SECURE </p>
                    <p style={{margin:0,fontWeight:"700"}}>CHECKOUT</p>
                </div>
            </div>
            </div>
            <div>
            <div className='d-flex justify-content-between'>
                <div>
                    <img width='40px' src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/icon-black-v1_small.png?v=1661245767'/>
                </div>
                <div >
                    <p style={{margin:0,fontWeight:"700"}} >GST</p>
                    <p style={{margin:0,fontWeight:"700"}}>BILLLING</p>
                </div>
            </div>
            </div>
        </div>
        {/* curosel */}
        <Carousel autoPlay>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/trinity-web_c5e16c27-35b7-498b-a046-bdec250d517b_1600x.jpg?v=1676960518" />
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/DD-Desktop_1600x.jpg?v=1676020067" />
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/DC-Desktop-Banner_1600x.jpg?v=1676607577" />
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/trinity-web_c5e16c27-35b7-498b-a046-bdec250d517b_1600x.jpg?v=1676960518" />
                </div>
            </Carousel>

    </>
  )
}

export default Offers