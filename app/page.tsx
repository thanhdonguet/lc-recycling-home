import { BookingForm } from './booking-form';

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#noi-dung">
        Bỏ qua điều hướng
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Long Cốc Recycling Home">
          <span className="brand-mark" aria-hidden="true">LC</span>
          <span className="brand-name">Long Cốc<br />Recycling Home</span>
        </a>

        <nav className="desktop-nav" aria-label="Điều hướng chính">
          <a href="#cau-chuyen">Câu chuyện</a>
          <a href="#phong">Phòng</a>
          <a href="#gia">Giá</a>
          <a href="#vi-tri">Vị trí</a>
        </nav>

        <a className="header-cta" href="#dat-phong">
          Đặt phòng <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy" id="noi-dung">
          <p className="eyebrow"><span /> Homestay tái chế · Đồi chè Long Cốc</p>
          <h1>Ở giữa những<br />đồi chè <em>đang thở.</em></h1>
          <p className="hero-lead">
            Một ngôi nhà nhỏ được tạo nên từ những vật liệu có vòng đời mới —
            để bạn nghỉ chậm, uống trà và thức dậy cùng màu xanh Long Cốc.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#phong">Khám phá không gian <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="#dat-phong">Gửi yêu cầu đặt phòng <span aria-hidden="true">↗</span></a>
          </div>
          <dl className="hero-facts" aria-label="Điểm nổi bật">
            <div><dt>01</dt><dd>Trên đồi chè<br />Long Cốc</dd></div>
            <div><dt>02</dt><dd>Không gian<br />tái chế</dd></div>
            <div><dt>03</dt><dd>Nhịp nghỉ<br />gần thiên nhiên</dd></div>
          </dl>
        </div>

        <figure className="hero-visual">
          <div className="image-frame">
            <div
              className="reference-image"
              aria-hidden="true"
            />
          </div>
          <figcaption>
            <span>Ảnh tham khảo phong cách</span>
            <span>Sẽ thay bằng bộ ảnh gốc</span>
          </figcaption>
          <span className="visual-stamp" aria-hidden="true">SỐNG<br />LẠI</span>
        </figure>
      </section>

      <section className="intro-strip" id="cau-chuyen" aria-label="Tinh thần của ngôi nhà">
        <p>Nhặt lại vật liệu</p><span aria-hidden="true">✦</span>
        <p>Giữ lại ký ức</p><span aria-hidden="true">✦</span>
        <p>Mở ra một nơi để nghỉ</p>
      </section>

      <section className="story-section section-pad" aria-labelledby="story-title">
        <p className="section-index">01 · Câu chuyện</p>
        <div className="story-grid">
          <h2 id="story-title">Một ngôi nhà có nhiều hơn một vòng đời.</h2>
          <div className="story-copy">
            <p className="story-lead">
              Long Cốc Recycling Home được định hướng như một nơi nghỉ nhỏ giữa vùng đồi chè,
              nơi vật liệu cũ được trao thêm công năng và mỗi chi tiết đều gợi nhắc về sự sống tiếp nối.
            </p>
            <p>
              Câu chuyện vật liệu, kiến trúc và trải nghiệm thực tế sẽ được bổ sung sau khi chủ nhà
              xác nhận — để website kể đúng, không kể quá.
            </p>
            <p className="story-note">Tái sử dụng · Sống chậm · Gần thiên nhiên</p>
          </div>
        </div>
      </section>

      <section className="rooms-section section-pad" id="phong" aria-labelledby="rooms-title">
        <div className="section-heading">
          <p className="section-index">02 · Không gian nghỉ</p>
          <h2 id="rooms-title">Mỗi căn phòng,<br /><em>một khoảng xanh riêng.</em></h2>
          <p className="section-intro">
            Tên phòng, sức chứa, tiện nghi và ảnh thực tế sẽ được cập nhật sau khi có dữ liệu chính thức.
          </p>
        </div>

        <div className="room-list">
          <article className="room-card">
            <div className="room-placeholder" aria-label="Vị trí dành cho ảnh phòng thứ nhất">
              <span>Ảnh phòng</span><strong>01</strong>
            </div>
            <div className="room-content">
              <p className="room-number">01 / HẠNG PHÒNG</p>
              <h3>Phòng giữa màu chè</h3>
              <p>Một tên gọi gợi ý cho bản thiết kế. Thông tin giường, diện tích, tầm nhìn và tiện nghi đang chờ xác nhận.</p>
              <span className="room-status">Thông tin chờ xác nhận</span>
            </div>
          </article>

          <article className="room-card room-card-reverse">
            <div className="room-placeholder room-placeholder-yellow" aria-label="Vị trí dành cho ảnh phòng thứ hai">
              <span>Ảnh phòng</span><strong>02</strong>
            </div>
            <div className="room-content">
              <p className="room-number">02 / HẠNG PHÒNG</p>
              <h3>Phòng nắng vàng</h3>
              <p>Một tên gọi gợi ý cho bản thiết kế. Sức chứa, bố trí và chính sách đi kèm sẽ được điền từ thông tin của chủ nhà.</p>
              <span className="room-status">Thông tin chờ xác nhận</span>
            </div>
          </article>
        </div>
      </section>

      <section className="pricing-section section-pad" id="gia" aria-labelledby="pricing-title">
        <div className="pricing-heading">
          <p className="section-index section-index-light">03 · Giá phòng</p>
          <h2 id="pricing-title">Rõ ràng trước<br />khi bạn lên đường.</h2>
        </div>
        <ul className="price-table" aria-label="Các nhóm giá đang chờ cập nhật">
          <li className="price-row"><span>Giá đêm thường</span><strong>Đang cập nhật</strong></li>
          <li className="price-row"><span>Cuối tuần &amp; ngày lễ</span><strong>Đang cập nhật</strong></li>
          <li className="price-row"><span>Phụ thu &amp; dịch vụ</span><strong>Đang cập nhật</strong></li>
          <li className="price-note">Website chưa hiển thị mức giá giả định. Bảng này sẽ được mở ngay khi chính sách giá được xác nhận.</li>
        </ul>
      </section>

      <section className="location-section section-pad" id="vi-tri" aria-labelledby="location-title">
        <div className="location-copy">
          <p className="section-index">04 · Vị trí</p>
          <h2 id="location-title">Tìm về vùng đồi chè Long Cốc.</h2>
          <p>
            Bản đồ hiện hiển thị khu vực đồi chè Long Cốc để định hướng. Điểm ghim chính xác và hướng dẫn đường vào homestay sẽ được cập nhật khi địa chỉ được xác nhận.
          </p>
          <a className="location-link" href="https://www.google.com/maps/search/?api=1&query=%C4%90%E1%BB%93i+ch%C3%A8+Long+C%E1%BB%91c" target="_blank" rel="noreferrer">
            Mở khu vực trên Google Maps <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="map-frame">
          <iframe
            title="Bản đồ khu vực đồi chè Long Cốc"
            src="https://www.google.com/maps?q=%C4%90%E1%BB%93i+ch%C3%A8+Long+C%E1%BB%91c&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p>Điểm tham chiếu khu vực — chưa phải vị trí chính xác của homestay.</p>
        </div>
      </section>

      <section className="booking-section section-pad" id="dat-phong" aria-labelledby="booking-title">
        <div className="booking-heading">
          <p className="section-index">05 · Đặt phòng</p>
          <h2 id="booking-title">Bạn chọn ngày.<br /><em>Chúng tôi chuẩn bị trà.</em></h2>
          <p>Hãy tạo một bản yêu cầu để kiểm tra nội dung trước. Website chưa gửi dữ liệu đi đâu cho tới khi kênh liên hệ chính thức được kết nối.</p>
        </div>
        <BookingForm />
      </section>

      <footer className="site-footer">
        <div className="footer-brand"><span className="brand-mark" aria-hidden="true">LC</span><strong>Long Cốc<br />Recycling Home</strong></div>
        <p>Homestay tái chế · Vùng đồi chè Long Cốc</p>
        <p className="footer-meta">Liên hệ · Đang cập nhật</p>
      </footer>
    </main>
  );
}
