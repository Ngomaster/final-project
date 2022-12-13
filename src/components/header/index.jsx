import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import NewCollection from "./nav_head/new_collecttions";
import MainSlide from "../slideshow/main_slide";
import { NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <div>
      <div className="header-main">
        <div className="row-items">
          <div>
            <a href="https://woodpro.vn">
              <img src="https://noithattvp.vn/image/cache/catalog/1-san-pham-line-moi/logo-noi-that-moi-t10-mau-tron-01-450x140.jpg" />
            </a>
          </div>
          <div>
            <form className="search-form">
              <input
                type="search"
                placeholder="Tìm kiếm..."
                className="search-field"
                autoComplete="off"
              ></input>

              <input
                type="submit"
                className="search-submit"
                placeholder=""
                value="tìm kiếm"
              ></input>
            </form>
          </div>
          <div className="header-content">
            <div>
              <img
                src="https://noithattvp.vn/image/cache/catalog/hotline-noithattvp-290x120.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="header-action">
            <ul>
              <li>
                <a href="" title="Đăng nhập">
                  <i className="fa-solid fa-key"></i>
                  <span>Đăng nhập</span>
                </a>
              </li>
              <li>
                <a href="" title="Đăng ký">
                  <i class="fa-solid fa-user"></i>
                  <span>Đăng ký</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="cart">
            <a href="">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="count">0</span>
            </a>
          </div>
        </div>
        <div className="nav-head">
          <div className="topnav">
            <NavDropdown
              title="New Collection"
              id="nothing"
              renderMenuOnMount={true}
            >
              {/* Menu */}
            </NavDropdown>
            <NavDropdown
              title="PHÒNG BẾP"
              id="nothing"
              renderMenuOnMount={true}
            >
              {/* Menu */}
            </NavDropdown>
            <NavDropdown
              title="PHÒNG KHÁCH"
              id="nothing"
              renderMenuOnMount={true}
            >
              {/* Menu */}
            </NavDropdown>
            <NavDropdown
              title="PHÒNG NGỦ"
              id="nothing"
              renderMenuOnMount={true}
            >
              {/* Menu */}
            </NavDropdown>
            <NavDropdown
              title="SHOP CAFE VÀ BAR"
              id="nothing"
              renderMenuOnMount={true}
            >
              {/* Menu */}
            </NavDropdown>
            <NavDropdown
              title="SÂN VƯỜN, NGOÀI TRỜI"
              id="nothing"
              renderMenuOnMount={true}
            >
              {/* Menu */}
            </NavDropdown>
            <NavDropdown
              title="VĂN PHÒNG"
              id="nothing"
              renderMenuOnMount={true}
            >
              {/* Menu */}
            </NavDropdown>
            <NavDropdown
              title="KHUYẾN MÃI"
              id="nothing"
              renderMenuOnMount={true}
            >
              {/* Menu */}
            </NavDropdown>
            <NavDropdown title="TIN TỨC" id="nothing" renderMenuOnMount={true}>
              {/* Menu */}
            </NavDropdown>
          </div>
        </div>
        <div>
          <MainSlide />
        </div>
        <div className="module-title">
          <div className="container-sl-pd">
            <h3>Danh mục sản phẩm</h3>

            <div className="row-category">
              <div className="category-box">
                <a href="">
                  <img
                    src="https://noithattvp.vn/image/cache/catalog/2022-banner/ban-ghe-an-tvp-cr-400x400.png"
                    alt=""
                  />
                </a>
                <h3 className="h5">BÀN GHẾ ĂN</h3>
              </div>
              <div className="category-box">
                <a href="">
                  <img
                    src="https://noithattvp.vn/image/cache/catalog/2022-banner/ban-tra-ban-sofa-cr-400x400.png"
                    alt=""
                  />
                </a>
                <h3 className="h5">BÀN GHẾ ĂN</h3>
              </div>
              <div className="category-box">
                <a href="">
                  <img
                    src="https://noithattvp.vn/image/cache/catalog/2022-banner/sofa-tvp-cr-400x400.png"
                    alt=""
                  />
                </a>
                <h3 className="h5">BÀN GHẾ ĂN</h3>
              </div>
              <div className="category-box">
                <a href="">
                  <img
                    src="https://noithattvp.vn/image/cache/catalog/2022-banner/thiet-ke-hinh-tron-05-cr-400x400.png"
                    alt=""
                  />
                </a>
                <h3 className="h5">BÀN GHẾ ĂN</h3>
              </div>
              <div className="category-box">
                <a href="">
                  <img
                    src="https://noithattvp.vn/image/cache/catalog/2022-banner/ban-trang-diem-cr-400x400.png"
                    alt=""
                  />
                </a>
                <h3 className="h5">BÀN GHẾ ĂN</h3>
              </div>
              <div className="category-box">
                <a href="">
                  <img
                    src="https://noithattvp.vn/image/cache/catalog/2022-banner/rem-cua-tvp-cr-400x400.png"
                    alt=""
                  />
                </a>
                <h3 className="h5">BÀN GHẾ ĂN</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
