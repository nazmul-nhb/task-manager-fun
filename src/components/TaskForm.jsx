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
	return (
		<div className="bg-slate-200 p-6 border rounded-lg shadow-md shadow-slate-700">
			<h3 className="text-lg font-semibold mb-4">Add a New Task</h3>
			<div className="mb-4">
				<label className="block mb-2 text-sm font-medium">
					Task Title (max 50 chars):
				</label>
				<input
					type="text"
					value={title}
					onChange={onTitleChange}
					maxLength="50"
					className="border border-gray-400 outline-0 p-2 rounded-lg w-full"
					placeholder="Enter task title"
				/>
			</div>

			<div className="mb-4">
				<label className="block mb-2 text-sm font-medium">
					Task Description (max 200 chars):
				</label>
				<textarea
					value={description}
					onChange={onDescriptionChange}
					maxLength="200"
					className="border border-gray-400 outline-0 p-2 rounded-lg w-full"
					placeholder="Enter task description"
				/>
			</div>

			<div className="mb-4">
				<label className="block mb-2 text-sm font-medium">
					Task Budget (positive number):
				</label>
				<input
					type="number"
					value={budget}
					onChange={onBudgetChange}
					min="0"
					className="border border-gray-400 outline-0 p-2 rounded-lg w-full"
					placeholder="Enter task budget"
				/>
			</div>

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
