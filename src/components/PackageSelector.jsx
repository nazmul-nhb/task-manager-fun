import PropTypes from "prop-types";

const PackageSelector = ({ packageType, onPackageChange }) => {
	return (
		<div className="bg-white p-6 rounded-lg shadow-md mb-6">
			<label className="block mb-2 text-sm font-medium">
				Select Package:
			</label>
			<select
				value={packageType}
				onChange={onPackageChange}
				className="border p-2 rounded-lg w-full"
			>
				<option value="BASIC">Basic (5 Tasks)</option>
				<option value="STANDARD">Standard (15 Tasks)</option>
				<option value="PREMIUM">Premium (30 Tasks)</option>
			</select>
		</div>
	);
};

PackageSelector.propTypes = {
	packageType: PropTypes.string.isRequired,
	onPackageChange: PropTypes.func.isRequired,
};

export default PackageSelector;
