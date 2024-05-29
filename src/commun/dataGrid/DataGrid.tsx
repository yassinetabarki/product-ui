import React from "react";

interface DynamicColumn {
    field: string;
    accessor: (data: any) => string | number;
}
interface Props {
    columns: DynamicColumn[];
    data: any[];
}

const DataGrid: React.FC<Props> = ({ columns, data }) => {

    console.log(columns)
    return (
        <div className="p-6 overflow-x-scroll px-0 mt-10 mr-10">
            <table className="mt-4 w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {
                            columns.map((column, index) => (
                                <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50" key={index}>{column.field}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => (
                        <tr key={row.id} className="focus:outline-none h-16 border border-gray-100 rounded">
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.description}</td>
                            <td>
                                <div className="w-max">
                                    <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-600 py-1 px-2 text-xs rounded-md">
                                        <span>{row.status}</span>
                                    </div>
                                </div>
                            </td>
                            <td>{row.stock}</td>
                            <td>{row.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataGrid;