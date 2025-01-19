import './Dashboard.css'

export const Dashboard = () => {
    return (
        <div>
            <div className="dashboard" id="dashboard">
                <div className="dashboard-cards grid-container">
                    <div className="card text-bg-success mb-3 item" >
                        <div className="card-header">Total Fields</div>
                        <div className="card-body">
                            <h5 className="card-title" id="totalFields">0</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                    <div className="card text-bg-success mb-3 item">
                        <div className="card-header">Total Crop</div>
                        <div className="card-body">
                            <h5 className="card-title" id="totalCrop">0</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                    <div className="card text-bg-success mb-3 item" >
                        <div className="card-header">Total Staff</div>
                        <div className="card-body">
                            <h5 className="card-title" id="totalStaff">0</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                    <div className="card text-bg-success mb-3 item">
                        <div className="card-header">Total Vehicles</div>
                        <div className="card-body">
                            <h5 className="card-title" id="totalVehicles">0</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                    <div className="card text-bg-success mb-3 item" >
                        <div className="card-header">Total Equipments</div>
                        <div className="card-body">
                            <h5 className="card-title" id="totalEquipment">0</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                    <div className="card text-bg-success mb-3 item" >
                        <div className="card-header">Available Equipments</div>
                        <div className="card-body">
                            <h5 className="card-title" id="totalEquipments1">0</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                    <div className="card text-bg-success mb-3 item" >
                        <div className="card-header">Logs</div>
                        <div className="card-body">
                            <h5 className="card-title" id="totalLogs">0</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                    <div className="card text-bg-success mb-3 item" >
                        <div className="card-header">Total Users</div>
                        <div className="card-body">
                            <h5 className="card-title">0</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};