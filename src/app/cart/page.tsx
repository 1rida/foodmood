import React from "react";

import CartComponent from "@/components/Cart";
import Header from "@/components/Header";
export default function Cart() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <CartComponent />
       </div>
    );
}