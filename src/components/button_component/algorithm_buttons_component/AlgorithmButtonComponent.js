import React from 'react';

export default function AlgorithmButtonComponent (props) {

    function buttonClicked(e) {
        props.setAlgorithmType(e.target.innerText.replace(/\s/,'_'));
    }

    return(
        <div className="row">
            {   
                props.algorithmData.map((d, index) => {
                    let highlightClass = d === props.algorithmType ? "btn-primary" : "btn-light";

                    return <div className="col-8" key={index}>
                        <button className={`${highlightClass} btn-md btn-block rounded mt-1`} 
                                onClick={buttonClicked}>
                            {d.replace(/_/, ' ')}
                        </button>
                    </div>
                })      
            }
        </div>
    )
}