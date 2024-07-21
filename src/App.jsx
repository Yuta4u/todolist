import { useEffect, useState } from "react"
import { Dialog, DialogEditTodo, DialogNewTodo } from "./components/Dialog"
import Card from "./components/Card"
import { GetTodos } from "./api/api"

function App() {
  const [data, setData] = useState([])
  const [selectedData, setSelectedData] = useState([])
  const [editData, setEditData] = useState([])
  const [loading, setLoading] = useState(false)

  const deleteTodo = async () => {
    setLoading(true)
    await fetch(
      `https://todolist-api-pied.vercel.app/api/v1/todo/${selectedData.id}`,
      {
        method: "DELETE",
      }
    )

    const data = await GetTodos()
    setData(data.data)
    setSelectedData([])
    setLoading(false)
  }

  const createTodo = async () => {
    setLoading(true)
    const form = document.getElementById("form-create-todo")
    const formData = new FormData(form)
    const tempData = Object.fromEntries(formData.entries())
    try {
      const res = await fetch(
        "https://todolist-api-pied.vercel.app/api/v1/todo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(tempData),
          mode: "cors",
        }
      )
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }
      const data = await GetTodos()
      setData(data.data)
    } catch (error) {
      console.error("There was an error with the fetch operation:", error)
    } finally {
      form.reset()
      setLoading(false)
    }
  }

  const editTodo = async () => {
    setLoading(true)
    const form = document.getElementById("form-edit-todo")
    const formData = new FormData(form)
    const tempData = Object.fromEntries(formData.entries())
    const fixEditData = { id: editData.id, ...tempData }

    try {
      const res = await fetch(
        "https://todolist-api-pied.vercel.app/api/v1/todo",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(fixEditData),
          mode: "cors",
        }
      )
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }
      const data = await GetTodos()
      setData(data.data)
    } catch (error) {
      console.error("There was an error with the fetch operation:", error)
    } finally {
      form.reset()
      setEditData([])
      setLoading(false)
    }
  }

  useEffect(() => {
    const getAllTodos = async () => {
      setLoading(true)
      const res = await GetTodos()
      setData(res.data)
      setLoading(false)
    }
    getAllTodos()
  }, [])

  return (
    <div className="mx-12 lg:mx-44 my-16 ">
      <div className="text-4xl font-extrabold w-fit mx-auto text-slate-300">
        TODOLIST
      </div>
      <div className="w-fit mx-auto mt-16">
        <button
          className="btn btn-md bg-zinc-800 text-slate-300 border-none"
          onClick={() => document.getElementById("dialog_new_todo").showModal()}
        >
          ADD CARD
        </button>
      </div>
      <div id="todo-list" className="flex flex-wrap gap-2 pb-20 ">
        {loading
          ? "loading..."
          : data.map((_, index) => (
              <div key={index}>
                <Card
                  data={_}
                  index={index}
                  setSelectedData={setSelectedData}
                  setEditData={setEditData}
                />
              </div>
            ))}
      </div>
      <Dialog funcDelete={deleteTodo} />
      <DialogNewTodo funcCreate={createTodo} />
      <DialogEditTodo data={editData} funcEdit={editTodo} />
    </div>
  )
}

export default App
