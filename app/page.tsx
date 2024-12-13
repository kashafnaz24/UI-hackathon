import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[100%] bg-[#FFFFFF]">
      <div className="flex p-[80px] gap-[40px] w-[90%] xl:w-[70%]  mx-auto bg-[#F0F2F3] rounded-bl-[48px]  rounded-br-[48px]">
        <div>
          <p className="font-[sans] uppercase">wellcome to Chairy</p>
          <h1 className="font-[sans-serif ] text-[#272343] font-bold text-[60px]  pt-[20px] pb-[20px]">Best Furniture
            Collection for your
            interior.</h1>
            <button className="flex gap-2 bg-[#029FAE] text-center hover:shadow-[0px_0px_5px_#029FAE] text-[#FFFFFF] rounded-[8px] h-[52px] w-[171px] px-[24px] py-[14px]">Shop Now
              <Image
              src="/Rightarrow.png"
              alt="rightarrow"
              width={16}
              height={9}
              className="w-[28px] h-[24px] hover:w-[30px] hover:h-[28px] "
              priority />
            </button>
        </div>
        <div>
          <Image 
          src="/ProductImage.png"
          alt="front picture of chair"
          width={438}
          height={584}
          priority
          className="w-[534px] h-[484px] " 
          />
        </div>
      </div>

      <div className="flex justify-between  mt-[20px] pl-[10px] pr-[10px] h-[139px] w-[90%] xl:w-[70%]  mx-auto">
        <Image src="/zapeirlogo.png"
         alt="companiesLogo"
         width={85}
         height={87}
         priority />
        <Image src="/pepedrive.png"  
         alt="companiesLogo"
         width={107}
         height={109}
         priority  />

        <Image src="/cibbanklogo.png"  
         alt="companiesLogo"
         width={135}
         height={189}
         priority  />
        <Image src="/logo4.png" 
         alt="companiesLogo"
         width={63}
         height={63}
         priority  />
        <Image 
        src="/burntoast.png" 
         alt="companiesLogo"
         width={98}
         height={101}
         priority />
         <Image 
         src="/panda.png" 
         alt="companiesLogo"
         width={113}
         height={115}
         priority />
         <Image src="/maz.png" 
         alt="companiesLogo"
         width={84}
         height={87}
         priority />
      </div>
      <div className="w-[90%] xl:w-[70%]  mx-auto">
        <h2 className="text-[34px] mb-6 mt-4">Featured Products</h2>
        <div className='flex my-10 justify-center lg:justify-start'>
          <div className="grid  gap-2 grid-cols-2 lg:grid-cols-4 mb-6">
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
      <Link href="/singleproduct">
      <Image
        src="/chair2.png"
        alt="Featured Products chairs"
        width={220}
        height={312}
        className="rounded-[6px] "
        priority
      /></Link>
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
    </div>
    </div>
    </div>
  <div className="w-[90%] xl:w-[70%]  mx-auto">
  <h2 className="text-[34px] mb-6 mt-4">Top categories</h2>
  <div className="grid  gap-2 grid-cols-3 mb-6">
    
    {/* Product 1 */}
    <div className="relative w-[200px] lg:w-[300px] h-[377px]">
      <Image
        src="/wind-chair.png.png"
        alt="Top categories "
        width={250}
        height={312}
        className="rounded-[6px] w-[250px] lg:w-[300px]"
        priority
      />
      <button className="absolute top-2 left-2 bg-[#01AD5A] text-white px-2 py-1 text-xs rounded">
        New
      </button>
      <div className="flex justify-between bg-[#000000B2] items-center mt-4 px-2">
        <div className='text-[#FFFFFF]'>
          <h6 className="text-[20px] font-semibold">
          Wing Chair
          </h6>
          <p className="font-[15px]">3,584 Products</p>
        </div>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F0F2F3] text-black hover:bg-[#029FAE] flex items-center justify-center">
        <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]'/> 
        </button>
      </div>
    </div>

    {/* Product 2 */}
    <div className=" relative w-[200px] lg:w-[300px] h-[377px]">
      <Image
        src="/topimg-2.png"
        alt="Top categories"
        width={250}
        height={312}
        className="rounded-[6px] w-[250px] lg:w-[300px]"
        priority
      />
      <button className="absolute top-2 left-2 bg-[#F5813F] text-white px-2 py-1 text-xs rounded">
        Sales
      </button>
      <div className="flex justify-between bg-[#000000B2] items-center mt-4 px-2">
        <div className='text-[#FFFFFF]'>
          <h6 className="text-[20px] font-semibold">
          Wooden Chair
          </h6>
          <p className=" font-[15px]">157 Products</p>
        </div>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F0F2F3] text-black hover:bg-[#029FAE] flex items-center justify-center">
        <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]'/> 
        </button>
      </div>
    </div>

    {/* Product 3 */}
    <div className="w-[200px] lg:w-[300px] h-[377px]">
      <Image
        src="/top3.png"
        alt="Top categories"
        width={250}
        height={312}
        className="rounded-[6px] w-[250px] lg:w-[300px]"
        priority
      />
      
      <div className="flex justify-between bg-[#000000B2] items-center mt-4 px-2">
        <div className='text-[#FFFFFF]'>
          <h6 className="text-[20px] font-semibold">
          Desk Chair
          </h6>
          <p className="text-[15px] font-medium">154 Products</p>
        </div>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F0F2F3] text-black hover:bg-[#029FAE] flex items-center justify-center">
        <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]'/> 
        </button>
      </div>
    </div>
</div>
</div>
  

  <div className=' w-[90%] xl:w-[70%] my-20  mx-auto'>
  <p className='text-[34px] font-sans font-bold mb-2 text-center'>Explore new and popular styles</p>
    <div className='flex gap-3'>
    <Image
        src="/chair3.png"
        alt="popular styles"
        width={450}
        height={450}
        className="rounded-[6px] "
        priority
      />
      <div className='grid grid-cols-2 gap-2 w-[450] h-[450]'>
      <Image
        src="/chair4.png"
        alt="popular styles"
        width={200}
        height={220}
        className="rounded-[6px] w-[200px] h-[220px]"
        priority
      />
      <Image
        src="/catagories.jpg"
        alt="popular styles"
        width={200}
        height={220}
        className="rounded-[6px] w-[200px] h-[220px]"
        priority
      />
      <Image
        src="/chair1.png"
        alt="popular styles"
        width={200}
        height={220}
        className="rounded-[6px] w-[200px] h-[220px]"
        priority
      />
       <Image
        src="/chair1.png"
        alt="popular styles"
        width={200}
        height={220}
        className="rounded-[6px] w-[200px] h-[220px]"
        priority
      />
       
      </div>
  </div>
  </div>

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
    <div className="relative  w-[220px] h-[377px]">
      <Image
        src="/product.jpg"
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
        src="/chair3.png"
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



</div>
  );
}
