import React from "react";
import "./index.css";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row-footer">
          <div>
            <div className="footer-item">
              <img
                src="https://noithattvp.vn/image/cache/catalog/icon-footer/cam-ket-chat-luong-DQ454H-cr-300x300.png"
                alt=""
              />
              <h5>
                Bảo hành đến 14 tháng, cam kết 1 đổi 1 nếu bị lỗi về sản phẩm
              </h5>
            </div>
          </div>
          <div>
            <div className="footer-item">
              <img
                src="https://noithattvp.vn/image/cache/catalog/icon-footer/giao-hang-trong-24h-7yr83A-cr-300x300.png"
                alt=""
              />
              <h5>Giao hàng tận nơi toàn quốc</h5>
            </div>
          </div>
          <div>
            <div className="footer-item">
              <img
                src="https://noithattvp.vn/image/cache/catalog/icon-footer/mau-ma-thoi-thuong-ExUi5h-cr-300x300.png"
                alt=""
              />
              <h5>Mẫu mã thời thượng, cập nhật mới theo xu hướng nội thất</h5>
            </div>
          </div>
          <div>
            <div className="footer-item">
              <img
                src="https://noithattvp.vn/image/cache/catalog/icon-footer/bao-hanh-den-15-nam-NEH9Cd-cr-300x300.png"
                alt=""
              />
              <h5>Cam kết chất lượng, được kiểm tra hàng rồi thanh toán</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
