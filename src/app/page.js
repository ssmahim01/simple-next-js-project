import Link from "next/link";

const Home = async() => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postData = await response.json();
  // console.log(postData);

  return (
    <div className="pb-12 md:px-12 px-6">
      <h2 className="text-4xl font-extrabold text-center">Blog Posts</h2>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 pt-7">
        {postData.map((data) => (
          <div key={data?.id} className="bg-lime-100 bg-opacity-70 shadow-md rounded-lg p-4 border border-gray-200">
          <Link href={`/blog/${data?.id}`}><h2 className="underline text-gray-800 text-lg font-bold">{data?.id}. {data?.title}</h2></Link>
           <p className="text-gray-600 font-semibold">{data?.body.slice(0, 80)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;