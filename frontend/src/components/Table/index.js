import React from 'react';

function TableHead({ header }) {
    return (
        <thead>
            <tr>
                {
                    header.map(head => <th key={head}>{head}</th>)
                }
            </tr>
        </thead>
    )
}

function TableBody({ data }) {

    return (
        <tbody>
            {
                data.map(
                    linha => <tr key={linha.id}>
                        {
                            linha.map(item => <th key={item.id}>{item.id}</th>)
                        }
                </tr>)
            }
        </tbody>
    )
}

function TableFoot({footer}) {

    let table_footer = footer || []

    return (

        <tfoot>
        <tr>
            {
                table_footer.map(foot => <th key={foot}>{foot}</th>)
            }
        </tr>
        </tfoot>
    )
}

function Table ({ header, data }){

    return (
        <table id="example2" className="table table-bordered table-hover">
            <TableHead header={header}/>
            <TableBody data={data}/>
            <TableFoot />
        </table>
    )
}

export default Table;