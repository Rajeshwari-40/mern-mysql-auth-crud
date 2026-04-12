import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "active",
  });

  // ADD ITEM
  const addItem = (e) => {
    e.preventDefault();

    if (!form.title) {
      alert("Enter title ❌");
      return;
    }

    if (editId) {
      setItems(items.map(item =>
        item.id === editId ? { ...item, ...form } : item
      ));
      setEditId(null);
    } else {
      const newItem = {
        id: Date.now(),
        ...form,
      };
      setItems([...items, newItem]);
    }

    setForm({ title: "", description: "", status: "active" });
  };

  // DELETE
  const deleteItem = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  // EDIT
  const editItem = (item) => {
    setForm(item);
    setEditId(item.id);
  };

  // STATUS CHANGE
  const updateStatus = (id, status) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, status } : item
    ));
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // STATS
  const total = items.length;
  const active = items.filter(i => i.status === "active").length;
  const pending = items.filter(i => i.status === "pending").length;
  const completed = items.filter(i => i.status === "completed").length;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* NAVBAR */}
      <div className="flex justify-between bg-white p-4 rounded shadow mb-4">
        <h2 className="text-xl text-blue-600 font-bold">Dashboard</h2>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="bg-blue-200 p-4 rounded">Total: {total}</div>
        <div className="bg-green-200 p-4 rounded">Active: {active}</div>
        <div className="bg-yellow-200 p-4 rounded">Pending: {pending}</div>
        <div className="bg-purple-200 p-4 rounded">Completed: {completed}</div>
      </div>

      {/* FORM */}
      <form onSubmit={addItem} className="bg-white p-4 rounded shadow mb-4 space-y-2">
        <input placeholder="Title" className="border p-2 w-full"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })} />

        <input placeholder="Description" className="border p-2 w-full"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })} />

        <select className="border p-2 w-full"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}>
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          {editId ? "Update Item" : "Add Item"}
        </button>
      </form>

      {/* LIST */}
      <div className="bg-white p-4 rounded shadow">
        {items.length === 0 ? (
          <p>No items</p>
        ) : (
          items.map(item => (
            <div key={item.id} className="border p-3 mb-2 flex justify-between items-center">

              <div>
                <p className="font-bold">{item.title}</p>
                <p>{item.description}</p>

                <select
                  value={item.status}
                  onChange={(e) => updateStatus(item.id, e.target.value)}
                  className="border mt-1"
                >
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              <div className="space-x-2">
                <button onClick={() => editItem(item)} className="bg-yellow-400 px-2 py-1 rounded">
                  Edit
                </button>

                <button onClick={() => deleteItem(item.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </div>

            </div>
          ))
        )}
      </div>

    </div>
  );
}

export default Dashboard;