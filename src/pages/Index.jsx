import { useState } from "react";
import { Search, PlusCircle, Save } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const initialItems = [
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
  const [items, setItems] = useState(initialItems);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addNewNote = () => {
    const newNote = {
      id: items.length + 1,
      title: "",
      content: "",
      isNew: true,
    };
    setItems([...items, newNote]);
  };

  const handleInputChange = (id, field, value) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const saveNote = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, isNew: false } : item));
  };

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
        <div
          className="border p-4 rounded flex flex-col items-center justify-center text-center cursor-pointer"
          onClick={addNewNote}
        >
          <PlusCircle className="h-10 w-10 text-gray-500 mb-2" />
          <h2 className="text-lg font-semibold">ADD A NEW NOTE</h2>
          <p className="text-gray-500">Start typing here...</p>
        </div>
        {filteredItems.map((item) => (
          <div key={item.id} className="border p-4 rounded">
            {item.isNew ? (
              <>
                <Input
                  placeholder="Title"
                  value={item.title}
                  onChange={(e) => handleInputChange(item.id, "title", e.target.value)}
                  className="mb-2"
                />
                <Textarea
                  placeholder="Content"
                  value={item.content}
                  onChange={(e) => handleInputChange(item.id, "content", e.target.value)}
                  className="mb-2"
                />
                <Button onClick={() => saveNote(item.id)} className="mt-2">
                  <Save className="mr-2 h-4 w-4" />
                  Save
                </Button>
              </>
            ) : (
              <>
                <img src={item.image} alt={item.title} className="mb-2" />
                <h2 className="text-lg font-semibold">{item.title}</h2>
                {item.price && <p className="text-gray-500">{item.price}</p>}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;