import React from 'react';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, addToCart } from '../redux/slices/wishlistSlice';

const Wishlist = () => {
    const userCart = useSelector(state => state.cartReducer);
    const userWishlist = useSelector(state => state.wishlistReducer);
    const dispatch = useDispatch();

    const handleCart = (product) => {
        dispatch(addToCart(product)); // Dispatch to Redux (Ensure your store handles cart logic)
      
        const existingProduct = userCart?.find(item => item.id === product.id);
        if (existingProduct) {
            alert('Product quantity incremented');
        } else {
            alert('Product added to your cart');
        }
    };

    return (
        <>
            <Header />
            <div style={{ paddingTop: '100px' }} className="px-5">
                {userWishlist?.length > 0 ? (
                    <>
                        <h1 className="text-4xl font-bold text-red-600">My Wishlist</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
                            {userWishlist?.map(product => (
                                <div key={product.id} className="rounded-lg border p-4 shadow-lg hover:shadow-xl transition">
                                    <img
                                        className="rounded-t-lg w-full h-48 object-cover"
                                        src={product?.thumbnail}
                                        alt="Wishlist Item"
                                    />
                                    <div className="text-center mt-4">
                                        <h3 className="text-lg font-semibold text-gray-800">{product?.title}</h3>
                                        <div className="flex justify-evenly mt-3">
                                            <button onClick={() => dispatch(removeItem(product?.id))} className="text-xl hover:scale-110 transition">
                                                <i className="fa-solid fa-heart-circle-xmark text-red-600"></i>
                                            </button>
                                            <button onClick={() => handleCart(product)} className="text-xl hover:scale-110 transition">
                                                <i className="fa-solid fa-cart-plus text-green-600"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="flex justify-center items-center h-screen">
                        <img className="w-100 h-1/2" src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="Empty Wishlist" />
                        <h1 className="text-3xl text-red-600">Your Wishlist is empty!!!</h1>
                    </div>
                )}
            </div>
        </>
    );
};

export default Wishlist;
