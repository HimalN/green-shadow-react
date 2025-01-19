import './Field.css'

export const Field = () => {
    return (
        <div>
            <div className="field" id="field">
                <div className="custom-form">
                    <div className=" row">
                        <div className="col-2">
                            <label className="form-label">Code</label>
                            <input id="fieldCode" type="text" className="form-control" placeholder="Ex: F0001"
                                   aria-label="First name"/>
                        </div>
                        <div className="col">
                            <label className="form-label">Name</label>
                            <input id="fieldName" type="text" className="form-control" placeholder="DBC"
                                   aria-label="Last name"/>
                        </div>
                        <div className="col">
                            <label className="form-label">Location</label>
                            <input id="fieldLocation" type="text" className="form-control"
                                   placeholder="Ex: 38.8951° latitude, -77.0364° longitude " aria-label="First name"/>
                        </div>
                        <div className="col-3">
                            <label className="form-label">Extent size</label>
                            <input id="fieldSize" type="text" className="form-control" placeholder="Extent of the field"
                                   aria-label="Last name"/>
                        </div>
                    </div>
                    <div className=" row">
                        <div className="col">
                            <label className="form-label">Image 1</label>
                            <input type="file" className="form-control" id="inputGroupFile01"/>
                        </div>
                        <div className="col">
                            <label className="form-label">Image 2</label>
                            <input type="file" className="form-control" id="inputGroupFile02"/>
                        </div>
                    </div>
                    <div className="custom-button">
                        <button type="button" className="btn btn-primary" id="search-field-button">Search</button>
                        <button type="button" className="btn btn-success" id="add-field-button">Add</button>
                        <button type="button" className="btn btn-danger" id="delete-field-button">Delete</button>
                        <button type="button" className="btn btn-warning" id="update-field-button">Update</button>
                        <button type="button" className="btn btn-info" id="clear-field-button">Clear</button>
                    </div>
                    <div className="custom-table table-responsive p-3">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Code</th>
                                <th scope="col">Name</th>
                                <th scope="col">Location</th>
                                <th scope="col">Extent size</th>
                                <th scope="col">image1</th>
                                <th scope="col">image2</th>
                            </tr>
                            </thead>
                            <tbody id="field-table">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};