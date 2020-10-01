import React from 'react';

export default function OrderingComponent (props) {

    function buttonClicked(e) {
        console.log(e.target.innerText);
        props.setOrderByAscending(e.target.innerText);
    }

    return(
        <div className="row">
            {   
                props.orderData.map((d, index) => {
                    let highlightClass = d === props.orderByType ? "btn-primary" : "btn-light";
                    return <div className="col-8 mt-1" key={index}>
                                <button className={`${highlightClass} btn-sm btn-block`}
                                        onClick={buttonClicked}>
                                    {d}
                                </button>
                           </div>
                })
            }
        </div>
    )
}