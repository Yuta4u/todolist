export async function GetTodos() {
  const data = await fetch("https://todolist-api-pied.vercel.app/api/v1/todo")
  return data.json()
}

export async function DeleteTodo(id) {
  console.log(id, "ini")
}

// const deleteTodo = async (id) => {
//     await fetch(`http://localhost:3001/api/v1/todo/${id}`, {
//       method: "DELETE",
//     })

//     // Fetch ulang data setelah menghapus TODO
//     const data = await GetTodos()
//     setData(data)
//   }
