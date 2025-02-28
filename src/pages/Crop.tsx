import './Crop.css'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store/Store.ts";
import {useEffect, useRef, useState} from "react";
import Crops from "../models/Crops.ts";
import {searchFields} from "../reducers/FieldsSlice.ts";
import {deleteCrops, getCrops, saveCrops, searchCrops, updateCrops} from "../reducers/CropSlice.ts";

export const Crop = () => {

    const dispatch = useDispatch<AppDispatch>();
    const crops = useSelector((state: { crops: Crops[] }) => state.crops);

    const [cropCode, setCropCode] = useState('');
    const [category, setCategory] = useState('');
    const [commonName, setCommonName] = useState('');
    const [cropImage, setCropImage] = useState<File | undefined>();
    const [scientificName, setScientificName] = useState('');
    const [season, setSeason] = useState('');
    const [fieldCode, setFieldCode] = useState('');
    const [fieldName, setFieldName] = useState('');
    const [SearchedCrop, setSearchedCrop] = useState('');
    const [SearchedField, setSearchedField] = useState('');
    const inoutRefImg = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (crops.length === 0)
            dispatch(getCrops());
    },[dispatch,crops.length]);

    const handleFieldSearch = async () => {
        try {
            const fetchedFields = await dispatch(searchFields(SearchedField));
            if (fetchedFields.payload) {
                setFieldCode(fetchedFields.payload.field_code);
                setFieldName(fetchedFields.payload.field_name);
            } else {
                console.warn("No field data found.");
            }
        } catch (e) {
            console.error("Error fetching fields data:", e);
        }
    };

    const handleSave = async () => {
        const formData = new FormData();
        formData.append("crop_code", cropCode);
        formData.append("category", category);
        formData.append("common_name", commonName);
        formData.append("scientific_name", scientificName);
        formData.append("season", season);
        formData.append("field_code", fieldCode);
        if (cropImage) formData.append("img", cropImage);
        try {
            await dispatch(saveCrops(formData));
            dispatch(getCrops());
            console.log("Crop data saved successfully.");
        } catch (e) {
            console.error("Error saving crop data:", e);
        }
    };

    const handleDelete = async () => {
        try {
            await dispatch(deleteCrops(cropCode));
            dispatch(getCrops());
            console.log("Crop data deleted successfully.");
        } catch (e) {
            console.error("Error deleting crop data:", e);
        }
    };

    const handleUpdate = async () => {
        const formData = new FormData();
        formData.append("crop_code", cropCode);
        formData.append("category", category);
        formData.append("common_name", commonName);
        formData.append("scientific_name", scientificName);
        formData.append("season", season);
        formData.append("field_code", fieldCode);
        if (cropImage) formData.append("img", cropImage);
        try {
            await dispatch(updateCrops(formData));
            dispatch(getCrops());
            console.log("Crop data updated successfully.");
            handleClear();
        } catch (e) {
            console.error("Error updating crop data:", e);
        }
    };

    const handleSearch = async () => {
        try {
            const fetchedCrops = await dispatch(searchCrops(SearchedCrop));
            if (fetchedCrops.payload) {
                setCropCode(fetchedCrops.payload.crop_code);
                setCategory(fetchedCrops.payload.category);
                setCommonName(fetchedCrops.payload.common_name);
                setScientificName(fetchedCrops.payload.scientific_name);
                setSeason(fetchedCrops.payload.season);
                setFieldCode(fetchedCrops.payload.field_code);
                const fetchedFields = await dispatch(searchFields(fetchedCrops.payload.field_code));
                if (fetchedFields.payload) {
                    setFieldName(fetchedFields.payload.field_name);
                }
            } else {
                console.warn("No crop data found.");
            }
        } catch (e) {
            console.error("Error fetching crops data:", e);
        }
    };

    const handleClear = async () => {
        setCropCode('');
        setCategory('');
        setCommonName('');
        setScientificName('');
        setSeason('');
        setFieldCode('');
        setFieldName(' ');
        setSearchedField(' ');
        if (inoutRefImg.current) inoutRefImg.current.value = '';
    };

    return (
        <>
            <style>{'body { overflow-y: scroll; }'}</style>
            <div className="crop" id="crop">
                <div className="custom-form">
                    <div className=" row">
                        <div className="col-2">
                            <label className="form-label">Code</label>
                            <input id="crop_code" type="text" className="form-control" placeholder="Ex: C0001"
                                   aria-label="Code" value={cropCode}
                                   onChange={(e) => setCropCode(e.target.value)}/>
                        </div>
                        <div className="col">
                            <label className="form-label">Category</label>
                            <input id="category" type="text" className="form-control" placeholder="Ex: Grains"
                                   aria-label="Category" value={category}
                                   onChange={(e) => setCategory(e.target.value)}/>
                        </div>
                        <div className="col">
                            <label className="form-label">Common name</label>
                            <input id="common_name" type="text" className="form-control" placeholder="Ex: Corn"
                                   aria-label="Common name" value={commonName}
                                   onChange={(e) => setCommonName(e.target.value)}/>
                        </div>
                        <div className="col">
                            <label className="form-label">Image</label>
                            <input type="file" className="form-control" id="img"
                                   ref={inoutRefImg}
                                   onChange={(e) => {
                                       const input = e.target as HTMLInputElement;
                                       if (input.files) {
                                           setCropImage(input.files[0]);
                                       }
                                   }}/>
                        </div>

                    </div>
                    <div className=" row">
                        <div className="col">
                            <label className="form-label">Scientific name</label>
                            <input id="scientific_name" type="text" className="form-control"
                                   placeholder="Ex: Also dera" aria-label="Scientific name"
                                   value={scientificName}
                                   onChange={(e) => setScientificName(e.target.value)}/>
                        </div>
                        <div className="col">
                            <label className="form-label">Season</label>
                            <input id="season" type="text" className="form-control " placeholder="Ex: Winter"
                                   aria-label="Season" value={season}
                                   onChange={(e) => setSeason(e.target.value)}/>
                        </div>

                        {/*Search Field Section*/}
                        <div id="search-field-div" className="col">
                            <label id="lblSearchField" htmlFor="txtSearchField">Search Field :</label>
                            <input id="txtSearchField" className="form-control nw-added" type="text"
                                   placeholder="Enter field code"
                                   aria-label="default input example"
                                   onChange={(e) => setSearchedField(e.target.value)}/>
                            <button id="btnSearchField" type="button" className="btn btn-primary"
                                    onClick={handleFieldSearch}>Search
                            </button>
                        </div>

                        {/*Field Code */}
                        <div id="crop-field-div-code" className="col">
                            <label id="lblCropFieldCode" htmlFor="txtCropFieldCode">Field Code :</label>
                            <input id="txtCropFieldCode" className="form-control nw-added" type="text"
                                   aria-label="default input example" placeholder="C001"
                                   value={fieldCode}
                                   onChange={(e) => setFieldCode(e.target.value)}/>
                        </div>

                        {/*Field Name*/}
                        <div id="crop-field-div" className="col">
                            <label id="lblCropFieldName" htmlFor="txtCropFieldName">Field Name :</label>
                            <input id="txtCropFieldName" className="form-control nw-added" type="text"
                                   aria-label="default input example" placeholder="ABC Field"
                                   value={fieldName}
                                   onChange={(e) => setFieldName(e.target.value)}/>
                        </div>

                        {/*Search Section*/}
                        <div id="search-crops-div" className="col">
                            {/*Label for Search*/}
                            <label id="lblSearchCrops" htmlFor="txtSearch-crops">Search Crops :</label>
                            <input id="txtSearch-crops" className="form-control nw-added" type="text"
                                   placeholder="Search by code or category"
                                   aria-label="default input example"
                                   onChange={(e) => setSearchedCrop(e.target.value)}/>
                            <button id="search-crop" type="button" className="btn btn-primary"
                                    onClick={handleSearch}>Search
                            </button>
                        </div>
                    </div>

                    <div className="custom-button">

                        <button id="add-crop-btn" type="button" className="btn btn-success" onClick={handleSave}>Add
                        </button>
                        <button id="delete-crop-btn" type="button" className="btn btn-danger"
                                onClick={handleDelete}>Delete
                        </button>
                        <button id="update-crop-btn" type="button" className="btn btn-warning"
                                onClick={handleUpdate}>Update
                        </button>
                        <button id="clear-crop-btn" type="button" className="btn btn-info" onClick={handleClear}>Clear
                        </button>
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
                            <tbody id="crops-table-tb">
                            {crops?.map((crop, index) => (
                                <tr key={index}>
                                    <td>{crop.crop_code}</td>
                                    <td>{crop.common_name}</td>
                                    <td>{crop.scientific_name}</td>
                                    <td>{crop.category}</td>
                                    <td>{crop.season}</td>
                                    <td>{crop.field_code}</td>
                                    <td><img src={`data:image/png;base64,${crop.img}`} width="140"/></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};