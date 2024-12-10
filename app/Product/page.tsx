import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';


export default function product(){
    return(
        <div  className='w-[100%] bg-[#FFFFFF]'>
            <div className="w-[90%] xl:w-[70%]  mx-auto">
        <h2 className="text-[34px] font-bold font-sans text-center mb-0 mt-8">Our Products</h2>
        <div className='flex my-10 justify-center lg:justify-start'>
          <div className="grid  gap-2 grid-cols-2 lg:grid-cols-4 mb-0">
            {/* Product 1 */}
    <div className="relative  w-[220px] h-[377px]">
      <Image
        src="/chair1.png"
        alt="Featured Products chairs"
        width={220}
        height={312}
        className="rounded-[6px] "
        priority
      />
      <button className="absolute top-2 left-2 bg-[#01AD5A] text-white px-2 py-1 text-xs rounded">
        New
      </button>
      <div className="flex justify-between items-center mt-4 px-2">
        <div>
          <h6 className="text-[18px] font-semibold hover:text-[#007580] cursor-pointer">
            Library Stool Chair
          </h6>
          <p className="text-gray-600 font-medium">$20</p>
        </div>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F0F2F3] text-black hover:bg-[#029FAE] flex items-center justify-center">
        <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]'/> 
        </button>
      </div>
    </div>

    {/* Product 2 */}
    <div className="relative w-[220px] h-[377px]">
      <Image
        src="/chair2.png"
        alt="Featured Products chairs"
        width={220}
        height={312}
        className="rounded-[6px] "
        priority
      />
      <button className="absolute top-2 left-2 bg-[#F5813F] text-white px-2 py-1 text-xs rounded">
        Sales
      </button>
      <div className="flex justify-between items-center mt-4 px-2">
        <div>
          <h6 className="text-[18px] font-semibold hover:text-[#007580] cursor-pointer">
            Library Stool Chair
          </h6>
          <p className="text-gray-600 font-medium">$20</p>
        </div>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F0F2F3] text-black hover:bg-[#029FAE] flex items-center justify-center">
        <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]'/> 
        </button>
      </div>
    </div>

    {/* Product 3 */}
    <div className="w-[220px] h-[377px]">
      <Image
        src="/chair3.png"
        alt="Featured Products chairs"
        width={220}
        height={312}
        className="rounded-[6px] "
        priority
      />
      
      <div className="flex justify-between items-center mt-4 px-2">
        <div>
          <h6 className="text-[18px] font-semibold hover:text-[#007580] cursor-pointer">
            Library Stool Chair
          </h6>
          <p className="text-gray-600 font-medium">$20</p>
        </div>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F0F2F3] text-black hover:bg-[#029FAE] flex items-center justify-center">
        <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]'/> 
        </button>
      </div>
    </div>

    {/* Product 4 */}
    <div className="w-[220px] h-[377px] ">
      <Image
        src="/chair4.png"
        alt="Featured Products chairs"
        width={220}
        height={312}
        className="rounded-[6px] "
        priority
      />
     
      <div className="flex justify-between items-center mt-4 px-2">
        <div>
          <h6 className="text-[18px] font-semibold hover:text-[#007580] cursor-pointer">
            Library Stool Chair
          </h6>
          <p className="text-gray-600 font-medium">$20</p>
        </div>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F0F2F3] text-black hover:bg-[#029FAE] flex items-center justify-center">
        <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]'/> 
        </button>
      </div>
    </div>
            {/* Product 1 */}
            <div className="relative  w-[220px] h-[377px]">
      <Image
        src="/chair4.png"
        alt="Featured Products chairs"
        width={220}
        height={312}
        className="rounded-[6px] "
        priority
      />
      <button className="absolute top-2 left-2 bg-[#01AD5A] text-white px-2 py-1 text-xs rounded">
        New
      </button>
      <div className="flex justify-between items-center mt-4 px-2">
        <div>
          <h6 className="text-[18px] font-semibold hover:text-[#007580] cursor-pointer">
            Library Stool Chair
          </h6>
          <p className="text-gray-600 font-medium">$20</p>
        </div>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F0F2F3] text-black hover:bg-[#029FAE] flex items-center justify-center">
        <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]'/> 
        </button>
      </div>
    </div>

    {/* Product 2 */}
    <div className="relative w-[220px] h-[377px]">
      <Image
        src="/topimg-2.png"
        alt="Featured Products chairs"
        width={220}
        height={312}
        className="rounded-[6px] "
        priority
      />
      <button className="absolute top-2 left-2 bg-[#F5813F] text-white px-2 py-1 text-xs rounded">
        Sales
      </button>
      <div className="flex justify-between items-center mt-4 px-2">
        <div>
          <h6 className="text-[18px] font-semibold hover:text-[#007580] cursor-pointer">
            Library Stool Chair
          </h6>
          <p className="text-gray-600 font-medium">$20</p>
        </div>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F0F2F3] text-black hover:bg-[#029FAE] flex items-center justify-center">
        <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]'/> 
        </button>
      </div>
    </div>

    {/* Product 3 */}
    <div className="w-[220px] h-[377px]">
      <Image
        src="/catagories.jpg"
        alt="Featured Products chairs"
        width={220}
        height={312}
        className="rounded-[6px] h-[227px] "
        priority
      />
      
      <div className="flex justify-between items-center mt-4 px-2">
        <div>
          <h6 className="text-[18px] font-semibold hover:text-[#007580] cursor-pointer">
            Library Stool Chair
          </h6>
          <p className="text-gray-600 font-medium">$20</p>
        </div>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F0F2F3] text-black hover:bg-[#029FAE] flex items-center justify-center">
        <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]'/> 
        </button>
      </div>
    </div>

    {/* Product 4 */}
    <div className="w-[220px] h-[377px] ">
      <Image
        src="/chair4.png"
        alt="Featured Products chairs"
        width={220}
        height={312}
        className="rounded-[6px] "
        priority
      />
     
      <div className="flex justify-between items-center mt-4 px-2">
        <div>
          <h6 className="text-[18px] font-semibold hover:text-[#007580] cursor-pointer">
            Library Stool Chair
          </h6>
          <p className="text-gray-600 font-medium">$20</p>
        </div>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F0F2F3] text-black hover:bg-[#029FAE] flex items-center justify-center">
        <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]'/> 
        </button>
      </div>
    </div>

    <div className="relative  w-[220px] h-[377px]">
      <Image
        src="/top3.png"
        alt="Featured Products chairs"
        width={220}
        height={312}
        className="rounded-[6px] w-[210px] h-[228px]"
        priority
      />
      <button className="absolute top-2 left-2 bg-[#01AD5A] text-white px-2 py-1 text-xs rounded">
        New
      </button>
      <div className="flex justify-between items-center mt-4 px-2">
        <div>
          <h6 className="text-[18px] font-semibold hover:text-[#007580] cursor-pointer">
            Library Stool Chair
          </h6>
          <p className="text-gray-600 font-medium">$20</p>
        </div>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F0F2F3] text-black hover:bg-[#029FAE] flex items-center justify-center">
        <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]'/> 
        </button>
      </div>
    </div>

    {/* Product 2 */}
    <div className="relative w-[220px] h-[377px]">
      <Image
        src="/catagories.jpg"
        alt="Featured Products chairs"
        width={220}
        height={312}
        className="rounded-[6px] w-[210px] h-[228px] "
        priority
      />
      <button className="absolute top-2 left-2 bg-[#F5813F] text-white px-2 py-1 text-xs rounded">
        Sales
      </button>
      <div className="flex justify-between items-center mt-4 px-2">
        <div>
          <h6 className="text-[18px] font-semibold hover:text-[#007580] cursor-pointer">
            Library Stool Chair
          </h6>
          <p className="text-gray-600 font-medium">$20</p>
        </div>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F0F2F3] text-black hover:bg-[#029FAE] flex items-center justify-center">
        <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]'/> 
        </button>
      </div>
    </div>

    {/* Product 3 */}
    <div className="w-[220px] h-[377px]">
      <Image
        src="/topimg-2.png"
        alt="Featured Products chairs"
        width={220}
        height={312}
        className="rounded-[6px]"
        priority
      />
      
      <div className="flex justify-between items-center mt-4 px-2">
        <div>
          <h6 className="text-[18px] font-semibold hover:text-[#007580] cursor-pointer">
            Library Stool Chair
          </h6>
          <p className="text-gray-600 font-medium">$20</p>
        </div>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F0F2F3] text-black hover:bg-[#029FAE] flex items-center justify-center">
        <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]'/> 
        </button>
      </div>
    </div>

    {/* Product 4 */}
    <div className="w-[220px] h-[377px] ">
      <Image
        src="/chair1.png"
        alt="Featured Products chairs"
        width={220}
        height={312}
        className="rounded-[6px]"
        priority
      />
     
      <div className="flex justify-between items-center mt-4 px-2">
        <div>
          <h6 className="text-[18px] font-semibold hover:text-[#007580] cursor-pointer">
            Library Stool Chair
          </h6>
          <p className="text-gray-600 font-medium">$20</p>
        </div>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F0F2F3] text-black hover:bg-[#029FAE] flex items-center justify-center">
        <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]'/> 
        </button>
      </div>
    </div>
  </div>
</div>
</div>
<div  className="w-[100%] bg-[#1E28320D] h-auto p-5">
<div className="w-[90%] xl:w-[70%]  mx-auto ">
    
</div>

</div>

        </div>

    )
}