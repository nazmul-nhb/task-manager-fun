import Task from "./Task";
import PropTypes from "prop-types";
import { FiAlertCircle } from "react-icons/fi";

const TaskList = ({ tasks, toggleTaskStatus, handleDeleteTask }) => {
	if (!tasks.length) {
		return (
			<section className="mb-6 mt-12 flex flex-col items-center justify-center">
				<div className="relative w-20 h-20 mb-4">
					<div className="absolute inset-0 rounded-full border-8 border-red-200 border-t-red-600 animate-spin"></div>
					<span className="absolute inset-0 text-5xl font-black text-red-600 flex items-center justify-center animate-pulse">
						!
					</span>
				</div>
				<h1 className="text-2xl lg:text-3xl font-bold text-red-700 mb-2 animate-pulse">
					You Have No Tasks!
				</h1>
				<FiAlertCircle
					size={60}
					className="text-red-600 animate-bounce my-8"
				/>
			</section>
		);
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{tasks.map((task) => (
				<Task
					key={task.id}
					task={task}
					toggleTaskStatus={toggleTaskStatus}
					handleDeleteTask={handleDeleteTask}
				/>
			))}
		</div>
	);
};

TaskList.propTypes = {
	tasks: PropTypes.array.isRequired,
	toggleTaskStatus: PropTypes.func.isRequired,
	handleDeleteTask: PropTypes.func.isRequired,
};

export default TaskList;
