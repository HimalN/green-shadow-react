import './Vehicle.css'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store/Store.ts";
import Vehicles from "../models/Vehicle.ts";
import {useEffect, useState} from "react";
import {searchStaffs} from "../reducers/StaffsSlice.ts";
import {deleteVehicles, getVehicles, saveVehicles, searchVehicles, updateVehicles} from "../reducers/VehicleSlice.ts";


export const Vehicle = () => {
    const dispatch = useDispatch<AppDispatch>();
    const vehicles = useSelector((state: { vehicles: Vehicles[] }) => state.vehicles);

    const [vehicleCode, setVehicleCode] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [licensePlate, setLicensePlate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [remarks, setRemarks] = useState('');
    const [role, setRole] = useState('');
    const [status, setStatus] = useState('Available');
    const [vehicleCategory, setVehicleCategory] = useState('');
    const [staffID, setStaffID] = useState('');
    const [SearchedStaff, setSearchedStaff] = useState('');
    const [SearchedVehicle, setSearchedVehicle] = useState('');

    useEffect(() => {
        if (vehicles.length === 0)
            dispatch(getVehicles());
    },[dispatch,vehicles.length]);

    const handleClear = async () => {
        setVehicleCode('');
        setEmail('');
        setFirstName('');
        setFuelType('');
        setLicensePlate('');
        setPhoneNumber('');
        setRemarks('');
        setRole('');
        setStatus('Available');
        setVehicleCategory('');
        setStaffID('');
    };

    const handleStaffSearch = async () => {
        try {
            const fetchedStaffs = await dispatch(searchStaffs(SearchedStaff));
            if (fetchedStaffs.payload) {
                setStaffID(fetchedStaffs.payload.staff_id);
                setEmail(fetchedStaffs.payload.email);
                setFirstName(fetchedStaffs.payload.first_name);
                setPhoneNumber(fetchedStaffs.payload.phone_no);
                setRole(fetchedStaffs.payload.role);
                setSearchedStaff('');
            } else {
                console.warn("No staff data found.");
            }
        } catch (error) {
            console.error("Error fetching fields data:",error);
        }
    };

    const handleSave = async () => {
        const vehicleObj = new Vehicles(vehicleCode, email, firstName, fuelType, licensePlate, phoneNumber, remarks, role, status, vehicleCategory, staffID);
        try {
            await dispatch(saveVehicles(vehicleObj));
            dispatch(getVehicles());
            handleClear();
            console.log("Vehicle data saved successfully.");
        } catch (e) {
            console.error("Error saving vehicle data:", e);
        }
    };

    const handleDelete = async () => {
        try {
            await dispatch(deleteVehicles(vehicleCode));
            dispatch(getVehicles());
            handleClear();
            console.log("Vehicle data deleted successfully.");
        } catch (e) {
            console.error("Error deleting vehicle data:", e);
        }
    };

    const handleUpdate = async () => {
        const vehicleObj = new Vehicles(vehicleCode, email, firstName, fuelType, licensePlate, phoneNumber, remarks, role, status, vehicleCategory, staffID);
        try {
            await dispatch(updateVehicles(vehicleObj));
            dispatch(getVehicles());
            handleClear();
            console.log("Vehicle data updated successfully.");
        } catch (e) {
            console.error("Error updating vehicle data:", e);
        }
    };

    const handleSearch = async () => {
        try {
            const fetchedVehicles = await dispatch(searchVehicles(SearchedVehicle));
            if (fetchedVehicles.payload) {
                setVehicleCode(fetchedVehicles.payload.vehicle_code);
                setEmail(fetchedVehicles.payload.email);
                setFirstName(fetchedVehicles.payload.first_name);
                setFuelType(fetchedVehicles.payload.fuel_type);
                setLicensePlate(fetchedVehicles.payload.license_plate);
                setPhoneNumber(fetchedVehicles.payload.phone_no);
                setRemarks(fetchedVehicles.payload.remarks);
                setRole(fetchedVehicles.payload.role);
                setStatus(fetchedVehicles.payload.status);
                setVehicleCategory(fetchedVehicles.payload.vehicle_category);
                setStaffID(fetchedVehicles.payload.staff_id);
                setSearchedVehicle('');
            } else {
                console.warn("No vehicle data found.");
            }
        } catch (e) {
            console.error("Error fetching vehicle data:", e);
        }
    };

    return (
        <div>
            <div className="vehicle" id="vehicle">
                <div className="custom-form">
                    <div className=" row">
                        <div className="col-2">
                            <label className="form-label">Vehicle code</label>
                            <input id="vehicleCode" type="text" className="form-control" placeholder="Ex: V0001"
                                   aria-label="Vehicle code" value={vehicleCode}
                                   onChange={(e) => setVehicleCode(e.target.value)}/>
                        </div>
                        <div className="col">
                            <label className="form-label">License plate number </label>
                            <input id="vehicleLicenseNumber" type="text" className="form-control"
                                   placeholder="Ex: LY-5495" aria-label="License plate number " value={licensePlate}
                                   onChange={(e) => setLicensePlate(e.target.value)}/>
                        </div>
                        <div className="col">
                            <label className="form-label">Fuel type </label>
                            <input id="txtFuelType" className="form-control" type="text"
                                   aria-label="default input example"
                                   value={fuelType}
                                   onChange={(e) => setFuelType(e.target.value)}/>
                            <label id="vehicleFuelTypeCheck"></label>
                        </div>
                        <div className="col">
                            <label className="form-label">Vehicle category </label>
                            <input id="vehicleCategory" type="text" className="form-control" placeholder="Ex: Lorry"
                                   aria-label="Vehicle category " value={vehicleCategory}
                                   onChange={(e) => setVehicleCategory(e.target.value)}/>
                        </div>
                        <div className="col">
                            <label className="form-label">Remarks</label>
                            <input id="txtRemarks" className="form-control" type="text"
                                   aria-label="default input example"
                                   value={remarks}
                                   onChange={(e) => setRemarks(e.target.value)}/>
                            <label id="vehicleRemarksCheck"></label>
                        </div>
                        <div className="col">
                            <label className="form-label">Status</label>
                            <select className="form-select" id="txtStatus" required
                                    defaultValue={status} onChange={(e) => setStatus(e.target.value)}>
                                <option>Available</option>
                                <option>Not Available</option>
                            </select>
                            <label id="vehicleStatusCheck"></label>
                        </div>

                    </div>
                    <div className=" row">
                        <div className="col">
                            <label className="form-label">Staff</label>
                            <input id="txtSearchEmploys" className="form-control" type="text"
                                   placeholder="Enter employee name or ID"
                                   aria-label="default input example"
                                   value={SearchedStaff}
                                   onChange={(e) => setSearchedStaff(e.target.value)}/>
                            <button id="btnSearchEmploys" type="button" className="btn btn-primary"
                                    onClick={handleStaffSearch}>Search
                            </button>
                            <label id="vehicleStaffCodeCheck"></label>
                        </div>
                        {/*Staff Email*/}
                        <div id="employee-email-vehicle-div" className="col">
                            <label id="lblVehicleEmail" htmlFor="txtVehicleEmail">Email :</label>
                            <input id="txtVehicleEmail" className="form-control" type="email"
                                   aria-label="default input example"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        {/*Staff ID*/}
                        <div id="employee-member-id-vehicle-div" className="col">
                            <label id="lblVehicleMemberID" htmlFor="txtVehicleMemberID">Member ID :</label>
                            <input id="txtVehicleMemberID" className="form-control" type="text"
                                   aria-label="default input example"
                                   value={staffID}
                                   onChange={(e) => setStaffID(e.target.value)}/>
                        </div>

                        {/*Staff First Name*/}
                        <div id="employee-first-name-vehicle-div" className="col">
                            <label id="lblVehicleFirstName" htmlFor="txtVehicleFirstName">First Name :</label>
                            <input id="txtVehicleFirstName" className="form-control" type="text"
                                   aria-label="default input example"
                                   value={firstName}
                                   onChange={(e) => setFirstName(e.target.value)}/>
                        </div>

                        {/*Role*/}
                        <div id="employee-role-vehicle-div" className="col">
                            <label id="lblVehicleRole" htmlFor="txtVehicleRole">Role :</label>
                            <input id="txtVehicleRole" className="form-control" type="text"
                                   aria-label="default input example"
                                   value={role}
                                   onChange={(e) => setRole(e.target.value)}/>
                        </div>

                        {/*Phone Number*/}
                        <div id="employee-phone-number-vehicle-div" className="col">
                            <label id="lblVehiclePhoneNumber" htmlFor="txtVehiclePhoneNumber">Phone Number :</label>
                            <input id="txtVehiclePhoneNumber" className="form-control" type="text"
                                   aria-label="default input example"
                                   value={phoneNumber}
                                   onChange={(e) => setPhoneNumber(e.target.value)}/>
                        </div>
                    </div>

                    <div className="custom-button">
                        <button id="search-vehicle-btn" type="button" className="btn btn-primary"
                                onClick={handleSearch||handleStaffSearch}>Search
                        </button>
                        <button id="add-vehicle-btn" type="button" className="btn btn-success"
                                onClick={handleSave}>Add
                        </button>
                        <button id="delete-vehicle-btn" type="button" className="btn btn-danger"
                                onClick={handleDelete}>Delete
                        </button>
                        <button id="update-vehicle-btn" type="button" className="btn btn-warning"
                                onClick={handleUpdate}>Update
                            </button>
                            <button id="clear-vehicle-btn" type="button" className="btn btn-info"
                                    onClick={handleClear}>Clear
                            </button>
                        </div>
                        <div className="custom-table table-responsive p-3">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">Vehicle ID</th>
                                    <th scope="col">Model</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">License Plate</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Allocated Staff</th>
                                    <th scope="col">Remarks</th>
                                </tr>
                                </thead>
                                <tbody id="vehicles-table-tb">
                                {vehicles.map((vehicle, index) => (
                                    <tr key={index}>
                                        <td>{vehicle.vehicle_code}</td>
                                        <td>{vehicle.license_plate}</td>
                                        <td>{vehicle.fuel_type}</td>
                                        <td>{vehicle.vehicle_category}</td>
                                        <td>{vehicle.remarks}</td>
                                        <td>{vehicle.status}</td>
                                        <td>{vehicle.staff_id}</td>
                                        <td>{vehicle.first_name}</td>
                                        <td>{vehicle.role}</td>
                                        <td>{vehicle.phone_no}</td>
                                        <td>{vehicle.email}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    );
};