import React, { useEffect, useState } from 'react';
import "../Css/header.css";
import "../Css/container_showAll.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function ShowAllProduct() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6);

    useEffect(() => {
        const getListProduct = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/product');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching the product list', error);
            }
        };

        getListProduct();
    }, []);
 

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const nextPage = () => {
        if (currentPage < Math.ceil(products.length / productsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const showPagination = products.length > productsPerPage;

    return (
        <div>
            <div className="app">
                <header className="header">
                    <div className="header__navbar" id="header__navbar--pc">
                        <ul className="header__navbar-list">
                            <li className="header__navbar-item">
                                <Link className="header__navbar-item-link" to="/">Trang chủ</Link>
                            </li>
                            <li className="header__navbar-item">
                                <a className="header__navbar-item-link">|</a>
                            </li>
                            <li className="header__navbar-item">
                                <a className="header__navbar-item-link">Sản phẩm</a>
                            </li>
                            <li className="header__navbar-item">
                                <a className="header__navbar-item-link">|</a>
                            </li>
                            <li className="header__navbar-item">
                                <a className="header__navbar-item-link">Đã bán</a>
                            </li>
                        </ul>
                    </div>
                    <div className="header__logo">㋰ᴀuтuмɴ☯</div>
                    <div className="header__left">
                        <a href="#" className="link">
                            <svg className="search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                            </svg>
                        </a>
                        <input className="header__left-search" name="Tìm kiếm" type="search" placeholder="Tìm kiếm..." />
                    </div>
                </header>
                <div className="container-showAll">
                    <Link to='/create'>Thêm sản phẩm</Link>
                    <table className="table table-image">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col" style={{ textAlign: "center" }}>Ảnh</th>
                                <th scope="col">Tên</th>
                                <th scope="col">Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentProducts.map((product, index) => (
                                <tr key={product.id}>
                                    <td>{indexOfFirstProduct + index + 1}</td> {/* Thay đổi giá trị STT */}
                                    <td style={{ textAlign: "center" }}>
                                        <img className="image" src={`http://localhost:8080/img/${product.image}`} alt='anh' />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.id}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Hiển thị phân trang nếu có đủ sản phẩm */}
                    {showPagination && (
                        <ul className="pagination">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button onClick={prevPage} className="page-link">
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </button>
                            </li>
                            {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => (
                                <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                    <button onClick={() => paginate(i + 1)} className="page-link">
                                        {i + 1}
                                    </button>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === Math.ceil(products.length / productsPerPage) ? 'disabled' : ''}`}>
                                <button onClick={nextPage} className="page-link">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </li>
                        </ul>
                    )}
                </div>
                <footer className="footer-showAll"></footer>
            </div>
        </div>
    );
}

export default ShowAllProduct;
