export default function Card({ data, index, setSelectedData, setEditData }) {
  const date = data?.created_at
    .toString()
    .substring(0, 10)
    .split("-")
    .reverse()
    .join("/")

  const handleEdit = () => {
    setEditData(data)
    document.getElementById("dialog_edit_todo").showModal()
  }

  const handleDone = () => {
    setSelectedData(data)
    document.getElementById("dialog_done").showModal()
  }

  return (
    <>
      <div className="card w-full h-full shadow-slate-200 shadow-md rounded-lg   bg-zinc-800 text-slate-300 flex justify-center text-center">
        <div className="font-extrabold text-xl mt-4 flex text-center justify-center italic">
          🔥 {`TODO ${index}`} 🔥
        </div>
        <div className="card-body p-6">
          <h2 className="card-title text-sm font-bold">🚀 {data.title}</h2>
          <div className="min-h-14 flex text-sm text-start">{data.todo}</div>
          <div className="card-actions flex align-middle items-center justify-between mt-6">
            <div className="text-xs">{date}</div>
            <div className="flex gap-1">
              <button
                className="btn btn-sm bg-zinc-700 text-white border-none hover:bg-zinc-500 text-[10px]"
                onClick={handleEdit}
              >
                Edit
              </button>
              <button
                className="btn btn-sm bg-zinc-700 text-white border-none hover:bg-zinc-500 text-[10px]"
                onClick={handleDone}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
