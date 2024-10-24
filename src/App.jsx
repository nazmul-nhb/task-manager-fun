import { useState, useEffect } from "react";
import { getItemFromStorage, setItemToStorage } from "./utils/localStorage";
import TaskForm from "./components/TaskForm";
import PackageSelector from "./components/PackageSelector";
import TaskSummary from "./components/TaskSummary";
import TaskList from "./components/TaskList";
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
		<section className="container mx-auto py-10 px-4">
			<h1 className="text-3xl font-bold text-center mb-8">
				Manage Your Tasks
			</h1>

			<div className="flex flex-wrap justify-around">
				<div className="flex-1">
					{" "}
					<PackageSelector
						packageType={packageType}
						onPackageChange={handlePackageChange}
					/>
				</div>
				<div className="flex-1">
					<TaskForm
						title={title}
						description={description}
						budget={budget}
						onTitleChange={(e) => setTitle(e.target.value)}
						onDescriptionChange={(e) =>
							setDescription(e.target.value)
						}
						onBudgetChange={(e) => setBudget(e.target.value)}
						onAddTask={handleAddTask}
					/>
				</div>
				<div className="flex-1">
					<TaskSummary
						totalTasks={tasks.length}
						completedTasks={completedTasks}
						totalBudget={totalBudget}
						totalDeducted={totalDeducted}
					/>
				</div>
			</div>
			<h2 className="text-2xl font-bold mt-10 mb-4">Task List</h2>
			<TaskList
				tasks={tasks}
				toggleTaskStatus={toggleTaskStatus}
				handleDeleteTask={handleDeleteTask}
			/>
		</section>
	);
};

export default App;
