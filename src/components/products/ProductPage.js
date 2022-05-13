import syled from "styled-components";
import { useParams } from "react-router-dom";

function ProductPage () {
    const { productID } = useParams();

    return(
        <>{productID}</>
    )
}

export default ProductPage;