import './Staff.css'

export const Staff = () => {
    return (
        <div>
            <style>{'body { overflow-y: scroll; }'}</style>
            <div className="staff" id="staff">
                <div className="custom-form">
                    <div className=" row">
                        <div className="col-2">
                            <label className="form-label">Code</label>
                            <input id="staffCode" type="text" className="form-control" placeholder="Ex: S0001"
                                   aria-label="Code"/>
                        </div>
                        <div className="col">
                            <label className="form-label">First Name</label>
                            <input id="staffFirstName" type="text" className="form-control" placeholder="Ex: Himal"
                                   aria-label="First Name"/>
                        </div>
                        <div className="col">
                            <label className="form-label">Last Name</label>
                            <input id="staffLastName" type="text" className="form-control" placeholder="Ex: Nimsara"
                                   aria-label="Last name"/>
                        </div>
                        <div className="col">
                            <label className="form-label">Designation</label>
                            <input id="staffDesignation" type="text" className="form-control" placeholder="Ex: Owner"
                                   aria-label="Designation"/>
                        </div>
                        <div className="col">
                            <label className="form-label">Gender</label>
                            <select className="form-control" id="staffGenderSelect" name="gender">
                                <option value="" disabled selected>Choose Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <label id="staffGenderCheck"></label>
                        </div>

                    </div>
                    <div className=" row">
                        <div className="col-3">
                            <label className="form-label">Joined date</label>
                            <input id="staffJoinedDate" type="date" className="form-control"
                                   placeholder="Joined date of the member" aria-label="Joined date"/>
                        </div>
                        <div className="col-3">
                            <label className="form-label">Date of Birth</label>
                            <input id="staffDOB" type="date" className="form-control"
                                   placeholder="Designation of the member" aria-label="Date of Birth"/>
                        </div>
                    </div>
                    <div className=" row">
                        <div className="col">
                            <label className="form-label">Building no or name </label>
                            <input id="staffBuildingNo" type="text" className="form-control"
                                   placeholder="Ex: 659/Shadow Photography" aria-label="Building no or name "/>
                        </div>
                        <div className="col">
                            <label className="form-label">Street or lane</label>
                            <input id="staffStreet" type="text" className="form-control"
                                   placeholder="Ex: Gurugalla road" aria-label="Street or lane"/>
                        </div>
                        <div className="col">
                            <label className="form-label">Main city</label>
                            <input id="staffCity" type="text" className="form-control" placeholder="Ex: Thalduwa"
                                   aria-label="Main city"/>
                        </div>
                        <div className="col">
                            <label className="form-label">Main state</label>
                            <input id="staffState" type="text" className="form-control" placeholder="Ex: Avissawella"
                                   aria-label="Main state"/>
                        </div>
                        <div className="col-2">
                            <label className="form-label">Postal code</label>
                            <input id="staffPostal" type="text" className="form-control" placeholder="Ex: 10700"
                                   aria-label="Postal code"/>
                        </div>
                    </div>
                    <div className=" row">
                        <div className="col">
                            <label className="form-label">Contact No.</label>
                            <input id="staffMobile" type="text" className="form-control" placeholder="Ex: 0777XXXXXX"
                                   aria-label="Contact No."/>
                        </div>
                        <div className="col">
                            <label className="form-label">Email Address</label>
                            <input id="staffEmail" type="text" className="form-control"
                                   placeholder="Ex: himal@gmail.com" aria-label="Email Address"/>
                        </div>
                        <div className="col">
                            <label className="form-label">Role</label>
                            <select className="form-control" aria-label="Role" id="staffRoleSelect">
                                <option value="" disabled selected>Select Role</option>
                                <option value="ADMIN">ADMIN</option>
                                <option value="SCIENTIST">SCIENTIST</option>
                                <option value="MANAGER">MANAGER</option>
                                <option value="OTHER">OTHER</option>
                            </select>
                            <label id="staffRoleCheck" ></label>
                        </div>
                        <div className="col">
                            <label className="form-label">Field</label>
                            <select className="form-select" id="staffFieldSelectID" required>
                                <option selected disabled value=""></option>
                            </select>
                            <label id="staffFieldCodeCheck"></label>
                        </div>
                    </div>
                    <div className="custom-button">
                        <button id="search-staff-btn" type="button" className="btn btn-primary">Search</button>
                        <button id="add-staff-btn" type="button" className="btn btn-success">Add</button>
                        <button id="delete-staff-btn" type="button" className="btn btn-danger">Delete</button>
                        <button id="update-staff-btn" type="button" className="btn btn-warning">Update</button>
                        <button id="clear-staff-btn" type="button" className="btn btn-info">Clear</button>
                    </div>
                    <div className="custom-table table-responsive p-3">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Code</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Designation</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Joined date</th>
                                <th scope="col">Date of Birth</th>
                                <th scope="col">Building no or name</th>
                                <th scope="col">Street or lane</th>
                                <th scope="col">Main city</th>
                                <th scope="col">Main state</th>
                                <th scope="col">Postal code</th>
                                <th scope="col">Contact No.</th>
                                <th scope="col">Email Address</th>
                                <th scope="col">Role</th>
                                <th scope="col">Field</th>
                                <th scope="col">Vehicle</th>
                            </tr>
                            </thead>
                            <tbody id="staff-table">

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};