import { useState } from "react";
import { Search, PlusCircle } from "lucide-react";

const items = [
  {
    id: 1,
    image: "path/to/image1.jpg",
    title: "Item 1",
    price: "$100",
  },
  {
    id: 2,
    image: "path/to/image2.jpg",
    title: "Item 2",
    price: "$200",
  },
  {
    id: 3,
    image: "path/to/image3.jpg",
    title: "Item 3",
    price: "$300",
  },
  // Add more items as needed
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search my mind..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <Search className="absolute right-2 top-2 h-5 w-5 text-gray-500" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="border p-4 rounded flex flex-col items-center justify-center text-center">
          <PlusCircle className="h-10 w-10 text-gray-500 mb-2" />
          <h2 className="text-lg font-semibold">ADD A NEW NOTE</h2>
          <p className="text-gray-500">Start typing here...</p>
        </div>
        {filteredItems.map((item) => (
          <div key={item.id} className="border p-4 rounded">
            <img src={item.image} alt={item.title} className="mb-2" />
            <h2 className="text-lg font-semibold">{item.title}</h2>
            {item.price && <p className="text-gray-500">{item.price}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;