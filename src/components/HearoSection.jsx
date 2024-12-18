import { TiSpiral } from "react-icons/ti";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { VscLock } from "react-icons/vsc";
import { TbBellFilled } from "react-icons/tb";
import { IoReaderOutline } from "react-icons/io5";
import { FaHashtag } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { useContext, useState } from "react";
import { contextApp } from "../context/contextApp";
import { MdAddCircleOutline } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";


const HearoSection = () => {
  const { input, setInput, jsonData, setJsonData, count, setCount, error, setError } = useContext(contextApp);
  const [edit, setEdit] = useState({
    title: '',
    description: ''
  });
  // const [description, setDescription] = useState([]);

  function handleOnChange(e) {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleBtnOnClick() {
    if (input.title === '') {
      setError('I need title!!');
      return;
    } else {
      const newTask = { ...input, completed: false, description: '' };
      const updatedData = [...jsonData, newTask];
      localStorage.setItem("task", JSON.stringify(updatedData));
      setJsonData(updatedData);
      setError('')
      setInput({
        title: ''
      })
      setCount(prev => prev + 1);
    }
  }

  function handleRadiobtn(item) {
    const updatedData = jsonData.map(task =>
      task.title === item.title ? { ...task, completed: !task.completed } : task
    );
    localStorage.setItem('task', JSON.stringify(updatedData));
    setJsonData(updatedData);
  }

  function handleDeleteAction(e, item) {
    e.stopPropagation();
    const removed = jsonData.filter((prev) => prev.title !== item.title);
    setJsonData(removed)
    localStorage.removeItem('task');
    localStorage.setItem('task', JSON.stringify(removed));
    setCount(prev => prev - 1)
  }

  function handleEditData(e) {
    setEdit((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    const updated = jsonData.map((user) => user.title === edit.title ? { ...user, title: edit.title, description: edit.description } : user);
    localStorage.setItem('task', JSON.stringify(updated));
    setJsonData(updated)
  }

  return (
    <div className="w-full flex justify-start p-3 gap-x-5">
      {/* Left Section */}
      <div className="left bg-gray-900 text-white p-4 rounded-xl w-[550px] h-[600px] relative shadow-xl shadow-black">
        <div className="flex flex-col justify-between">
          <div className="flex justify-between">
            <p className="font-bold text-lg">Today</p>
            <p className="rounded-full w-5 h-5 bg-gray-600 flex items-center justify-center font-semibold">{count}</p>
          </div>

          {
            jsonData.map((item, index) => (
              <div
                key={index}
                className="mt-4 hover:bg-gray-600 flex items-center gap-x-3 rounded-xl px-2 cursor-pointer duration-300 h-10 text-gray-300"
                onClick={() => setEdit(item)}
              >
                <div className="absolute text-xl text-blue-500 animate-spin">
                  {item.completed && <FaCircleCheck onClick={() => handleRadiobtn(item)} />}
                </div>
                <input
                  type="radio"
                  name="task"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-red-400 transition-all hover:border-blue-500"
                  id="red-600"
                  onClick={() => handleRadiobtn(item)}
                  checked={item.completed}
                  readOnly
                />
                <div className="leading-5">
                  <p className={`font-semibold ${item.completed && 'line-through text-gray-400'}`}>{item.title}</p>
                  <p className={`text-gray-500 text-[13px] `}>{!item.completed && "Personal"}</p>
                </div>
                <div className="absolute text-2xl text-gray-500 right-5 hover:text-gray-800 duration-300">
                  {item.completed && <IoMdCloseCircle onClick={(e) => handleDeleteAction(e, item)} />}
                </div>
              </div>
            ))}

          <div className="flex flex-col gap-y-4 mt-5 ml-2">
            <p className="text-lg font-semibold text-gray-200 hover:text-blue-500 cursor-pointer duration-200">Tomorrow</p>
            <p className="text-lg font-semibold text-gray-200 hover:text-blue-500 cursor-pointer duration-200">Upcoming</p>
            <p className="text-lg font-semibold text-gray-200 hover:text-blue-500 cursor-pointer duration-200">Someday</p>
          </div>
        </div>

        <div className="absolute w-full left-0 bottom-0 bg-gray-800 p-2 pr-4 rounded-b-lg">
          {error && <div className="text-red-400 font-semibold uppercase ml-1">{error}</div>}

          <input
            type="text"
            name="title"
            value={input.title}
            className="w-full p-2 bg-gray-700 border rounded-lg focus-within:outline-none focus:border-blue-500 hover:border-blue-500 duration-300 relative"
            placeholder="Add Task"
            onChange={handleOnChange}
          />

          <button className="absolute right-6 bottom-4 text-gray-400 text-xl" onClick={handleBtnOnClick}>
            <MdAddCircleOutline />
          </button>
        </div>
      </div>

      {/* Right Section (Task Details) */}
      {
        count > 0 && (
          <div className="right bg-gray-900 text-white p-4 rounded-xl w-[550px] h-[600px] relative shadow shadow-xl shadow-black">
            <div className="flex flex-col justify-between">
              <div className="flex justify-between">
                <div className="flex items-center gap-x-1 text-[12px]">
                  <p><VscLock /></p>
                  <p>My lists</p>
                  <p>{'>'}</p>
                  <p>Personal</p>
                </div>

                <div className="flex items-center gap-x-3">
                  <p className="text-[12px]">Mark as complete</p>
                  <p className="text-xl"><TiSpiral /></p>
                  <p className="text-xl"><HiOutlineArchiveBox /></p>
                </div>
              </div>

              <div className="mt-4 duration-300 flex items-center gap-x-3 rounded-xl cursor-pointer">
                <input
                  type="text"
                  name="title"
                  value={edit.title}
                  onChange={handleEditData}
                  className="bg-transparent w-full py-2 rounded-lg focus:outline-none duration-300 border-none focus:outline-transparent text-xl font-semibold"
                />
              </div>

              <div className="flex gap-x-3 mt-2">
                <button className="rounded-full bg-gray-800 text-[12px] p-2 flex items-center gap-x-2 font-bold">
                  <span className="text-xl text-red-500 "><TbBellFilled /></span>Remind me
                </button>
                <button className="rounded-full bg-gray-800 text-[12px] p-2 flex items-center gap-x-2 font-bold">
                  <span className="text-lg text-yellow-500"><IoReaderOutline /></span>Personal
                </button>
                <button className="rounded-full bg-gray-800 text-[12px] p-2 flex items-center gap-x-2 font-bold">
                  <span className="text-xl text-blue-700"><FaHashtag /></span>Tag
                </button>
              </div>

              <div className="mt-4">
                <p className="text-gray-200">Notes</p>
                <input
                  type="text"
                  name="description"
                  value={edit.description}
                  onChange={handleEditData}
                  className="bg-transparent w-full py-2 rounded-lg focus:outline-none duration-300 border-none focus:outline-transparent"
                  placeholder="Insert your notes here"
                />
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-x-2">
                  <p className="text-gray-200 text-[12px] font-semibold">SUBTASKS</p>
                  <p className="text-blue-500 bg-transparent border-blue-500 rounded-full border px-2 text-[12px] flex items-center font-bold gap-x-1">
                    <span><BsStars /></span>Suggest
                  </p>
                </div>

                <div className="flex items-center gap-x-2 mt-3">
                  <input
                    type="radio"
                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-red-400 transition-all"
                    name="task"
                    id="subtask"
                  />
                  <label htmlFor="subtask" className="cursor-pointer text-gray-400 font-thin">Add a new subtask</label>
                </div>
              </div>

              <div className="mt-16">
                <div className="">
                  <p className="text-gray-200">Attachments</p>
                  <input
                    type="text"
                    className="bg-transparent w-full py-3 rounded-lg focus:outline-none duration-300 focus:outline-transparent text-center border-1 border-dotted border mt-4 cursor-pointer"
                    placeholder="Click to add / drop your files here"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default HearoSection;
