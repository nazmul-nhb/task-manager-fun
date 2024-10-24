import PropTypes from "prop-types";
import { FiTrash2, FiCheckSquare, FiSquare } from "react-icons/fi";

const Task = ({ task, toggleTaskStatus, handleDeleteTask }) => {
	return (
		<div
			className={`p-6 border rounded-lg shadow-md transition-all duration-500 transform hover:scale-105 ${
				task.status === "Completed"
					? "bg-green-100 shadow-green-800"
					: "bg-red-100 shadow-red-700"
			}`}
		>
			<div className="flex justify-between items-start">
				<div>
					<h4 className="font-bold text-xl mb-2">{task.title}</h4>
					<p className="text-sm text-gray-600 mb-2">
						{task.description}
					</p>
					<div className="text-sm font-medium">
						<p>
							Budget:{" "}
							<span className="text-blue-500">
								${task.originalBudget}
							</span>
						</p>
						<p>
							Deducted:{" "}
							<span className="text-red-500">
								${task.deducted}
							</span>
						</p>
						<p>
							Effective:{" "}
							<span className="text-green-500">
								${task.effectiveBudget}
							</span>
						</p>
						<p
							className={`font-semibold mt-2 ${
								task.status === "Completed"
									? "text-green-600"
									: "text-red-600"
							}`}
						>
							Status: {task.status}
						</p>
					</div>
				</div>

				<div className="flex gap-3 items-center">
					<button
						onClick={() => toggleTaskStatus(task.id)}
						className={`transition-colors duration-300 ${
							task.status === "Pending"
								? "text-gray-400 hover:text-blue-500"
								: "text-green-600 hover:text-green-700"
						}`}
					>
						{task.status === "Pending" ? (
							<FiSquare size={24} />
						) : (
							<FiCheckSquare size={24} />
						)}
					</button>
					<button
						onClick={() => handleDeleteTask(task.id)}
						className="text-red-500 hover:text-red-600 transition-colors duration-300"
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
