import React from 'react';

export default function OrderingComponent (props) {

    function updateOrderingType(e) {
        props.setOrderByAscending(e.target.value);
    }

    return(
        <div className="p-2">
            <div className="row">
                <label className="font-weight-bold">ORDERING</label>
            </div>
            
            <div className="row">
                <select className="w-100 form-control-sm" onChange={updateOrderingType}>
                    {   
                        props.orderData.map((d, index) => {
                            return <option value={d} key={index}>{d}</option>;
                        })
                    }
                </select>
            </div>
        </div>
    )
}