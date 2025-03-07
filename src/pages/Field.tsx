import './Field.css'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store/Store.ts";
import {Fields} from "../models/Fields.ts";
import {useEffect, useRef, useState} from "react";
import {deleteFields, getFields, saveFields, searchFields, updateFields} from "../reducers/FieldsSlice.ts";

export const Field = () => {

    const dispatch = useDispatch<AppDispatch>(); /*send form data to the Redux store,*/
    const fields = useSelector((state: { fields: Fields[] }) => state.fields); /*which then updates the state accordingly*/

    /*Hooks allow function components to have access to state*/
    const [fieldCode, setFieldCode] = useState('');
    const [fieldName, setFieldName] = useState('');
    const [fieldLocation, setFieldLocation] = useState('');
    const [extentSize, setExtentSize] = useState('');
    const [img01, setImg01] = useState<File | undefined>();
    const inputRefImg01 = useRef<HTMLInputElement>(null);
    const [img02, setImg02] = useState<File | undefined>();
    const inputRefImg02 = useRef<HTMLInputElement>(null);
    const [SearchedField, setSearchedField] = useState('');

    useEffect(() => {
        if (fields.length === 0)
        dispatch(getFields());
    }, [dispatch, fields.length]);

    const handleSave = async () => {
        const formData = new FormData();
        formData.append('field_code', fieldCode);
        formData.append('field_name', fieldName);
        formData.append('field_location', fieldLocation);
        formData.append('extent_size', extentSize);
        if (img01) formData.append('img_01', img01);
        if (img02) formData.append('img_02', img02);
        try {
            await dispatch(saveFields(formData));
            dispatch(getFields());
            handleClear();
            console.log('Field saved successfully');
        } catch (error) {
            console.error(error);
        }
    }

    const handleDelete = async () => {
        try {
            await dispatch(deleteFields(fieldCode));
            dispatch(getFields());
            handleClear();
            console.log('Field deleted successfully');
        } catch (error) {
            console.error(error);
        }
    }

    const handleUpdate = async () => {
        const formData = new FormData();
        formData.append('field_code', fieldCode);
        formData.append('field_name', fieldName);
        formData.append('field_location', fieldLocation);
        formData.append('extent_size', extentSize);
        if (img01) formData.append('img_01', img01);
        if (img02) formData.append('img_02', img02);
        try {
            await dispatch(updateFields(formData));
            dispatch(getFields());
            handleClear();
            console.log('Field updated successfully');
        } catch (error) {
            console.error(error);
        }
    }

    const handleSearch = async () => {
        try {
            const fetchedData = await dispatch(searchFields(SearchedField))
            if (fetchedData.payload) {
                setFieldCode(fetchedData.payload.field_code);
                setFieldName(fetchedData.payload.field_name);
                setFieldLocation(fetchedData.payload.field_location);
                setExtentSize(fetchedData.payload.extent_size);
                setSearchedField('')
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleClear = async () => {
        setFieldCode('');
        setFieldName('');
        setFieldLocation('');
        setExtentSize('');
        setSearchedField('')
        if (inputRefImg01.current != null && inputRefImg02.current != null) {
            inputRefImg01.current.value = '';
            inputRefImg02.current.value = '';
        }
    }

    return (
        <div>
            <style>{'body { overflow-y: scroll; }'}</style>
            <div className="field" id="field">
                <div className="custom-form">
                    <div className=" row">
                        <div className="col-2">
                            <label className="form-label">Code</label>
                            <input id="fieldCode" type="text" className="form-control" placeholder="Ex: F0001"
                                   aria-label="First name"
                                   value={fieldCode}
                                   onChange={(e) => setFieldCode(e.target.value)}/>
                        </div>
                        <div className="col">
                            <label className="form-label">Name</label>
                            <input id="fieldName" type="text" className="form-control" placeholder="DBC"
                                   aria-label="Last name"
                                   value={fieldName}
                                   onChange={(e) => setFieldName(e.target.value)}/>
                        </div>
                        <div className="col">
                            <label className="form-label">Location</label>
                            <input id="fieldLocation" type="text" className="form-control"
                                   placeholder="Ex: 38.8951° latitude, -77.0364° longitude "
                                   aria-label="First name"
                                   value={fieldLocation}
                                   onChange={(e) => setFieldLocation(e.target.value)}/>
                        </div>
                        <div className="col-3">
                            <label className="form-label">Extent size</label>
                            <input id="fieldSize" type="text" className="form-control" placeholder="Extent of the field"
                                   aria-label="Last name"
                                   value={extentSize}
                                   onChange={(e) => setExtentSize(e.target.value)}/>
                        </div>
                    </div>
                    <div className=" row">
                        <div className="col">
                            <label className="form-label">Image 1</label>
                            <input type="file" className="form-control" id="inputGroupFile01"
                                   ref={inputRefImg01}
                                   onChange={(e) => {
                                       const input = e.target as HTMLInputElement;
                                       if (input.files) setImg01(input.files[0]);
                                   }}/>
                        </div>
                        <div className="col">
                            <label className="form-label">Image 2</label>
                            <input type="file" className="form-control" id="inputGroupFile02"
                                   ref={inputRefImg02}
                                   onChange={(e) => {
                                       const input = e.target as HTMLInputElement;
                                       if (input.files) setImg02(input.files[0]);
                                   }}/>
                        </div>
                    </div>
                    <div className=" row">
                        <div className="col">
                            <label className="form-label">Search</label>
                            <input id="fieldSearch" type="text" className="form-control"
                                   placeholder="by id"
                                   aria-label="First name"
                                   value={SearchedField}
                                   onChange={(e) => setSearchedField(e.target.value)}/>
                        </div>
                    </div>

                    <div className="custom-button">
                        <button type="button" className="btn btn-primary" id="search-field-button"
                                onClick={handleSearch}>Search
                        </button>
                        <button type="button" className="btn btn-success" id="add-field-button"
                                onClick={handleSave}>Add
                        </button>
                        <button type="button" className="btn btn-danger" id="delete-field-button"
                                onClick={handleDelete}>Delete
                        </button>
                        <button type="button" className="btn btn-warning" id="update-field-button"
                                onClick={handleUpdate}>Update
                        </button>
                        <button type="button" className="btn btn-info" id="clear-field-button"
                                onClick={handleClear}>Clear
                        </button>
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
                            {fields.map((field, index) => (
                                <tr key={index}>
                                    <td>{field.field_code}</td>
                                    <td>{field.field_name}</td>
                                    <td>{field.field_location}</td>
                                    <td>{field.extent_size}</td>
                                    <td><img src={`data:image/png;base64,${field.img_01}`} width="160"/></td>
                                    <td><img src={`data:image/png;base64,${field.img_02}`} width="160"/></td>
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