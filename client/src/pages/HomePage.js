import React from "react";
import Product from "../components/Blog";
import Badge from 'react-bootstrap/Badge';
export default function Homepage() {
    return (
                <><h2>
                Hot Topic <Badge bg="secondary">New</Badge>
                </h2>
            <Product/>
        </>
    )
}