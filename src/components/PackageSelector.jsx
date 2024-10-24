import PropTypes from "prop-types";

const PackageSelector = ({ packageType, onPackageChange }) => {
	return (
		<div className="bg-slate-200 p-6 border border-gray-500 rounded-lg shadow-md shadow-slate-700">
			<label className="block mb-2 text-sm font-medium">
				Select Package:
			</label>
			<select
				value={packageType}
				onChange={onPackageChange}
				className="border border-gray-500 p-2 rounded-lg w-full"
			>
				<option value="Basic">Basic (5 Tasks)</option>
				<option value="Standard">Standard (15 Tasks)</option>
				<option value="Premium">Premium (30 Tasks)</option>
			</select>
		</div>
	);
};

PackageSelector.propTypes = {
	packageType: PropTypes.string.isRequired,
	onPackageChange: PropTypes.func.isRequired,
};

export default PackageSelector;
