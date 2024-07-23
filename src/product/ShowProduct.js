import { useState, useEffect } from "react";

import 'boxicons/css/boxicons.min.css';
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "./header.js";
function HomePage() {
    const [product, setProduct] = useState(null); // Khởi tạo trạng thái với giá trị null
    const { id } = useParams();
    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/product/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching the product', error);
            }
        };

        getProduct();
    }, [id]);

    return (
        <>
            <div className="app">
            <Header/>
                <div className="container-showProduct">
                    <div className="">
                    {product && (
                <div key={product.id}>
                   <td style={{ textAlign: "center" }}>
                       {product.images.map((image, index) => (
                          <img 
                              key={index} 
                              className="image" 
                              src={`http://localhost:8080/img/${image}`} 
                              alt={`ảnh ${index + 1}`} 
                          />
                      ))}
                  </td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.sizes.join(', ')}</td>
              </div>
          )}
                    </div>
                </div>
                <footer className="footer-HomePage"></footer>
            </div>
        </>
    )
}

export default HomePage;
