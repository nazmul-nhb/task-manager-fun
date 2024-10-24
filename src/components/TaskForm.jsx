import { FiPlusCircle } from "react-icons/fi";
import PropTypes from "prop-types";

const TaskForm = ({
	title,
	description,
	budget,
	onTitleChange,
	onDescriptionChange,
	onBudgetChange,
	onAddTask,
}) => {
	// Calculate remaining characters for title and description
	const titleMaxChars = 50;
	const descriptionMaxChars = 200;
	const titleCharsLeft = titleMaxChars - title.length;
	const descriptionCharsLeft = descriptionMaxChars - description.length;

	return (
		<div className="bg-slate-200 p-6 border rounded-lg shadow-md shadow-slate-700">
			<h3 className="text-lg font-semibold mb-4">Add a New Task</h3>

			{/* Task Title Input */}
			<div className="mb-4">
				<label
					htmlFor="title"
					className="block mb-2 text-sm font-medium"
				>
					Task Title (max {titleMaxChars} chars):
				</label>
				<input
					id="title"
					name="title"
					type="text"
					value={title}
					onChange={onTitleChange}
					maxLength={titleMaxChars}
					className="border border-gray-400 outline-0 p-2 rounded-lg w-full"
					placeholder="Enter task title"
				/>
				{/* Character counter for Task Title */}
				<p
					className={`text-sm mt-1 ${
						titleCharsLeft < 10 ? "text-red-600" : "text-gray-600"
					}`}
				>
					{titleCharsLeft} characters left
				</p>
			</div>

			{/* Task Description Input */}
			<div className="mb-4">
				<label
					htmlFor="description"
					className="block mb-2 text-sm font-medium"
				>
					Task Description (max {descriptionMaxChars} chars):
				</label>
				<textarea
					id="description"
					name="description"
					value={description}
					onChange={onDescriptionChange}
					maxLength={descriptionMaxChars}
					className="border border-gray-400 outline-0 p-2 rounded-lg w-full"
					placeholder="Enter task description"
				/>
				{/* Character counter for Task Description */}
				<p
					className={`text-sm mt-1 ${
						descriptionCharsLeft < 20
							? "text-red-600"
							: "text-gray-600"
					}`}
				>
					{descriptionCharsLeft} characters left
				</p>
			</div>

			{/* Task Budget Input */}
			<div className="mb-4">
				<label
					htmlFor="budget"
					className="block mb-2 text-sm font-medium"
				>
					Task Budget (positive number):
				</label>
				<input
					id="budget"
					name="budget"
					type="number"
					value={budget}
					onChange={onBudgetChange}
					min="0"
					className="border border-gray-400 outline-0 p-2 rounded-lg w-full"
					placeholder="Enter task budget"
				/>
			</div>

			{/* Add Task Button */}
			<button
				onClick={onAddTask}
				className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2"
			>
				<FiPlusCircle size={20} />
				Add Task
			</button>
		</div>
	);
};

TaskForm.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	budget: PropTypes.string.isRequired,
	onTitleChange: PropTypes.func.isRequired,
	onDescriptionChange: PropTypes.func.isRequired,
	onBudgetChange: PropTypes.func.isRequired,
	onAddTask: PropTypes.func.isRequired,
};

export default TaskForm;
