import React, { useEffect, useMemo, useState } from "react";

import { Product } from "./Product";
import './Product.css'
import DataGrid from "../commun/dataGrid/DataGrid";
import SearchBar from "../commun/searchbar/SearchBar";

const ProductList: React.FC<{}> = () => {
    const [data, setData] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);
    
    
    const columns = useMemo( () => [
        {
            field: 'id',
            headerClassName: "prime-background-color", headerName: 'ID',
            width: 90
        },
        {
            field: 'name',
            headerClassName: "prime-background-color",
            headerName: 'Name',
            width: 150,
            editable: false,
        },
        {
            field: 'description',
            headerClassName: "prime-background-color",
            headerName: 'Description',
            width: 400,
            editable: false,
        },
        {
            field: 'status',
            headerClassName: "prime-background-color",
            headerName: 'Status',
            width: 110,
            editable: false,
        },
        {
            field: 'stock',
            headerClassName: "prime-background-color",
            headerName: 'Stock',
            type: 'number',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 300,
        },
        {
            field: 'price',
            headerClassName: "prime-background-color",
            headerName: 'Price',
            type: 'number',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 300,
        },
    ],[]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8080/api/v1/products');
                if (response.ok) {
                    const resData = await response.json();
                    setData(resData);
                }
            } catch (error: any) {
                console.log(error);
                setError(error)
            }
        }
        fetchData();
    }, []);


    // if (error) {
    //     return <div>Error: not data was found</div>;
    // }
    return (
        <>
        <div className="flex">
            <SearchBar></SearchBar>
        </div>
            <DataGrid columns={columns} data={data} />
        </>
    );
}

export default ProductList;