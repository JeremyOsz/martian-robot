import React from "react";

const createRows = (qty, cols) => {
    const rows = []
    for(let i = 0; i < qty; i++){
        rows.push(
            <div key={i}>
                {createCells(cols)}
            </div>
        )
    }
    return rows
}

const createCells = (qty) => {
    const cells = []
    for(let i = 0; i < qty; i++){
        cells.push(
            <div key={i}>
                {createCells(cols)}
            </div>
        )
    }
    return cells
}

const World = (limitX, limitY) => {
    return(
        <div data-testid='world-wrapper'>
            {createRows(limitX, limitY)}
        </div>
    )
}

export default World