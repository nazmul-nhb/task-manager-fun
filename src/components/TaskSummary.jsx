import PropTypes from "prop-types";
import {
	FiClipboard,
	FiCheckCircle,
	FiDollarSign,
	FiMinusCircle,
	FiLayers,
} from "react-icons/fi";

const TaskSummary = ({
	totalTasks,
	completedTasks,
	totalBudget,
	totalDeducted,
}) => {
	const remainingBudget = (totalBudget - totalDeducted).toFixed(2);

	return (
		<div className="bg-slate-200 p-6 border rounded-lg shadow-md shadow-slate-500 transition-all duration-500 hover:scale-105">
			<h3 className="text-xl font-semibold mb-4 text-slate-700 flex items-center gap-2">
				<FiLayers size={24} className="text-blue-500" />
				Summary
			</h3>

			<div className="space-y-3">
				<div className="flex items-center gap-2">
					<FiClipboard size={20} className="text-slate-600" />
					<p className="font-medium">
						Total Tasks Created:{" "}
						<span className="text-slate-800">{totalTasks}</span>
					</p>
				</div>

				<div className="flex items-center gap-2">
					<FiCheckCircle size={20} className="text-green-600" />
					<p className="font-medium">
						Completed Tasks:{" "}
						<span className="text-green-600">{completedTasks}</span>
					</p>
				</div>

				<div className="flex items-center gap-2">
					<FiDollarSign size={20} className="text-blue-600" />
					<p className="font-medium">
						Total Budget:{" "}
						<span className="text-blue-600">
							${totalBudget.toFixed(2)}
						</span>
					</p>
				</div>

				<div className="flex items-center gap-2">
					<FiMinusCircle size={20} className="text-red-600" />
					<p className="font-medium">
						Total Deducted:{" "}
						<span className="text-red-600">
							${totalDeducted.toFixed(2)}
						</span>
					</p>
				</div>

				<div className="flex items-center gap-2">
					<FiDollarSign size={20} className="text-green-500" />
					<p className="font-medium">
						Remaining Budget:{" "}
						<span className="text-green-500">
							${remainingBudget}
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

TaskSummary.propTypes = {
	totalTasks: PropTypes.number.isRequired,
	completedTasks: PropTypes.number.isRequired,
	totalBudget: PropTypes.number.isRequired,
	totalDeducted: PropTypes.number.isRequired,
};

export default TaskSummary;
