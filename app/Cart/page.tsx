import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';


export default function product(){
    return(
        <div className="w-[100%]">
            <div className="w-[90%] xl:w-[70%]  mx-auto">
                <h1>Bag</h1>
                <div className="flex gap-3 w-[600px]">
                    <Image src="/chair3.png" alt="cart" width={150} height={150}/>
                    <div>
                        <div className="flex justify-between w-[400px] py-10">
                            <h1 className="text-[20px]"> Library Stool Chair</h1>
                            <p className="font-bold">MRP: $99</p>
                        </div>
                        <p>Ashen Slate/Cobalt Bliss</p>
                        <p>Size:L Quantity:1</p>
                        <div className="flex gap-3">
                        <FontAwesomeIcon icon={faHeart}  className="w-[22px] h-[22px]"/>
                        <FontAwesomeIcon icon={faTrashCan} className="w-[22px] h-[22px]"/>
                        </div>


                    </div>
                </div>
                <div className="flex gap-3 w-[550px]">
                    <Image src="/chair2.png" alt="cart" width={150} height={150}/>
                    <div>
                        <div className="flex justify-between w-[400px] py-10">
                            <h1 className="text-[20px]"> Library Stool Chair</h1>
                            <p className="font-bold">MRP: $99</p>
                        </div>
                        <p>Ashen Slate/Cobalt Bliss</p>
                        <p>Size:L Quantity:1</p>
                        <div className="flex gap-3">
                        <FontAwesomeIcon icon={faHeart}  className="w-[22px] h-[22px]"/>
                        <FontAwesomeIcon icon={faTrashCan} className="w-[22px] h-[22px]"/>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )}