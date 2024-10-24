import PropTypes from "prop-types";

const TaskSummary = ({
	totalTasks,
	completedTasks,
	totalBudget,
	totalDeducted,
}) => {
	return (
		<div className="bg-white p-6 rounded-lg shadow-md">
			<h3 className="text-lg font-semibold mb-4">Summary</h3>
			<p>Total Tasks Created: {totalTasks}</p>
			<p>Completed Tasks: {completedTasks}</p>
			<p>Total Budget: ${totalBudget.toFixed(2)}</p>
			<p>Total Deducted: ${totalDeducted.toFixed(2)}</p>
			<p>Remaining Budget: ${(totalBudget - totalDeducted).toFixed(2)}</p>
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
