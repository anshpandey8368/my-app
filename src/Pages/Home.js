import React, { useEffect, useState } from 'react';
import Product from '../Components/Product';
import Spinner from '../Components/Spinner';

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchProductionData() {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();

            setPosts(data);
        } catch (error) {
            console.log("get a error");
            setPosts([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProductionData();
    }, []);

    return (
        <div className="container mx-auto py-8 px-20">
            {loading ? (
                <Spinner />
            ) : posts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {posts.map(post => (
                        <Product key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-600">No Data Found</div>
            )}
        </div>
    );
};

export default Home;