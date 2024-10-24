import { useState, useEffect } from "react";
import { getItemFromStorage, setItemToStorage } from "./utils/localStorage";
import Task from "./components/Task";
import { FiPlusCircle } from "react-icons/fi";
import { generateID } from "@nazmul-nhb/id-generator";

const PACKAGES = {
	BASIC: 5,
	STANDARD: 15,
	PREMIUM: 30,
};

const App = () => {
	const [packageType, setPackageType] = useState("BASIC");
	const [tasks, setTasks] = useState([]);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [budget, setBudget] = useState("");
	const [completedTasks, setCompletedTasks] = useState(0);

	useEffect(() => {
		const storedTasks = getItemFromStorage("tasks", []);
		setTasks(storedTasks);
		calculateCompletedTasks(storedTasks);
	}, []);

	const calculateCompletedTasks = (taskList) => {
		const completed = taskList.filter(
			(task) => task.status === "Completed"
		).length;
		setCompletedTasks(completed);
	};

	const handlePackageChange = (e) => setPackageType(e.target.value);

	const handleAddTask = () => {
		if (title.length <= 50 && description.length <= 200 && budget > 0) {
			if (tasks.length < PACKAGES[packageType]) {
				const task = {
					id: generateID({
						timeStamp: false,
						separator: "",
						caseOption: "lower",
					}),
					title,
					description,
					originalBudget: parseFloat(budget),
					deducted: parseFloat(budget) * 0.1,
					effectiveBudget: parseFloat(budget) * 0.9,
					status: "Pending",
				};

				const newTasks = [...tasks, task];
				setTasks(newTasks);
				setItemToStorage("tasks", newTasks);
				calculateCompletedTasks(newTasks);
				setTitle("");
				setDescription("");
				setBudget("");
			} else {
				alert(
					`You've reached the limit for the ${packageType} package`
				);
			}
		} else {
			alert("Please ensure all fields meet the specified criteria");
		}
	};

	const handleDeleteTask = (id) => {
		const newTasks = tasks.filter((task) => task.id !== id);
		setTasks(newTasks);
		setItemToStorage("tasks", newTasks);
		calculateCompletedTasks(newTasks);
	};

	const toggleTaskStatus = (id) => {
		const newTasks = tasks.map((task) =>
			task.id === id
				? {
						...task,
						status:
							task.status === "Pending" ? "Completed" : "Pending",
				  }
				: task
		);
		setTasks(newTasks);
		setItemToStorage("tasks", newTasks);
		calculateCompletedTasks(newTasks);
	};

	const totalBudget = tasks.reduce(
		(sum, task) => sum + task.originalBudget,
		0
	);
	const totalDeducted = tasks.reduce((sum, task) => sum + task.deducted, 0);

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">
				Task Management Application
			</h1>

			<div className="mb-4">
				<label className="block mb-2">Select Package:</label>
				<select
					value={packageType}
					onChange={handlePackageChange}
					className="border p-2 rounded"
				>
					<option value="BASIC">Basic (5 Tasks)</option>
					<option value="STANDARD">Standard (15 Tasks)</option>
					<option value="PREMIUM">Premium (30 Tasks)</option>
				</select>
			</div>

			<div className="mb-4">
				<label className="block mb-2">Task Title (max 50 chars):</label>
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					maxLength="50"
					className="border p-2 rounded w-full"
				/>
			</div>

			<div className="mb-4">
				<label className="block mb-2">
					Task Description (max 200 chars):
				</label>
				<textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					maxLength="200"
					className="border p-2 rounded w-full"
				/>
			</div>

			<div className="mb-4">
				<label className="block mb-2">
					Task Budget (must be positive):
				</label>
				<input
					type="number"
					value={budget}
					onChange={(e) => setBudget(e.target.value)}
					min="0"
					className="border p-2 rounded w-full"
				/>
			</div>

			<button
				onClick={handleAddTask}
				className="bg-blue-500 text-white p-2 rounded flex items-center gap-2"
			>
				<FiPlusCircle size={20} />
				Add Task
			</button>

			<h2 className="text-xl font-bold mt-6">Task List</h2>

			<ul className="mt-4">
				{tasks.map((task) => (
					<Task
						key={task.id}
						task={task}
						toggleTaskStatus={toggleTaskStatus}
						handleDeleteTask={handleDeleteTask}
					/>
				))}
			</ul>
			{/* Summary */}
			<div className="mt-6">
				<h2 className="text-xl font-bold">Summary</h2>
				<p>Total Tasks Created: {tasks.length}</p>
				<p>Completed Tasks: {completedTasks}</p>
				<p>Total Budget: ${totalBudget}</p>
				<p>Total Deducted: ${totalDeducted}</p>
				<p>Remaining Budget: ${totalBudget - totalDeducted}</p>
			</div>
		</div>
	);
};

export default App;
