import Image from "next/image";

const products = [
    { id: 1, name: "Rainbow 600", image: "/products/product1.svg" },
    { id: 2, name: "Rio 650", image: "/products/product2.svg" },
    { id: 3, name: "Big Bull 1300", image: "/products/product3.svg" },
    { id: 4, name: "Rome 600", image: "/products/product4.svg" },
    { id: 5, name: "Rainbow 600", image: "/products/product1.svg" },
    { id: 6, name: "Rio 650", image: "/products/product2.svg" },
];

const HydrationEssentials = () => {
    return (
        <section className="p-20  border border-blue-500 rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-5xl  font-bold">Hydration Essentials</h2>
                    <p className="text-black font-semibold my-5 text-lg">Discover Our Range of Premium Water Bottles</p>
                </div>
                <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition">
                    VIEW MORE
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} >
                        <div className="relative w-full h-96">
                            <Image
                                src={product.image}
                                alt={product.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-3xl"
                            />
                        </div>
                        <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
                        <button className="mt-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition">
                            LEARN MORE
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HydrationEssentials;
