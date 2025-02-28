import './Staff.css'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store/Store.ts";
import Staffs from "../models/Staffs.ts";
import {useEffect, useState} from "react";
import {searchFields} from "../reducers/FieldsSlice.ts";
import {deleteStaffs, getStaffs, saveStaffs, searchStaffs, updateStaffs} from "../reducers/StaffsSlice.ts";


export const Staff = () => {

    const dispatch = useDispatch<AppDispatch>();
    const staffs = useSelector((state: { staffs: Staffs[] }) => state.staffs);

    const [staffID, setStaffID] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [designation, setDesignation] = useState('');
    const [dob, setDob] = useState('');
    const [role, setRole] = useState('');
    const [gender, setGender] = useState('');
    const [joinedDate, setJoinedDate] = useState('');
    const [address01, setAddress01] = useState('');
    const [address02, setAddress02] = useState('');
    const [address03, setAddress03] = useState('');
    const [address04, setAddress04] = useState('');
    const [address05, setAddress05] = useState('');
    const [fieldCode, setFieldCode] = useState('');
    const [fieldName, setFieldName] = useState('');
    const [SearchedField, setSearchedField] = useState('');
    const [SearchedStaff, setSearchedStaff] = useState('');

    useEffect(() => {
        if (staffs.length === 0)
            dispatch(getStaffs());
    },[dispatch,staffs.length]);

    const handleClear = () => {
        setStaffID('');
        setAddress01('');
        setAddress02('');
        setAddress03('');
        setAddress04('');
        setAddress05('');
        setDesignation('');
        setDob('');
        setEmail('');
        setFirstName('');
        setGender('');
        setJoinedDate('');
        setLastName('');
        setPhoneNumber('');
        setRole('');
        setFieldCode('');
        setFieldName('');
        setSearchedStaff('');
        setSearchedField('');
    };

    const handleFieldSearch = async () => {
        try {
            const fetchedFields = await dispatch(searchFields(SearchedField));
            if (fetchedFields.payload) {
                setFieldCode(fetchedFields.payload.field_code);
                setFieldName(fetchedFields.payload.field_name);
                setSearchedField('');
            } else {
                console.warn("No field data found.");
            }
        } catch (e) {
            console.error("Error fetching fields data:", e);
        }
    };

    const handleSave = async () => {
        const staffObj = new Staffs(staffID, address01, address02, address03, address04, address05, designation, dob, email, firstName, gender, joinedDate, lastName, phoneNumber,
            role, fieldCode);

        try {
            await dispatch(saveStaffs(staffObj));
            dispatch(getStaffs());
            handleClear();
            console.log("Staff data saved successfully.");
        } catch (e) {
            console.error("Error saving staff data:", e);
        }
    };

    const handleDelete = async () => {
        try {
            await dispatch(deleteStaffs(staffID));
            dispatch(getStaffs());
            handleClear();
            console.log("Staff data deleted successfully.");
        } catch (e) {
            console.error("Error deleting staff data:", e);
        }
    };

    const handleUpdate = async () => {
        const staffObj = new Staffs(staffID, address01, address02, address03, address04, address05, designation, dob, email, firstName, gender, joinedDate, lastName, phoneNumber,
            role, fieldCode);
        try {
            await dispatch(updateStaffs(staffObj));
            dispatch(getStaffs());
            handleClear();
            console.log("Staff data updated successfully.");
        } catch (e) {
            console.error("Error updating staff data:", e);
        }
    };

    const handleSearch = async () => {
        try {
            const fetchedStaffs = await dispatch(searchStaffs(SearchedStaff));
            if (fetchedStaffs.payload) {
                setStaffID(fetchedStaffs.payload.staff_id);
                setAddress01(fetchedStaffs.payload.address_01);
                setAddress02(fetchedStaffs.payload.address_02);
                setAddress03(fetchedStaffs.payload.address_03);
                setAddress04(fetchedStaffs.payload.address_04);
                setAddress05(fetchedStaffs.payload.address_05);
                setDesignation(fetchedStaffs.payload.designation);
                setDob(fetchedStaffs.payload.dob);
                setEmail(fetchedStaffs.payload.email);
                setFirstName(fetchedStaffs.payload.first_name);
                setGender(fetchedStaffs.payload.gender);
                setJoinedDate(fetchedStaffs.payload.joined_date);
                setLastName(fetchedStaffs.payload.last_name);
                setPhoneNumber(fetchedStaffs.payload.phone_no);
                setRole(fetchedStaffs.payload.role);
                setFieldCode(fetchedStaffs.payload.field_code);
                const fetchedFields = await dispatch(searchFields(fetchedStaffs.payload.field_code));
                if (fetchedFields.payload) {
                    setFieldName(fetchedFields.payload.field_name);
                }
                setSearchedStaff('');
            } else {
                console.warn("No staff data found.");
            }
        } catch (e) {
            console.error("Error fetching staffs data:", e);
        }
    };

    return (
        <div>
            <style>{'body { overflow-y: scroll; }'}</style>
            <div className="staff" id="staff">
                <div className="custom-form">
                    <div className=" row">
                        <div id="staff-id-div" className="col">
                            <label id="lblMemberID" htmlFor="txtMemberID">Member ID :</label>
                            <input id="txtMemberID" className="form-control" type="text" placeholder="S001"
                                   aria-label="default input example"
                                   value={staffID}
                                   onChange={(e) => setStaffID(e.target.value)}/>
                        </div>
                        <div id="staff-first-name-div" className="col">
                            <label id="lblFirstName" htmlFor="txtFirstName">First Name :</label>
                            <input id="txtFirstName" className="form-control" type="text" placeholder="Himal"
                                   aria-label="default input example"
                                   value={firstName}
                                   onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div id="staff-last-name-div" className="col">
                            <label id="lblLastName" htmlFor="txtLastName">Last Name :</label>
                            <input id="txtLastName" className="form-control" type="text" placeholder="Nimsara"
                                   aria-label="default input example"
                                   value={lastName}
                                   onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                        <div id="staff-email-div" className="col">
                            <label id="lblEmail" htmlFor="txtEmail">Email :</label>
                            <input id="txtEmail" className="form-control" type="email" placeholder="example@gmail.com"
                                   aria-label="default input example"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div id="staff-phone-div" className="col">
                            <label id="lblPhoneNumber" htmlFor="txtPhoneNumber">Phone Number :</label>
                            <input id="txtPhoneNumber" className="form-control" type="text" placeholder="07X-XXX XXXX"
                                   aria-label="default input example"
                                   value={phoneNumber}
                                   onChange={(e) => setPhoneNumber(e.target.value)}/>
                        </div>

                    </div>
                    <div className=" row">
                        <div id="staff-designation-div" className="col">
                            <label id="lblDesignation" htmlFor="txtDesignation">Designation :</label>
                            <input id="txtDesignation" className="form-control" type="text" placeholder="Example"
                                   aria-label="default input example"
                                   value={designation}
                                   onChange={(e) => setDesignation(e.target.value)}/>
                        </div>
                        <div id="staff-dob-div" className="col">
                            <label id="lblDateOfBirth" htmlFor="txtDateOfBirth">Date of Birth :</label>
                            <input id="txtDateOfBirth" className="form-control" type="date" placeholder="2001/01/1"
                                   aria-label="default input example"
                                   value={dob}
                                   onChange={(e) => setDob(e.target.value)}/>
                        </div>
                        <div id="staff-role-div" className="col">
                            <label id="lblRole" htmlFor="txtRole">Role :</label>
                            <input id="txtRole" className="form-control" type="text" placeholder="Manager"
                                   aria-label="default input example"
                                   value={role}
                                   onChange={(e) => setRole(e.target.value)}/>
                        </div>
                        <div id="staff-gender-div" className="col">
                            <label id="lblGender" htmlFor="txtGender">Gender :</label>
                            <input id="txtGender" className="form-control" type="text" placeholder="Male/Female"
                                   aria-label="default input example"
                                   value={gender}
                                   onChange={(e) => setGender(e.target.value)}/>
                        </div>
                        <div id="staff-joined-div" className="col">
                            <label id="lblJoinedDate" htmlFor="txtJoinedDate">Joined Date :</label>
                            <input id="txtJoinedDate" className="form-control" type="date" placeholder="2025/02/28"
                                   aria-label="default input example"
                                   value={joinedDate}
                                   onChange={(e) => setJoinedDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className=" row">
                        <div id="staff-address-line1-div" className="col">
                            <label id="lblAddressLine1" htmlFor="txtAddressLine1">Address Line 01 :</label>
                            <input id="txtAddressLine1" className="form-control" type="text"
                                   aria-label="default input example"
                                   value={address01}
                                   onChange={(e) => setAddress01(e.target.value)}/>
                        </div>
                        <div id="staff-address-line2-div" className="col">
                            <label id="lblAddressLine2" htmlFor="txtAddressLine2">Address Line 02 :</label>
                            <input id="txtAddressLine2" className="form-control" type="text"
                                   aria-label="default input example"
                                   value={address02}
                                   onChange={(e) => setAddress02(e.target.value)}/>
                        </div>
                        <div id="staff-address-line3-div" className="col">
                            <label id="lblAddressLine3" htmlFor="txtAddressLine3">Address Line 03 :</label>
                            <input id="txtAddressLine3" className="form-control" type="text"
                                   aria-label="default input example"
                                   value={address03}
                                   onChange={(e) => setAddress03(e.target.value)}/>
                        </div>
                        <div id="staff-address-line4-div" className="col">
                            <label id="lblAddressLine4" htmlFor="txtAddressLine4">Address Line 04 :</label>
                            <input id="txtAddressLine4" className="form-control" type="text"
                                   aria-label="default input example"
                                   value={address04}
                                   onChange={(e) => setAddress04(e.target.value)}/>
                        </div>

                        {/*Address Line 05*/}
                        <div id="staff-address-line5-div" className="col">
                            <label id="lblAddressLine5" htmlFor="txtAddressLine5">Address Line 05 :</label>
                            <input id="txtAddressLine5" className="form-control" type="text"
                                   aria-label="default input example"
                                   value={address05}
                                   onChange={(e) => setAddress05(e.target.value)}/>
                        </div>
                    </div>
                    <div className=" row">
                        {/*Fields Code*/}
                        <div id="field-code-staff-div" className="col">
                            <label id="lblFieldCode-staff" htmlFor="txtFieldCode-staff">Field Code :</label>
                            <input id="txtFieldCode-staff" className="form-control" type="text"
                                   aria-label="default input example"
                                   value={fieldCode}
                                   onChange={(e) => setFieldCode(e.target.value)}/>
                        </div>

                        {/*Fields Name*/}
                        <div id="field-name-staff-div" className="col">
                            <label id="lblFieldName-staff" htmlFor="txtFieldName-staff">Field Name :</label>
                            <input id="txtFieldName-staff" className="form-control" type="text"
                                   aria-label="default input example"
                                   value={fieldName}
                                   onChange={(e) => setFieldName(e.target.value)}/>
                        </div>
                        {/*Search Fields*/}
                        <div id="search-fields-staff-div" className="col">
                            <label id="lblSearchFields-staff" htmlFor="txtSearchFields-staff">Search Fields :</label>
                            <input id="txtSearchFields-staff" className="form-control" type="text"
                                   placeholder="Enter field code or name"
                                   aria-label="default input example"
                                   value={SearchedField}
                                   onChange={(e) => setSearchedField(e.target.value)}/>
                            <button id="btnSearchFields-staff" type="button" className="btn btn-primary"
                                    onClick={handleFieldSearch}>Search
                            </button>
                        </div>
                        {/*Search Section*/}
                        <div id="search-staff-div" className="col">
                            {/*Label for Search*/}
                            <label id="lblSearchStaff" htmlFor="txtSearch-staff">Search Staff :</label>
                            <input id="txtSearch-staff" className="form-control" type="text" placeholder="Search by ID or Name"
                                   aria-label="default input example"
                                   value={SearchedStaff}
                                   onChange={(e) => setSearchedStaff(e.target.value)}/>
                            {/*Search Button*/}
                            <button id="search-staff" type="button" className="btn btn-primary" onClick={handleSearch}>Search</button>
                        </div>
                        <div className="col-5">
                            <div className="custom-button">
                                <button id="add-staff-btn" type="button" className="btn btn-success"
                                        onClick={handleSave}>Add
                                </button>
                                <button id="delete-staff-btn" type="button" className="btn btn-danger"
                                        onClick={handleDelete}>Delete
                                </button>
                                <button id="update-staff-btn" type="button" className="btn btn-warning"
                                        onClick={handleUpdate}>Update
                                </button>
                                <button id="clear-staff-btn" type="button" className="btn btn-info"
                                        onClick={handleClear}>Clear
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="custom-table table-responsive p-3">
                        <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Code</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Designation</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Role</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Joined Date</th>
                                <th scope="col">Address 01</th>
                                <th scope="col">Address 02</th>
                                <th scope="col">Address 03</th>
                                <th scope="col">Address 04</th>
                                <th scope="col">Address 05</th>
                                <th scope="col">Field Code</th>
                            </tr>
                            </thead>
                            <tbody id="staff-table-tb">
                            {staffs.map((staff, index) => (
                                <tr key={index}>
                                    <td>{staff.staff_id}</td>
                                    <td>{staff.first_name}</td>
                                    <td>{staff.last_name}</td>
                                    <td>{staff.email}</td>
                                    <td>{staff.phone_no}</td>
                                    <td>{staff.designation}</td>
                                    <td>{staff.dob}</td>
                                    <td>{staff.role}</td>
                                    <td>{staff.gender}</td>
                                    <td>{staff.joined_date}</td>
                                    <td>{staff.address_01}</td>
                                    <td>{staff.address_02}</td>
                                    <td>{staff.address_03}</td>
                                    <td>{staff.address_04}</td>
                                    <td>{staff.address_05}</td>
                                    <td>{staff.field_code}</td>
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