export function Dialog({ funcDelete }) {
  return (
    <dialog id="dialog_done" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Dialog</h3>
        <p className="py-4">{`Are you sure finish this todo?`}</p>
        <div className="modal-action">
          <form method="dialog" className="flex gap-2">
            <button className="btn">No</button>
            <button className="btn" onClick={funcDelete}>
              Yes
            </button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export function DialogNewTodo({ funcCreate }) {
  return (
    <dialog id="dialog_new_todo" className="modal">
      <div className="modal-box w-96">
        <h3 className="font-bold text-lg">New Todo</h3>
        <form id="form-create-todo" className="space-y-2 mt-4">
          <div className="form-control">
            <label className="label" htmlFor="title">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="input input-bordered w-full input-sm"
              required
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="todo">
              <span className="label-text">Todo</span>
            </label>
            <input
              type="text"
              id="todo"
              name="todo"
              className="input input-bordered w-full input-sm"
              required
            />
          </div>
        </form>
        <div className="modal-action">
          <form method="dialog" className="flex gap-2">
            <button
              className="btn"
              onClick={() =>
                document.getElementById("form-create-todo").reset()
              }
            >
              Cancel
            </button>
            <button className="btn" onClick={funcCreate}>
              Create
            </button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export function DialogEditTodo({ data, funcEdit }) {
  return (
    <dialog id="dialog_edit_todo" className="modal">
      <div className="modal-box w-96">
        <h3 className="font-bold text-lg">Edit Todo</h3>
        <form id="form-edit-todo" className="space-y-2 mt-4">
          <div className="form-control">
            <label className="label" htmlFor="id">
              <span className="label-text">Id</span>
            </label>
            <input
              type="text"
              id="id"
              name="id"
              className="input input-bordered w-full input-sm"
              defaultValue={data.id}
              disabled
              required
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="title">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="input input-bordered w-full input-sm"
              defaultValue={data.title}
              required
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="todo">
              <span className="label-text">Todo</span>
            </label>
            <input
              type="text"
              id="todo"
              name="todo"
              className="input input-bordered w-full input-sm"
              defaultValue={data.todo}
              required
            />
          </div>
        </form>
        <div className="modal-action">
          <form method="dialog" className="flex gap-2">
            <button
              className="btn"
              onClick={() => document.getElementById("form-edit-todo").reset()}
            >
              Cancel
            </button>
            <button className="btn" onClick={funcEdit}>
              Edit
            </button>
          </form>
        </div>
      </div>
    </dialog>
  )
}
