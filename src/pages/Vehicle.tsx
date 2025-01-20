import './Vehicle.css'

export const Vehicle = () => {
    return (
        <div>
            <div className="vehicle" id="vehicle">
                <div className="custom-form">
                    <div className=" row">
                        <div className="col-2">
                            <label className="form-label">Vehicle code</label>
                            <input id="vehicleCode" type="text" className="form-control" placeholder="Ex: V0001"
                                   aria-label="Vehicle code"/>
                        </div>
                        <div className="col">
                            <label className="form-label">License plate number </label>
                            <input id="vehicleLicenseNumber" type="text" className="form-control"
                                   placeholder="Ex: LY-5495" aria-label="License plate number "/>
                        </div>
                        <div className="col">
                            <label className="form-label">Vehicle category </label>
                            <input id="vehicleCategory" type="text" className="form-control" placeholder="Ex: Lorry"
                                   aria-label="Vehicle category "/>
                        </div>
                        <div className="col">
                            <label className="form-label">Fuel type </label>
                            <select className="form-control" aria-label="Fuel type" id="vehicleFuelType">
                                <option value="" disabled selected>Select fuel type</option>
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Electric">Electric</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                            <label id="vehicleFuelTypeCheck" ></label>
                        </div>
                        <div className="col">
                            <label className="form-label">Status</label>
                            <select className="form-control" aria-label="Role" id="vehicleStatus">
                                <option value="" disabled selected>Select Role</option>
                                <option value="Available">Available</option>
                                <option value="Unavailable">Unavailable</option>
                                <option value="UnderMaintenance">UnderMaintenance</option>
                            </select>
                            <label id="vehicleStatusCheck" ></label>
                        </div>
                        <div className="col">
                            <label className="form-label">Staff</label>
                            <select className="form-select" id="vehicleStaffSelectID" required>
                                <option selected disabled value=""></option>
                            </select>
                            <label id="vehicleStaffCodeCheck" ></label>
                        </div>
                        <div className="col">
                            <label className="form-label">Remarks</label>
                            <input id="vehicleRemarks" type="text" className="form-control"
                                   placeholder="Ex: Any more things" aria-label="Remarks"/>
                            <label id="vehicleRemarksCheck"></label>
                        </div>
                    </div>
                    <div className="custom-button">
                        <button id="search-vehicle-btn" type="button" className="btn btn-primary">Search</button>
                        <button id="add-vehicle-btn" type="button" className="btn btn-success">Add</button>
                        <button id="delete-vehicle-btn" type="button" className="btn btn-danger">Delete</button>
                        <button id="update-vehicle-btn" type="button" className="btn btn-warning">Update</button>
                        <button id="clear-vehicle-btn" type="button" className="btn btn-info">Clear</button>
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
                            <tbody id="vehicle-table">

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};