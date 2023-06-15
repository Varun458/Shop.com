import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineShoppingCart } from 'react-icons/ai';

interface CartItem {
  [key: string]: {
    qty: number;
    price: number;
  };
}

interface NavbarProps {
  cart: CartItem;
  addToCart: (key: string, price: number, qty: number,) => void;
  removeFromCart: (key: string, price: number, qty: number,) => void;
  clearCart: () => void;
  subTotal: number;
}

export default function Navbar({
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleBuyNow = () => {
    router.push('/cart');
  };

  return (
    <>
      <div className="sticky top-0 z-50 animate-dropIn bg-gradient-to-r from-gray-800 to-gray-900 transform shadow-xl w-screen">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <div className="ml-3 text-xl text-white">Shop.com</div>
          </Link>
          <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <li className="mr-5 hover:scale-110 text-white">Home</li>
            </Link>
            <Link href="/about">
              <li className="mr-5 hover:scale-110 text-white">About</li>
            </Link>
            <Link href="/contact">
              <li className="mr-5 hover:scale-110 text-white">Contact</li>
            </Link>
          </ul>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <FaUserCircle className="h-6 w-6 text-white hover:text-zinc-500 cursor-pointer" />
            </Link>
            <div className="relative">
              <div onClick={toggleSidebar} className="flex items-center justify-center">
                <AiOutlineShoppingCart className="h-6 w-6 text-white hover:text-zinc-500 cursor-pointer" />
                {Object.keys(cart).length > 0 && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 text-xs bg-zinc-500 text-white flex items-center justify-center rounded-full">
                    {Object.keys(cart).length}
                  </div>
                )}
              </div>
              {isOpen && (
                <div className="absolute bg-gray-100 top-12 right-0 rounded-md shadow-xl py-2 px-4 w-60">
                  {Object.keys(cart).length > 0 ? (
                    <>
                      {Object.keys(cart).map((key) => {
                        const item = cart[key];
                        return (
                          <div key={key} className="flex justify-between items-center mb-2">
                            <div className="truncate">{key}
                            </div>
                            <div className="flex items-center">
                              <AiOutlineMinusCircle
                                className="h-4 w-4 text-gray-500 hover:text-zinc-500 cursor-pointer"
                                onClick={() => removeFromCart(key, item.price, 1)}
                              />
                              <span className="mx-2">{item.qty}</span>
                              <AiOutlinePlusCircle
                                className="h-4 w-4 text-gray-500 hover:text-zinc-500 cursor-pointer"
                                onClick={() => addToCart(key, item.price, 1)}
                              />
                            </div>
                          </div>
                        );
                      })}
                      <div className="flex justify-between items-center mt-4">
                        <div className="font-bold">Subtotal:</div>
                        <div>${subTotal.toFixed(2)}</div>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <button
                          className="bg-zinc-500 text-white py-1 px-2 focus:outline-none hover:bg-zinc-600 rounded-md"
                          onClick={clearCart}
                        >
                          Clear Cart
                        </button>
                        <button
                          className="bg-zinc-500 text-white py-1 px-2 focus:outline-none hover:bg-zinc-600 rounded-md"
                          onClick={handleBuyNow}
                        >
                          Buy Now
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center">Cart is empty</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


// import Link from 'next/link';
// import { useState } from 'react';
// import { FaUserCircle } from 'react-icons/fa';
// import { AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineShoppingCart } from 'react-icons/ai';

// export default function Navbar() {

//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };


//   return (
//     <>
//       <div className="sticky top-0 z-50 animate-dropIn bg-gradient-to-r from-gray-800 to-gray-900 transform shadow-xl w-screen">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <Link href="/">
//             <div className="ml-3 text-xl text-white">Shop.com</div>
//           </Link>
//           <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//             <Link href="/">
//               <li className="mr-5 hover:scale-110 text-white">Home</li>
//             </Link>
//             <Link href="/about">
//               <li className="mr-5 hover:scale-110 text-white">About Us</li>
//             </Link>
//             <Link href="/contact">
//               <li className="mr-5 hover:scale-110 text-white">Contact</li>
//             </Link>
//           </ul>
//           <div className="flex">
//             <Link href="/login">
//               <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded mt-4 md:mt-0 text-2xl text-white hover:text-slate-800">
//                 <FaUserCircle />
//               </button>
//             </Link>

//             <button>
//               <div>
//                 <AiOutlineShoppingCart onClick={toggleSidebar} className="text-white text-2xl mt-[14px] md:mt-0" />
//               </div>
//             </button>

//           </div>
//         </div>


//         <div
//           className={`sideCart fixed top-0 right-0 bg-gray-900 py-10 px-10 transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
//             } hidden md:block duration-500 md:overflow-hidden h-screen md:w-1/6`}
//         >
//           <div>
//             <h2 className="text-white font-thin text-2xl py-4 border-b-2 border-gray-200">Shop.com</h2>
//           </div>
//           <div onClick={toggleSidebar} className="text-white cursor-pointer">Close</div>
//           <div className="bg-gray-600 bg-opacity-50 rounded-md">
//             <ul className="py-2 text-white font-thin flex flex-col justify-evenly items-center my-2">
//               <li className="py-4 text-center items-center flex justify-between px-2">
//                 <div className="flex">
//                   <AiOutlinePlusCircle className="mt-1" />
//                   <span className="mx-3">1</span>
//                   <AiOutlineMinusCircle className="mt-1" />
//                 </div>
//               </li>
//             </ul>
//           </div>
//           <button className='text-white'>buy</button>
//           <button className='text-white'>clear</button>
//         </div>
//       </div>
//     </>
//   );
// }
