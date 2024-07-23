import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "../Css/header.css";
import "../Css/container_create.css";

function Create() {
    const sizes = ['S', 'M', 'L', 'XL'];
    const categories = [
        'Bộ sưu tập mới', 'Vest nữ', 'Áo dài', 'Đầm',
        'Áo sơ mi nữ', 'Quần/ chân váy', 'Set/ bộ',
        'Sale Off', 'Đồng giá'
    ];
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [images, setImages] = useState([]); // Sửa đổi để quản lý danh sách các tệp tin ảnh
    const [values, setValues] = useState({
        name: '',
        price: '',
    });
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files); // Chuyển đổi FileList thành một mảng
        setImages(files);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setDropdownVisible(false);
    };

    const handleSizeClick = (size) => {
        if (selectedSizes.includes(size)) {
            setSelectedSizes(selectedSizes.filter(s => s !== size));
        } else {
            setSelectedSizes([...selectedSizes, size]);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!values.name || !values.price || !selectedCategory || selectedSizes.length === 0 || images.length === 0) {
            setError({ ...error, message: "Vui lòng điền đầy đủ thông tin sản phẩm." });
            return;
        }

        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("price", parseFloat(values.price));
        formData.append("newPrice", parseFloat(values.price));
        formData.append("category", selectedCategory);
        formData.append("sizes", JSON.stringify(selectedSizes)); // Convert sizes array to JSON string

        // Thêm tất cả các tệp tin ảnh vào FormData
        images.forEach((image, index) => {
            formData.append("images", image);
        });

        try {
            await axios.put('http://localhost:8080/api/product', formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            navigate('/');
        } catch (error) {
            console.error('Lỗi khi lưu sản phẩm:', error);
            setError({ ...error, message: 'Đã xảy ra lỗi khi lưu sản phẩm.' });
        }
    };  

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
              
                <div className="container">
                    <div className='container-heard'>
                        <div className="centered-text">THÊM SẢN PHẨM</div>
                        <br />
                        <div style={{ marginTop: '-30px', textAlign: 'center', color: '#4b3f43',marginBottom:'30px' }} >Điền thông tin sản phẩm</div>
                        <div className='centered-text-input'>
                            <input 
                                className='input-create' 
                                type='text' 
                                name="name" 
                                placeholder="     Vui lòng nhập tên sản phẩm..." 
                                value={values.name}
                                onChange={handleInputChange}
                                style={{ height: '50px', marginTop: '20px', width: '891px',  marginLeft:'50px' }} 
                            />
                            <input 
                                className='input-create' 
                                type='number' 
                                name="price" 
                                placeholder="     Vui lòng nhập giá sản phẩm..." 
                                value={values.price}
                                onChange={handleInputChange}
                                style={{ height: '50px', marginTop: '20px', width: '891px', marginLeft:'50px' }} 
                            />
                            <div className="size-container" style={{marginTop:'20px'}}>
                                
                                <div style={{ fontSize: '17px', display: 'inline-block',marginLeft:'50px' }} className="dropdown-container">
                                    <button type='button' onClick={toggleDropdown} className="dropdown-toggle">
                                        {selectedCategory ? selectedCategory : 'Chọn thể loại'}
                                    </button>
                                    <div className={`dropdown-menu ${dropdownVisible ? 'show' : ''}`}>
                                        {categories.map((category) => (
                                            <button
                                                key={category}
                                                type='button'
                                                className="dropdown-item"
                                                onClick={() => handleCategoryClick(category)}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div style={{ fontSize: '17px', display: 'inline-block', marginLeft: '20px',marginLeft:'100px' }}>Kích thước:</div>
                                <div className="size-container">
                                    {sizes.map((size) => (
                                        <span key={size}>
                                            <button
                                                type='button'
                                                className={`dropdown-item-size ${selectedSizes.includes(size) ? 'selected' : ''}`}
                                                onClick={() => handleSizeClick(size)}
                                            >
                                                {size}
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div style={{ marginTop: '20px', marginLeft:'50px',  }}>
                                <input 
                                    onChange={handleImageChange} 
                                    type='file' 
                                    name="images"
                                    multiple // Cho phép chọn nhiều tệp tin
                                />
                            </div>
                            {error.message && (
                                <div style={{ color: 'red', marginLeft: '50px', marginTop: '10px' }}>
                                    {error.message}
                                </div>
                            )}
                            <div className="button-container">
                                <button className="btnSave">
                                    <Link to="/">Trở về</Link>
                                </button>
                                <button className="btnSave" onClick={handleSubmit}>Xác nhận</button>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer"></footer>
            </div>
        </div>
    );
}

export default Create;
