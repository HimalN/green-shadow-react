import './Crop.css'

export const Crop = () => {
    return (
        <>
            <div className="crop" id="crop">
                <div className="custom-form">
                    <div className=" row">
                        <div className="col-2">
                            <label className="form-label">Code</label>
                            <input id="crop_code" type="text" className="form-control" placeholder="Ex: C0001"
                                   aria-label="Code"/>
                        </div>
                        <div className="col">
                            <label className="form-label">Category</label>
                            <input id="category" type="text" className="form-control" placeholder="Ex: Grains"
                                   aria-label="Category"/>
                        </div>
                        <div className="col">
                            <label className="form-label">Common name</label>
                            <input id="common_name" type="text" className="form-control" placeholder="Ex: Corn"
                                   aria-label="Common name"/>
                        </div>
                        <div className="col">
                            <label className="form-label">Image</label>
                            <input type="file" className="form-control" id="img"/>
                        </div>

                    </div>
                    <div className=" row">
                        <div className="col">
                            <label className="form-label">Scientific name</label>
                            <input id="scientific_name" type="text" className="form-control"
                                   placeholder="Ex: Also dera" aria-label="Scientific name"/>
                        </div>
                        <div className="col">
                            <label className="form-label">Season</label>
                            <input id="season" type="text" className="form-control" placeholder="Ex: Winter"
                                   aria-label="Season"/>
                        </div>
                        <div className="col">
                            <label className="form-label">Field</label>
                            <select className="form-select" id="field_code" required>
                                <option selected disabled value=""></option>
                            </select>
                            <label id="fieldCodeCheck"></label>
                        </div>
                    </div>
                    <div className="custom-button">
                        <button id="search-crop-btn" type="button" className="btn btn-primary">Search</button>
                        <button id="add-crop-btn" type="button" className="btn btn-success">Add</button>
                        <button id="delete-crop-btn" type="button" className="btn btn-danger">Delete</button>
                        <button id="update-crop-btn" type="button" className="btn btn-warning">Update</button>
                        <button id="clear-crop-btn" type="button" className="btn btn-info">Clear</button>
                    </div>
                    <div className="custom-table table-responsive p-3">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Code</th>
                                <th scope="col">Common name</th>
                                <th scope="col">Scientific name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Category</th>
                                <th scope="col">Season</th>
                                <th scope="col">Field</th>
                            </tr>
                            </thead>
                            <tbody id="crop-table">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};