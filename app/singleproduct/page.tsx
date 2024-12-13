import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';


export default function Home() {
    return (
      <div className="w-[100%] bg-[#FFFFFF]">
        <div className=" w-[90%] xl:w-[70%]  mx-auto ">
            <div className='flex gap-4'>
              
                <Image 
                src="/chair2.png" 
                alt="chair"
                width={350}
                height={350}
                priority />
               
                <div>
                    <h1 className='py-3 text-[32px]'>Library Stool Chair</h1>
                    <button className='bg-[#029FAE] w-[118px] p-2 text-[#ffffff] mb-3 hover:shadow-[0px_0px_5px_#029FAE]'>$20.00 USD</button>
                    <p className='w-[250px] mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis quisquam vero sed impedit rerum corporis, nemo alias, in, non officia cupiditate distinctio esse facere culpa!</p>
                    <button className='flex gap-2 bg-[#029FAE] w-[180px] p-2 text-[#ffffff] hover:shadow-[0px_0px_5px_#029FAE] '>
                    <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]'/> 
                        Add To cart</button>
                </div>

            </div>



        </div>
        <div className="w-[90%] xl:w-[70%]  mx-auto">
        <h2 className="text-[32px] mb-6 mt-4">Featured Products</h2>
        <div className='flex my-10 justify-center lg:justify-start'>
          <div className="grid  gap-2 grid-cols-2 lg:grid-cols-4 mb-6">
            {/* Product 1 */}
    <div className="relative  w-[200px] h-[377px]">
      <Image
        src="/chair1.png"
        alt="Featured Products chairs"
        width={200}
        height={312}
        className="rounded-[6px] "
        priority
      />
      <button className="absolute top-2 left-2 bg-[#01AD5A] text-white px-2 py-1 text-xs rounded">
        New
      </button>
      <div className="flex justify-between items-center mt-4 px-2">
        <div>
          <h6 className="text-lg font-semibold hover:text-[#007580] cursor-pointer">
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
    <div className="relative w-[200px] h-[377px]">
      
      <Image
        src="/top3.png"
        alt="Featured Products chairs"
        width={200}
        height={312}
        className="rounded-[6px] "
        priority
      />
      <button className="absolute top-2 left-2 bg-[#F5813F] text-white px-2 py-1 text-xs rounded">
        Sales
      </button>
      <div className="flex justify-between items-center mt-4 px-2">
        <div>
          <h6 className="text-lg font-semibold hover:text-[#007580] cursor-pointer">
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
    <div className="w-[200px] h-[377px]">
      <Image
        src="/chair3.png"
        alt="Featured Products chairs"
        width={200}
        height={312}
        className="rounded-[6px] "
        priority
      />
      
      <div className="flex justify-between items-center mt-4 px-2">
        <div>
          <h6 className="text-lg font-semibold hover:text-[#007580] cursor-pointer">
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
    <div className="w-[200px] h-[377px] ">
      <Image
        src="/chair4.png"
        alt="Featured Products chairs"
        width={200}
        height={312}
        className="rounded-[6px] "
        priority
      />
     
      <div className="flex justify-between items-center mt-4 px-2">
        <div>
          <h6 className="text-lg font-semibold hover:text-[#007580] cursor-pointer">
            Library Stool Chair
          </h6>
          <p className="text-gray-600 font-medium">$20</p>
        </div>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F0F2F3] text-black hover:bg-[#029FAE] flex items-center justify-center">
        <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]'/> 
        </button>
      </div>
    </div>
    <div className="w-[200px] h-[377px] ">
      <Image
        src="/topimg-2.png"
        alt="Featured Products chairs"
        width={200}
        height={312}
        className="rounded-[6px] "
        priority
      />
     
      <div className="flex justify-between items-center mt-4 px-2">
        <div>
          <h6 className="text-lg font-semibold hover:text-[#007580] cursor-pointer">
            Library Stool Chair
          </h6>
          <p className="text-gray-600 font-medium">$20</p>
        </div>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F0F2F3] text-black hover:bg-[#029FAE] flex items-center justify-center">
        <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]'/> 
        </button>
      </div>
    </div>
    <div className="w-[200px] h-[377px] ">
      <Image
        src="/catagories.jpg"
        alt="Featured Products chairs"
        width={200}
        height={300}
        className="rounded-[6px] h-[200px] "
        priority
      />
     
      <div className="flex justify-between items-center mt-4 px-2">
        <div>
          <h6 className="text-lg font-semibold hover:text-[#007580] cursor-pointer">
            Library Stool Chair
          </h6>
          <p className="text-gray-600 font-medium">$20</p>
        </div>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F0F2F3] text-black hover:bg-[#029FAE] flex items-center justify-center">
        <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]'/> 
        </button>
      </div>
    </div>
    <div className="w-[200px] h-[377px] ">
      <Image
        src="/chair3.png"
        alt="Featured Products chairs"
        width={200}
        height={312}
        className="rounded-[6px] "
        priority
      />
     
      <div className="flex justify-between items-center mt-4 px-2">
        <div>
          <h6 className="text-lg font-semibold hover:text-[#007580] cursor-pointer">
            Library Stool Chair
          </h6>
          <p className="text-gray-600 font-medium">$20</p>
        </div>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F0F2F3] text-black hover:bg-[#029FAE] flex items-center justify-center">
        <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]'/> 
        </button>
      </div>
    </div>
    <div className="w-[200px] h-[377px] ">
      <Image
        src="/chair1.png"
        alt="Featured Products chairs"
        width={200}
        height={312}
        className="rounded-[6px] "
        priority
      />
     
      <div className="flex justify-between items-center mt-4 px-2">
        <div>
          <h6 className="text-lg font-semibold hover:text-[#007580] cursor-pointer">
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
      </div>
    )
}