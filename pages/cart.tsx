import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface CartItem {
    [key: string]: {
        qty: number;
        price: number;
    };
}

interface CartProps {
    cart: CartItem;
}

const CartPage: NextPage<CartProps> = ({ cart }) => {
    const router = useRouter();

    useEffect(() => {
        if (Object.keys(cart).length === 0) {
            router.push('/');
        }
    }, [cart, router]);

    const calculateSubtotal = (): number => {
        let subtotal = 0;
        for (const key in cart) {
          subtotal += cart[key].qty * cart[key].price;
        }
        return subtotal;
      };
    
      const calculateTotal = (): number => {
        const subtotal = calculateSubtotal();
        const tax = subtotal * 0.1;
        const total = subtotal + tax;
        return total;
      };
    

    return (<>
        <div className=' my-10'>
            <h1 className='mx-auto my-6 text-center text-3xl md:text-3xl font-thin'>Your Shoping Cart</h1>
            <div className='flex flex-col md:flex-row justify-center border-t-2 border-gray-300 md:w-[80%] mx-auto pt-6'>
                <div className='mx-24 flex flex-col'>

                    <div className='border-b-2 border-gray-300 pb-6'>
                        <h2 className='mb-4 font-semibold'>Contact Information</h2>
                        <div className="relative flex-grow w-full ">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600 mb-4">Email</label>
                            <input type="email" id="email" name="email" className="mb-4 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className='flex'>
                            <div className="relative flex-grow w-full mr-2">
                                <label htmlFor="full-name" className="leading-7 text-sm text-gray-600 mb-4">First Name</label>
                                <input type="text" id="full-name" name="full-name" className="mb-4 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className="relative flex-grow w-full">
                                <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Last Name</label>
                                <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                    </div>

                    <div className='border-b-2 border-gray-300 py-6'>
                        <h2 className='mb-4 font-semibold'>Shipping Information</h2>

                        <div className='flex flex-col'>
                            <div className="relative flex-grow w-full mr-2">
                                <label htmlFor="full-name" className="leading-7 text-sm text-gray-600 mb-4">Full Name</label>
                                <input type="text" id="full-name" name="full-name" className="mb-4 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className="relative flex-grow w-full ">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600 mb-4">Email</label>
                                <input type="email" id="email" name="email" className="mb-4 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className="relative flex-grow w-full mr-2">
                                <label htmlFor="full-name" className="leading-7 text-sm text-gray-600 mb-4">Address</label>
                                <input type="text" id="full-name" name="full-name" className="mb-4 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className="relative flex-grow w-full mr-2">
                                <label htmlFor="full-name" className="leading-7 text-sm text-gray-600 mb-4">Appartment, Suite, etc.</label>
                                <input type="text" id="full-name" name="full-name" className="mb-4 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className='flex'>
                                <div className="relative flex-grow w-full mr-2">
                                    <label htmlFor="full-name" className="leading-7 text-sm text-gray-600 mb-4">City</label>
                                    <input type="text" id="full-name" name="full-name" className="mb-4 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>

                                <div className="relative flex-grow w-full">
                                    <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Country</label>
                                    <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>



                            </div>
                            <div className="relative flex-grow w-full mr-2 mb-6">
                                <label htmlFor="full-name" className="leading-7 text-sm text-gray-600 mb-4 ">Phone</label>
                                <input type="text" id="full-name" name="full-name" className="mb-4 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <button disabled className='lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex bg-gray-800 text-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-500 hover:text-white rounded hover:cursor-not-allowed'>Proceed To Payment.</button>
                        </div>

                    </div>


                </div>
                <div>
                <div className='px-4 flex flex-col items-center md:items-start'>
            <h2 className='md:mb-20 font-semibold'>Order Summary</h2>
            {Object.keys(cart).length > 0 ? (
              <ol className='flex flex-col items-center justify-evenly border-b-2 border-gray-300'>
                {Object.keys(cart).map((key) => {
                  const item = cart[key];
                  return (
                    <li className='my-4 md:my10' key={key}>
                      <span className='mx-1 md:mx-4 font-semibold'>{key}</span>
                      <select
                        id='quantity-24'
                        name='quantity-24'
                        className='mx-4 px-4 max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm'
                      >
                        <option value='1'>{item.qty}</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                      </select>
                      <span>Quantity</span>
                      <span className='md:px-2'></span>
                      <span className='md:px-2'>${item.price}.00</span>
                    </li>
                  );
                })}
              </ol>
            ) : (
              <p>Your cart is empty.</p>
            )}
            <div className='flex'>
              <div className='font-semibold mr-24 md:mr-80 pt-4'>Subtotal</div>
              <div className='font-semibold'>${calculateSubtotal().toFixed(2)}
              </div>
            </div>
           <div className='flex border-b-2 border-gray-300 py-4'>
            <div className='font-semibold mr-24 md:mr-96'>Tax</div>
            <div className='font-semibold'>10%</div>
           </div>
            <div className='flex'>
              <div className='font-semibold mr-24 md:mr-80 pt-4'>Total</div>
              <div className='font-semibold ml-6'>${calculateTotal().toFixed(2)}</div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;