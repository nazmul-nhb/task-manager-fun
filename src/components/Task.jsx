import PropTypes from "prop-types";
import { FiTrash2, FiCheckSquare, FiSquare } from "react-icons/fi";

const Task = ({ task, toggleTaskStatus, handleDeleteTask }) => {
	return (
		<div
			className={`bg-white p-6 rounded-lg shadow-md ${
				task.status === "Completed" ? "bg-green-100" : ""
			}`}
		>
			<div className="flex justify-between items-center">
				<div>
					<h4 className="font-bold mb-2">{task.title}</h4>
					<p className="text-sm mb-1">{task.description}</p>
					<p className="text-sm">Budget: ${task.originalBudget}</p>
					<p className="text-sm">Deducted: ${task.deducted}</p>
					<p className="text-sm">
						Effective: ${task.effectiveBudget}
					</p>
					<p className="text-sm font-semibold">
						Status: {task.status}
					</p>
				</div>
				<div className="flex gap-2">
					<button
						onClick={() => toggleTaskStatus(task.id)}
						className="text-green-600"
					>
						{task.status === "Pending" ? (
							<FiSquare size={24} />
						) : (
							<FiCheckSquare size={24} />
						)}
					</button>
					<button
						onClick={() => handleDeleteTask(task.id)}
						className="text-red-600"
					>
						<FiTrash2 size={24} />
					</button>
				</div>
			</div>
		</div>
	);
};

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
