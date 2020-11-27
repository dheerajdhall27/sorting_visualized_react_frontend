import React from 'react';

export default function AlgorithmButtonComponent (props) {

    function updateAlgorithmType(e) {
        props.setAlgorithmType(e.target.value);
    }

    return(
        <div className="p-2">
            <div className="row">
            <label className="font-weight-bold text-white">ALGORITHM</label>
            </div>
            <div className="row">
                <select className="w-100 form-control-sm" onChange={updateAlgorithmType} disabled={props.algoRunning}>
                    {   
                        props.algorithmData.map((d, index) => {                            
                            return <option value={d} key={index}>{d.replace(/_/, ' ')}</option>;
                        })      
                    }
                </select>
            </div>
        </div>
    )
}