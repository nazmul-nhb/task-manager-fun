import PropTypes from "prop-types";
import { FiTrash2, FiCheckSquare, FiSquare } from "react-icons/fi";

const Task = ({ task, toggleTaskStatus, handleDeleteTask }) => {
	return (
		<li
			className={`border p-4 mb-2 rounded ${
				task.status === "Completed" ? "bg-green-300" : "bg-white"
			}`}
		>
			<div className="flex justify-between items-center">
				<div>
					<h3 className="font-bold">{task.title}</h3>
					<p>{task.description}</p>
					<p>Original Budget: ${task.originalBudget}</p>
					<p>Authority Deducted: ${task.deducted}</p>
					<p>Effective Budget: ${task.effectiveBudget}</p>
					<p>Status: {task.status}</p>
				</div>
				<div className="flex gap-2">
					<button
						onClick={() => toggleTaskStatus(task.id)}
						className="text-yellow-500"
					>
						{task.status === "Pending" ? (
							<FiSquare size={24} />
						) : (
							<FiCheckSquare size={24} />
						)}
					</button>
					<button
						onClick={() => handleDeleteTask(task.id)}
						className="text-red-500"
					>
						<FiTrash2 size={24} />
					</button>
				</div>
			</div>
		</li>
	);
};

// Prop Types for Task validation
Task.propTypes = {
	task: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		originalBudget: PropTypes.number.isRequired,
		deducted: PropTypes.number.isRequired,
		effectiveBudget: PropTypes.number.isRequired,
		status: PropTypes.string.isRequired,
	}).isRequired,
	toggleTaskStatus: PropTypes.func.isRequired,
	handleDeleteTask: PropTypes.func.isRequired,
};

export default Task;
