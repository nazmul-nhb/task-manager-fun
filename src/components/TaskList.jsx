import Task from "./Task";
import PropTypes from "prop-types";

const TaskList = ({ tasks, toggleTaskStatus, handleDeleteTask }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
