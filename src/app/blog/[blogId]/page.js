"use client"
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Blog = () => {
    const [blogData, setBlogData] = useState(null);
    const [error, setError] = useState(null);
    const { blogId } = useParams();

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`);
                if (!response.ok) {
                    throw new Error(`Error fetching blog post: ${response.statusText}`);
                }
                const data = await response.json();
                setBlogData(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchBlogData();
    }, [blogId]);

    if(error){
        return <div className="flex justify-center items-center py-8 text-rose-500 font-bold">Error: {error}</div>
    }

    if(!blogData){
        return <div className="flex justify-center items-center py-8"><span className="loading loading-infinity text-accent loading-lg"></span></div>
    }

    return <div className="lg:w-3/5 md:w-4/5 w-11/12 mx-auto py-6">
        <h2 className="mb-6 text-gray-800 md:text-4xl text-3xl font-extrabold text-center">Blog Details</h2>

        <div className="p-4 shadow-md rounded-md border border-gray-200 flex flex-col gap-y-4">
        <h2 className="text-gray-700 text-3xl font-bold"><span className="text-gray-900">Blog:</span>{" "}{blogData?.title}</h2>
        <p className="text-gray-600 font-medium mt-2">{blogData?.body}</p>
        </div>

        <div className="mt-6">
        <Link href="/"><button className="btn btn-md btn-outline border border-secondary text-secondary font-bold text-lg hover:btn-secondary hover:text-white hover:border-none px-8">Back to Home</button></Link>
        </div>
    </div>
};

export default Blog;