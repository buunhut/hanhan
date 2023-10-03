import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Đang viết trên thiết bị mobile :)</h1>
      <div className="myContainer">
        <div className="topMenu">
          <div className="viTri">
            <i class="fa-solid fa-location-dot myLogoViTri"></i>
            <p className="cuaHang">Bách hoá HÂN HÂN</p>
            <i class="fa-solid fa-caret-down myDropdown"></i>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Xin chào, bạn muốn tìm gì hôm nay?"
            />
            <i class="fa-solid fa-magnifying-glass myDropdow"></i>
          </div>

          <div className="gioHang">
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </div>

      <div className="myContainer">
        <div className="mainContent">
          <div className="proItem">
            <div className="hinhAnh">
              <img
                src="https://acecookvietnam.vn/wp-content/uploads/2017/07/H%E1%BA%A3o-H%E1%BA%A3o-T%C3%B4m-chua-cay_down33_.png"
                alt=""
              />
            </div>
            <div className="text">
              <div className="tenSp">
                <p>Gói mì hảo hảo</p>
                <p>Gói mì hảo hảo</p>
              </div>
              <div className="giaSp">
                <p className="giaBan">250,000</p>
                <p className="giaVon">280,000</p>
              </div>
              <div className="myButton">
                <button>Thêm vào giỏ</button>
              </div>
              <div className="giamGia">
                <p>-20%</p>
              </div>
              <div className="heart">
                <i class="fa-regular fa-heart"></i>
              </div>
              <div className="gif">
                <i class="fa-solid fa-gift"></i>
              </div>
            </div>
          </div>
          <div className="proItem">
            <div className="hinhAnh">
              <img
                src="https://acecookvietnam.vn/wp-content/uploads/2017/07/H%E1%BA%A3o-H%E1%BA%A3o-T%C3%B4m-chua-cay_down33_.png"
                alt=""
              />
            </div>
            <div className="text">
              <div className="tenSp">
                <p>Gói mì hảo hảo</p>
                <p>Gói mì hảo hảo</p>
              </div>
              <div className="giaSp">
                <p className="giaBan">250,000</p>
                <p className="giaVon">280,000</p>
              </div>
              <div className="myButton">
                <button>Thêm vào giỏ</button>
              </div>
              <div className="giamGia">
                <p>-20%</p>
              </div>
              <div className="heart">
                <i class="fa-regular fa-heart"></i>
              </div>
              <div className="gif">
                <i class="fa-solid fa-gift"></i>
              </div>
            </div>
          </div>
          <div className="proItem">
            <div className="hinhAnh">
              <img
                src="https://acecookvietnam.vn/wp-content/uploads/2017/07/H%E1%BA%A3o-H%E1%BA%A3o-T%C3%B4m-chua-cay_down33_.png"
                alt=""
              />
            </div>
            <div className="text">
              <div className="tenSp">
                <p>Gói mì hảo hảo</p>
                <p>Gói mì hảo hảo</p>
              </div>
              <div className="giaSp">
                <p className="giaBan">250,000</p>
                {/* <p className="giaVon">280,000</p> */}
              </div>
              <div className="myButton">
                <button>Thêm vào giỏ</button>
              </div>
              <div className="giamGia">{/* <p>-20%</p> */}</div>
              <div className="heart">
                <i class="fa-regular fa-heart"></i>
              </div>
              <div className="gif">
                <i class="fa-solid fa-gift"></i>
              </div>
            </div>
          </div>
          <div className="proItem">
            <div className="hinhAnh">
              <img
                src="https://acecookvietnam.vn/wp-content/uploads/2017/07/H%E1%BA%A3o-H%E1%BA%A3o-T%C3%B4m-chua-cay_down33_.png"
                alt=""
              />
            </div>
            <div className="text">
              <div className="tenSp">
                <p>Gói mì hảo hảo</p>
                <p>Gói mì hảo hảo</p>
              </div>
              <div className="giaSp">
                <p className="giaBan">250,000</p>
                <p className="giaVon">280,000</p>
              </div>
              <div className="myButton">
                <button>Thêm vào giỏ</button>
              </div>
              <div className="giamGia">
                <p>-20%</p>
              </div>
              <div className="heart">
                <i class="fa-regular fa-heart"></i>
              </div>
              <div className="gif">
                <i class="fa-solid fa-gift"></i>
              </div>
            </div>
          </div>
          <div className="proItem">
            <div className="hinhAnh">
              <img
                src="https://acecookvietnam.vn/wp-content/uploads/2017/07/H%E1%BA%A3o-H%E1%BA%A3o-T%C3%B4m-chua-cay_down33_.png"
                alt=""
              />
            </div>
            <div className="text">
              <div className="tenSp">
                <p>Gói mì hảo hảo</p>
                <p>Gói mì hảo hảo</p>
              </div>
              <div className="giaSp">
                <p className="giaBan">250,000</p>
                <p className="giaVon">280,000</p>
              </div>
              <div className="myButton">
                <button>Thêm vào giỏ</button>
              </div>
              <div className="giamGia">
                <p>-20%</p>
              </div>
              <div className="heart">
                <i class="fa-regular fa-heart"></i>
              </div>
              <div className="gif">
                <i class="fa-solid fa-gift"></i>
              </div>
            </div>
          </div>
          <div className="proItem">
            <div className="hinhAnh">
              <img
                src="https://acecookvietnam.vn/wp-content/uploads/2017/07/H%E1%BA%A3o-H%E1%BA%A3o-T%C3%B4m-chua-cay_down33_.png"
                alt=""
              />
            </div>
            <div className="text">
              <div className="tenSp">
                <p>Gói mì hảo hảo</p>
                <p>Gói mì hảo hảo</p>
              </div>
              <div className="giaSp">
                <p className="giaBan">250,000</p>
                {/* <p className="giaVon">280,000</p> */}
              </div>
              <div className="myButton">
                <button>Thêm vào giỏ</button>
              </div>
              <div className="giamGia">{/* <p>-20%</p> */}</div>
              <div className="heart">
                <i class="fa-regular fa-heart"></i>
              </div>
              <div className="gif"></div>
            </div>
          </div>
          <div className="proItem">
            <div className="hinhAnh">
              <img
                src="https://acecookvietnam.vn/wp-content/uploads/2017/07/H%E1%BA%A3o-H%E1%BA%A3o-T%C3%B4m-chua-cay_down33_.png"
                alt=""
              />
            </div>
            <div className="text">
              <div className="tenSp">
                <p>Gói mì hảo hảo</p>
                <p>Gói mì hảo hảo</p>
              </div>
              <div className="giaSp">
                <p className="giaBan">250,000</p>
                <p className="giaVon">280,000</p>
              </div>
              <div className="myButton">
                <button>Thêm vào giỏ</button>
              </div>
              <div className="giamGia">
                <p>-20%</p>
              </div>
              <div className="heart">
                <i class="fa-regular fa-heart"></i>
              </div>
              <div className="gif">
                <i class="fa-solid fa-gift"></i>
              </div>
            </div>
          </div>
          <div className="proItem">
            <div className="hinhAnh">
              <img
                src="https://acecookvietnam.vn/wp-content/uploads/2017/07/H%E1%BA%A3o-H%E1%BA%A3o-T%C3%B4m-chua-cay_down33_.png"
                alt=""
              />
            </div>
            <div className="text">
              <div className="tenSp">
                <p>Gói mì hảo hảo</p>
                <p>Gói mì hảo hảo</p>
              </div>
              <div className="giaSp">
                <p className="giaBan">250,000</p>
                <p className="giaVon">280,000</p>
              </div>
              <div className="myButton">
                <button>Thêm vào giỏ</button>
              </div>
              <div className="giamGia">
                <p>-20%</p>
              </div>
              <div className="heart">
                <i class="fa-regular fa-heart"></i>
              </div>
              <div className="gif">
                <i class="fa-solid fa-gift"></i>
              </div>
            </div>
          </div>
          <div className="proItem">
            <div className="hinhAnh">
              <img
                src="https://acecookvietnam.vn/wp-content/uploads/2017/07/H%E1%BA%A3o-H%E1%BA%A3o-T%C3%B4m-chua-cay_down33_.png"
                alt=""
              />
            </div>
            <div className="text">
              <div className="tenSp">
                <p>Gói mì hảo hảo</p>
                <p>Gói mì hảo hảo</p>
              </div>
              <div className="giaSp">
                <p className="giaBan">250,000</p>
                <p className="giaVon">280,000</p>
              </div>
              <div className="myButton">
                <button>Thêm vào giỏ</button>
              </div>
              <div className="giamGia">
                <p>-20%</p>
              </div>
              <div className="heart">
                <i class="fa-regular fa-heart"></i>
              </div>
              <div className="gif">
                <i class="fa-solid fa-gift"></i>
              </div>
            </div>
          </div>
          <div className="proItem">
            <div className="hinhAnh">
              <img
                src="https://acecookvietnam.vn/wp-content/uploads/2017/07/H%E1%BA%A3o-H%E1%BA%A3o-T%C3%B4m-chua-cay_down33_.png"
                alt=""
              />
            </div>
            <div className="text">
              <div className="tenSp">
                <p>Gói mì hảo hảo</p>
                <p>Gói mì hảo hảo</p>
              </div>
              <div className="giaSp">
                <p className="giaBan">250,000</p>
                <p className="giaVon">280,000</p>
              </div>
              <div className="myButton">
                <button>Thêm vào giỏ</button>
              </div>
              <div className="giamGia">
                <p>-20%</p>
              </div>
              <div className="heart">
                <i class="fa-regular fa-heart"></i>
              </div>
              <div className="gif">
                <i class="fa-solid fa-gift"></i>
              </div>
            </div>
          </div>
          <div className="proItem">
            <div className="hinhAnh">
              <img
                src="https://acecookvietnam.vn/wp-content/uploads/2017/07/H%E1%BA%A3o-H%E1%BA%A3o-T%C3%B4m-chua-cay_down33_.png"
                alt=""
              />
            </div>
            <div className="text">
              <div className="tenSp">
                <p>Gói mì hảo hảo</p>
                <p>Gói mì hảo hảo</p>
              </div>
              <div className="giaSp">
                <p className="giaBan">250,000</p>
                <p className="giaVon">280,000</p>
              </div>
              <div className="myButton">
                <button>Thêm vào giỏ</button>
              </div>
              <div className="giamGia">
                <p>-20%</p>
              </div>
              <div className="heart">
                <i class="fa-regular fa-heart"></i>
              </div>
              <div className="gif">
                <i class="fa-solid fa-gift"></i>
              </div>
            </div>
          </div>
          <div className="proItem">
            <div className="hinhAnh">
              <img
                src="https://acecookvietnam.vn/wp-content/uploads/2017/07/H%E1%BA%A3o-H%E1%BA%A3o-T%C3%B4m-chua-cay_down33_.png"
                alt=""
              />
            </div>
            <div className="text">
              <div className="tenSp">
                <p>Gói mì hảo hảo</p>
                <p>Gói mì hảo hảo</p>
              </div>
              <div className="giaSp">
                <p className="giaBan">250,000</p>
                <p className="giaVon">280,000</p>
              </div>
              <div className="myButton">
                <button>Thêm vào giỏ</button>
              </div>
              <div className="giamGia">
                <p>-20%</p>
              </div>
              <div className="heart">
                <i class="fa-regular fa-heart"></i>
              </div>
              <div className="gif">
                <i class="fa-solid fa-gift"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="myContainer">
        <div className="buttonMenu">
          <div className="buttonItem">
            <div>
              <i class="fa-solid fa-house"></i>
            </div>
            <p>Trang chủ</p>
          </div>
          <div className="buttonItem">
            <div>
              <i class="fa-solid fa-layer-group"></i>
            </div>
            <p>Danh mục</p>
          </div>
          <div className="buttonItem">
            <div>
              <i class="fa-solid fa-bag-shopping"></i>
            </div>
            <p>Thương hiệu</p>
          </div>
          <div className="buttonItem">
            <div>
              <i class="fa-solid fa-bell"></i>
            </div>
            <p>Thông báo</p>
          </div>
          <div className="buttonItem">
            <div>
              <i class="fa-solid fa-user"></i>
            </div>
            <p>Tài khoản</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
