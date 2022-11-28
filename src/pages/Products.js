import { Link } from "react-router-dom";

const Products = () => {
    return ( <section>
        <h1>The Products Page</h1>
        <ul>
            <li><Link to='products/p1'>Lamp</Link></li>
            <li><Link to='products/p2'>Desk</Link></li>
            <li><Link to='products/p3'>Chair</Link></li>
        </ul>
    </section> );
}
 
export default Products;