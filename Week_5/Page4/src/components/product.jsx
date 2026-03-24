function Product(props){ 
    const { productObj } = props;

    return(
        <div className="p-4 border rounded-3xl shadow-md bg-blue-50">
            <h2 className="text-2xl text-blue-900 font-bold">
                {productObj.title}
            </h2>
            <p className="font-semibold text-blue-600">
                Amount: ₹{productObj.price}
            </p>
            <p className="text-gray-700">
                {productObj.description}
            </p>
        </div>
    )
}

export default Product;