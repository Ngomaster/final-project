import React from "react";
import { Link } from "react-router-dom";

function HeaderList(props) {
  return (
    <div>
      <div className="module-title">
        <div className="container-sl-pd">
          <h3>Danh mục sản phẩm</h3>

          <div className="row-category">
            <div className="category-box">
              <Link to="/more-new-collection">
                <img
                  src="https://noithattvp.vn/image/cache/catalog/banner/ban-ghe-annn-cr-400x400.jpg"
                  alt=""
                />
              </Link>
              <h3 className="h5">BỘ SƯU TẬP MỚI</h3>
            </div>
            <div className="category-box">
              <Link to="/more-ban-tra-ban-sofa">
                <img
                  src="https://noithattvp.vn/image/cache/catalog/danh-muc-san-pham/ban-tra-sofa-cr-400x400.jpg"
                  alt=""
                />
              </Link>
              <h3 className="h5">BÀN TRÀ, BÀN SOFA</h3>
            </div>
            <div className="category-box">
              <Link to="/more-sofa">
                <img
                  src="https://noithattvp.vn/image/cache/catalog/danh-muc-san-pham/ghe-sofa-1-cr-400x400.jpg"
                  alt=""
                />
              </Link>
              <h3 className="h5">SOFA</h3>
            </div>
            <div className="category-box">
              <Link to="/more-van-phong">
                <img
                  src="https://noithattvp.vn/image/cache/catalog/danh-muc-san-pham/ghe-van-phong-edit-cr-400x400.jpg"
                  alt=""
                />
              </Link>
              <h3 className="h5">GHẾ VĂN PHÒNG</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderList;
