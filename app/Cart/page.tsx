import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';


export default function product(){
    return(
        <div className="w-[100%]">
            <div className="lg:flex lg:justify-between w-[90%] xl:w-[70%] my-4 mx-auto">
                <h1 className="text-[32px] font-bold">Bag</h1>
                <div className="py-10 ">
                <div className="flex gap-3 py-10 w-[550px] border-b border-[#E5E5E5]">
                    <Image src="/chair3.png" alt="cart" width={180} height={150}/>
                    <div>
                        <div className="flex justify-between w-[300px] py-10">
                            <h1 className="text-[20px]"> Library Stool Chair</h1>
                            <p className="font-bold">MRP: $99</p>
                        </div>
                        <p>Ashen Slate/Cobalt Bliss</p>
                        <p>Size:L Quantity:1</p>
                        <div className="flex gap-3 py-5">
                        <FontAwesomeIcon icon={faHeart}  className="w-[22px] h-[22px]"/>
                        <FontAwesomeIcon icon={faTrashCan} className="w-[22px] h-[22px]"/>
                        </div>


                    </div>
                </div>
                <div className="flex gap-3 py-10 w-[550px] border-b border-[#E5E5E5]">
                    <Image src="/chair2.png" alt="cart" width={180} height={150}/>
                    <div>
                        <div className="flex justify-between w-[300px] py-10">
                            <h1 className="text-[20px]"> Library Stool Chair</h1>
                            <p className="font-bold">MRP: $99</p>
                        </div>
                        <p>Ashen Slate/Cobalt Bliss</p>
                        <p>Size:L Quantity:1</p>
                        <div className="flex gap-3  py-5">
                        <FontAwesomeIcon icon={faHeart}  className="w-[22px] h-[22px]"/>
                        <FontAwesomeIcon icon={faTrashCan} className="w-[22px] h-[22px]"/>
                        </div>
                    </div>
                </div>
                </div>
                <div className=" py-12 text-[12px]">
                    <h1 className="font-bold text-[20px]">Summary</h1>
                    <div className="py-5 px-4 flex justify-between">
                    <p>Subtotal</p>
                    <p>$198.00</p>
                    </div>
                    <div className=" py-5 px-4 flex justify-between">
                    <p>Estimated Delivery & Handling</p>
                    <p>Free</p>
                    </div>
                    <div className="py-5 px-4 flex justify-between border-b border-t border-[#E5E5E5]">
                    <p>Totle</p>
                    <p>$198.00</p>
                    </div>
                    <button className="border rounded-[30px] bg-[#029FAE] p-2 mx-6 my-5 w-[233px] text-[#FFFFFF] hover:shadow-[0px_0px_5px_#029FAE]">Member Checkout</button>
                </div>


            </div>


        </div>
    )}