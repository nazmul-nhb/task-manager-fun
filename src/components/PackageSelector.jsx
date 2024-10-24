import PropTypes from "prop-types";

const PackageSelector = ({ packageType, onPackageChange }) => {
	return (
		<div className="bg-slate-200 p-6 border rounded-lg shadow-md shadow-slate-700">
			<label
				htmlFor="packages"
				className="block mb-2 text-sm font-medium"
			>
				Select Package:
			</label>
			<select
				id="packages"
				name="packages"
				value={packageType}
				onChange={onPackageChange}
				className="border border-gray-400 p-2 rounded-lg w-full outline-0"
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
