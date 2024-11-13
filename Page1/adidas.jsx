import React from 'react';
function Adidas() {
  return ( 
    <div className='p-0 m-0'>
      <body className='body-main flex mt-24 justify-around'>
        <left>
            <h1 className='text-8xl font-bold leading-tight '>Your Feet <br />Deserve<br />The <u>BEST</u> !</h1>
            
            <p className='text-2xl mt-6'>Adidas shoes offer style, comfort, and performance with innovative <br/> tech and a timeless three-stripe design, perfect for any activity..</p>
            
            <button className="bg-red-500 p-2 mt-5 text-black font-bold text-xl rounded-lg">Shop Now</button>
            
            <button className="bg-white ml-10 p-2 mt-5 text-black font-bold text-xl rounded-lg border border-black">Add to Cart</button>
            
            <h3 className='text-lg font-bold mt-5'>Also Available On</h3>

            <sites className='flex'>
            <img src="images/amazon.png" alt="shoeImg" className='w-14 h-auto rounded-full ' />
            <img src="images/flipk.png" alt="footlocker" className='h-11 rounded-full'/>
            </sites>
        
        </left>

        <right>
        <img src="images/shoe.jpg" alt="shoeImg" className='w-[500px] h-auto' />
        </right>

      </body>
    </div>
  );
}

export default Adidas;
