import "../Css/header.css";
function Header(){
    return(
<>
<header className="header">
                   
                   <nav className="container-header">
                      
                       <ul className="main-menu">
                           <li style={{marginLeft:'15px'}}><a href="/" >TRANG CHỦ</a></li>
                           <li className="has-child"><a href="">SẢN PHẨM <i><svg style={{width:'12px',height:'10px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                           <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                           </svg></i></a>
                           <ul className="sub-menu">
                               <li><a href="#"></a>2.1</li>
                               <li><a href="#"></a>2.2</li>
                               <li><a href="#"></a>2.3</li>
                               <li><a href="#"></a>2.4</li>
                               <li><a href="#"></a>2.5</li>
                           </ul>
                           </li>
                           <li ><a href="">ĐỒNG GIÁ <i><svg style={{width:'12px',height:'10px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                           <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                           </svg></i></a>
                           <ul className="sub-menu">
                               <li><a href="#"></a>99K</li>
                               <li><a href="#"></a>199K</li>
                               <li><a href="#"></a>299K</li>
                           </ul>
                           </li>
                           <li ><a href="">SALE OFF <i><svg style={{width:'12px',height:'10px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                           <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                           </svg></i></a>
                           <ul className="sub-menu">
                               <li><a href="#"></a>Giảm Giá 70%</li>
                               <li><a href="#"></a>Giảm Giá 50%</li>
                               <li><a href="#"></a>Giảm Giá 40%</li>
                               <li><a href="#"></a>Giảm Giá 30%</li>
                               <li><a href="#"></a>Giảm Giá 20%</li>
                           </ul></li>
                           <li ><a href="">TIN TỨC <i><svg style={{width:'12px',height:'10px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                           <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                           </svg></i></a>
                           <ul className="sub-menu">
                               <li><a href="#"></a>Phối Đồ</li>
                               <li><a href="#"></a>Mặc Gì</li>
                               <li><a href="#"></a>Làm Đẹp</li>
                           </ul></li>
                       </ul>
                       <a href="" id="logo" className="logo">
                           <img src='../thiet-ke-logo-shop-quan-ao-dep2.jpg' alt="Unitop.vn"></img>
                       </a>
                      <form className="search-box-header">
                      <form className="search-box-search">
                      <button type="submit" className="search-button">
                           <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                          </svg>
                        </button>
                         <input type="text"  name="search" id="srch" placeholder="search"/>
                         </form>
                      <svg className="search-icon-user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/>
                      </svg>
                      <svg className="search-icon-heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                       <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
                       </svg>
                       
                       <i  class='bx bx-shopping-bag search-icon-shop'></i>
                       </form>
                       </nav>
                       <div className="main-menu2">
                           <ul>
                               <li><a href="#" >FREESHIP ĐƠN HÀNG TRÊN 1 TRIỆU</a></li>
                           
                               <li><a href="#">BẢO HÀNH TRỌN ĐỜI</a></li>
                   
                               <li><a href="#">CHÍNH SÁCH THẺ THÀNH VIÊN</a></li>
                           </ul>
                       </div>
               </header></>
)}
export default Header;