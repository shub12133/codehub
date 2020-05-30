import React from 'react'
import ListTable from '../table/listTable'
export default function Repository() {
    return (
        <div style={{marginTop:"10ps"}} >
            <ListTable introName="Repositories"
            createButton="create Repository"
            item="repository" 

            />
        </div>
    )
}
