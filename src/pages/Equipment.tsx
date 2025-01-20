import './Equipment.css'

export const Equipment = () => {
    return (
        <div>
            <div className="equipment">
                <div className="custom-form">
                    <div className=" row">
                        <div className="col-2">
                            <label className="form-label">Equipment code</label>
                            <input id="equipmentCode" type="text" className="form-control" placeholder="Ex: E0001"
                                   aria-label="Equipment code"/>
                            <label id="equipmentCodeCheck" ></label>
                            <label id="equipmentCodeCheck" ></label>
                        </div>
                        <div className="col">
                            <label className="form-label">Name</label>
                            <input id="equipmentName" type="text" className="form-control" placeholder="Ex: Hammer"
                                   aria-label="Name"/>
                            <label id="equipmentNameCheck" ></label>

                        </div>
                        <div className="col">
                            <label className="form-label">Type</label>
                            <select className="form-control" aria-label="Type" id="equipmentType">
                                <option value="" disabled selected>Type</option>
                                <option value="Electrical">Electrical</option>
                                <option value="Mechanical">Mechanical</option>
                            </select>
                            <label id="equipmentTypeCheck" ></label>
                        </div>
                        <div className="col">
                            <label className="form-label">Availability</label>
                            <select className="form-control" aria-label="Role" id="equipmentStatus">
                                <option value="" disabled selected>Select Availability</option>
                                <option value="Available">Available</option>
                                <option value="Unavailable">Unavailable</option>
                                <option value="UnderMaintenance">UnderMaintenance</option>
                            </select>
                            <label id="equipmentStatusCheck" ></label>
                        </div>
                        <div className="col">
                            <label className="form-label">Staff</label>
                            <select className="form-select" id="equipmentStaffSelectID" required>
                                <option selected disabled value=""></option>
                            </select>
                            <label id="equipmentStaffCodeCheck" ></label>
                        </div>
                        <div className="col">
                            <label className="form-label">Field</label>
                            <select className="form-select" id="equipmentFieldSelectID" required>
                                <option selected disabled value=""></option>
                            </select>
                            <label id="equipmentFieldCheck" ></label>
                        </div>
                    </div>
                    <div className="custom-button">
                        <button type="button" id="search-equipment-btn" className="btn btn-primary">Search</button>
                        <button type="button" id="add-equipment-btn" className="btn btn-success">Add</button>
                        <button type="button" id="delete-equipment-btn" className="btn btn-danger">Delete</button>
                        <button type="button" id="update-equipment-btn" className="btn btn-warning">Update</button>
                        <button type="button" id="clear-equipment-btn" className="btn btn-info">Clear</button>
                    </div>
                    <div className="custom-table table-responsive p-3">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Equipment Code</th>
                                <th scope="col">Name</th>
                                <th scope="col">Type</th>
                                <th scope="col">Availability</th>
                                <th scope="col">Staff</th>
                                <th scope="col">Field</th>
                            </tr>
                            </thead>
                            <tbody id="equipment-table">

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};