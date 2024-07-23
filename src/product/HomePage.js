import { Link, useNavigate } from "react-router-dom";
import "../Css/homepage.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Header from "./header.js";
import 'boxicons/css/boxicons.min.css';
function HomePage(){
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [clickRight, setClickRight] = useState(false);
    const navigate = useNavigate(); // Khởi tạo useNavigate
      const handleNext = () => {
        if (clickRight < products.length - 5) {
            setCurrentIndex((prevIndex) => {
                const newIndex = prevIndex + 1;
                return newIndex;
            });
            setClickRight((prevCount) => prevCount + 1); // Increase the count of right clicks
        }
    };

    const handlePrev = () => {
        if (clickRight > 0 && currentIndex > 0) {
            setCurrentIndex((prevIndex) => {
                const newIndex = prevIndex - 1;
                return newIndex;
            });
            setClickRight((prevCount) => prevCount - 1); // Decrease the count of right clicks
        }
    }
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
    useEffect(() => {
        const image = document.querySelector('.container-products');
        const img = document.querySelector('.container-product .image');

        if (img) {
            const width = img.offsetWidth;
            image.style.transform = `translateX(-${currentIndex * (width + 28)}px)`;
        }
    }, [currentIndex, products.length]);
    
      useEffect(() => {
        const listImage = document.querySelector('.list-images');
        const imgs = document.querySelectorAll('.img-container');
        const btnLeft = document.querySelector('.btn-left');
        const btnRight = document.querySelector('.btn-right');
        const length = imgs.length;
        let current = 0;
        let interval;

        const updateSlide = () => {
            let width = imgs[0].offsetWidth;
            listImage.style.transform = `translateX(${width * -1 * current}px)`;
        };

        const handleChangeSlide = () => {
            listImage.classList.add('transitioning');
            if (current === length - 1) {
                current = 0;
            } else {
                current++;
            }
            updateSlide();
            setTimeout(() => {
                listImage.classList.remove('transitioning');
            }, 500);
        };

        const handlePreviousSlide = () => {
            clearInterval(interval);
            listImage.classList.add('transitioning');
            if (current === 0) {
                current = length - 1;
            } else {
                current--;
            }
            updateSlide();
            setTimeout(() => {
                listImage.classList.remove('transitioning');
            }, 500);
            interval = setInterval(handleChangeSlide, 4000);
        };

        const resetInterval = (callback) => {
            clearInterval(interval);
            callback();
            interval = setInterval(handleChangeSlide, 4000);
        };

        interval = setInterval(handleChangeSlide, 4000);

        btnRight.addEventListener('click', () => resetInterval(handleChangeSlide));
        btnLeft.addEventListener('click', handlePreviousSlide);

        return () => {
            clearInterval(interval);
            btnRight.removeEventListener('click', () => resetInterval(handleChangeSlide));
            btnLeft.removeEventListener('click', handlePreviousSlide);
        };
    }, []);
    const handleProductClick = (id) => {
        navigate(`/showProduct/${id}`); // Điều hướng đến trang sản phẩm với ID
    };
 
    return(
        <>

         <div className="app">
              <Header/>
                <div className="container-HomePage">
                    <div className="sliede">
                    <div className="sliede-show">
                    <div className="list-images">
                        <img  className="img-container" src='../Untitled Project.jpg'/>
                        <img  className="img-container" src='../Untitled Project (1.jpg'/>
                        <img  className="img-container" src='../Web_Photo_Editor.jpg'/>
                    </div>
                    <div className="btns">
                    <div className="btn-left btn"><i class='bx bx-chevron-left' ></i></div>
                    <div className="btn-right btn"><i class='bx bx-chevron-right' ></i></div>
                    </div>
                    </div>
                   
                    </div>
                
                    <div className="new">NEW ARRIVAL</div>
                    <div className="parent-container">
                   <div className="sliede-products-new">
                   <div className="btns-products">   
                    <div 
                    className="btn-left-product btn-product" 
                    onClick={handlePrev}
                    style={{ color: currentIndex === 0 ? '#504e4e64' : '#504e4e' }}
                >
                    <i className='bx bx-chevron-left'></i>
                </div>
                <div className="btn-right-product btn-product" onClick={handleNext}
                  style={{ color: clickRight >= products.length - 5 ? '#504e4e64' : '#504e4e' }}
                  >
                    <i className='bx bx-chevron-right'></i>
                </div>
                </div>
        <div className="sliede-product">
            <div className="sliede-product-show">
                <div className="container-products">
                    {products.map((product, index) => (
                        <div className={`container-product ${index === 0 ? 'first-product' : ''}`} key={product.id}
                        onClick={() => handleProductClick(product.id)}>
                             <td style={{ textAlign: "center" }}>
                                 {product.images.length > 0 && (
                                 <img 
                                 className="image" 
                                 src={`http://localhost:8080/img/${product.images[0]}`} 
                                 alt="ảnh sản phẩm" 
                                 />
                                 )}
                               </td>
                            <td>{product.name}</td>
                            <td>{product.id}</td>
                        </div>
                    ))}
                </div>
            </div>
        </div>
                </div>
                </div>
                </div>
                <footer className="footer-HomePage"></footer>
            </div>
            </>
    )
}
export default HomePage;