import { BookingForm } from './booking-form';
import blog1Caption from '../src/blogs/blog1/blog1.txt?raw';
import blog2Caption from '../src/blogs/blog2/blog2.txt?raw';
import blog3Caption from '../src/blogs/blog3/blog3.txt?raw';

const blogEntries = [
  { number: '01', title: 'Những điều không hoàn hảo', caption: blog1Caption },
  { number: '02', title: 'Dòng suối và bình yên', caption: blog2Caption },
  { number: '03', title: 'Câu chuyện sống lại của rác', caption: blog3Caption },
];

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
          <a href="#trai-nghiem">Trải nghiệm</a>
          <a href="#am-thuc">Ẩm thực</a>
          <a href="#gia">Giá</a>
          <a href="#vi-tri">Vị trí</a>
        </nav>

        <a className="header-cta" href="#dat-phong">
          Đặt phòng <span aria-hidden="true">↗</span>
        </a>
      </header>

      <nav className="mobile-nav" aria-label="Điều hướng trên điện thoại">
        <a href="#cau-chuyen">Câu chuyện</a>
        <a href="#phong">Phòng</a>
        <a href="#trai-nghiem">Trải nghiệm</a>
        <a href="#am-thuc">Ẩm thực</a>
        <a href="#gia">Giá</a>
        <a href="#vi-tri">Vị trí</a>
      </nav>

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
              className="hero-photo"
              aria-hidden="true"
            />
          </div>
          <figcaption>
            <span>Long Cốc Recycling Home</span>
            <span>Đồi chè Long Cốc</span>
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
              Một nơi để những vật liệu cũ được trao thêm công năng — và một chuyến đi được trao thêm nhiều khoảng thở.
            </p>
            <p>
              Giữa đồi chè Long Cốc, những chai lọ, cánh cửa cũ và mảng vật liệu từng bị bỏ quên được ghép lại thành một không gian có ký ức.
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
            Từ bungalow giữa đồi chè đến không gian cho đoàn đông người — chọn một nhịp nghỉ hợp với chuyến đi của bạn.
          </p>
        </div>

        <div className="room-list">
          <article className="room-card">
            <div className="room-placeholder" aria-label="Thông tin Bungalow đồi chè">
              <span>Bungalow · 35m²</span><strong>01</strong>
            </div>
            <div className="room-content">
              <p className="room-number">01 / HẠNG PHÒNG</p>
              <h3>Bungalow đồi chè</h3>
              <p>10 căn, mỗi căn 35m² với tầm nhìn ôm trọn những đồi chè bát úp. Có lựa chọn 1 giường lớn hoặc 2 giường lớn.</p>
              <span className="room-status">Từ 1.200.000đ / 2 khách</span>
            </div>
          </article>

          <article className="room-card room-card-reverse">
            <div className="room-placeholder room-placeholder-yellow" aria-label="Thông tin Nhà cổ">
              <span>2 giường lớn</span><strong>02</strong>
            </div>
            <div className="room-content">
              <p className="room-number">02 / HẠNG PHÒNG</p>
              <h3>Nhà cổ</h3>
              <p>Hai căn với không gian ấm cúng, mỗi căn có 2 giường lớn, phù hợp cho gia đình hoặc nhóm bạn từ 4–6 người.</p>
              <span className="room-status">Từ 640.000đ / 2 khách</span>
            </div>
          </article>
        </div>

        <ul className="room-catalogue" aria-label="Các lựa chọn lưu trú khác">
          <li><strong>Bungalow view hồ</strong><span>35m² · mái kính ngắm trời đêm</span><em>1.280.000đ / 2 khách</em></li>
          <li><strong>Nhà sàn đồi</strong><span>2 tầng · phù hợp 10–12 khách</span><em>3.360.000đ / 10 khách</em></li>
          <li><strong>Nhà sàn Ao</strong><span>Khu ngủ tập thể · tối đa 30 khách</span><em>Từ 280.000đ / giường</em></li>
        </ul>
      </section>

      <section className="experiences-section section-pad" id="trai-nghiem" aria-labelledby="experiences-title">
        <div className="experience-heading">
          <p className="section-index">03 · Những lát cắt ở Long Cốc</p>
          <h2 id="experiences-title">Đi chậm lại,<br /><em>thấy nhiều hơn.</em></h2>
        </div>
        <div className="experience-grid">
          <article className="experience-card experience-card-tall">
            <div className="experience-image experience-image-materials" aria-hidden="true" />
            <div className="experience-card-copy">
              <p>01 · Vòng đời mới</p>
              <h3>Từ vật liệu cũ đến những góc đầy màu sắc.</h3>
              <span>Đọc câu chuyện tái chế</span>
            </div>
          </article>
          <article className="experience-card">
            <div className="experience-image experience-image-stream" aria-hidden="true" />
            <div className="experience-card-copy">
              <p>02 · Giữa thiên nhiên</p>
              <h3>Nghe nước chảy, nghe rừng thở.</h3>
              <span>Những ngày nghỉ thật chậm</span>
            </div>
          </article>
          <article className="experience-card experience-card-accent">
            <div className="experience-image experience-image-reborn" aria-hidden="true" />
            <div className="experience-card-copy">
              <p>03 · Những bông hoa không héo</p>
              <h3>Khi điều tưởng như bỏ đi lại kể một câu chuyện khác.</h3>
              <span>Khám phá không gian</span>
            </div>
          </article>
        </div>
      </section>

      <section className="journal-section section-pad" aria-labelledby="journal-title">
        <div className="journal-heading">
          <p className="section-index">04 · Nhật ký Long Cốc</p>
          <h2 id="journal-title">Những câu chuyện<br /><em>được viết từ nơi này.</em></h2>
        </div>
        <div className="journal-list">
          {blogEntries.map((entry) => (
            <details className="journal-entry" key={entry.number}>
              <summary>
                <span>{entry.number}</span>
                <h3>{entry.title}</h3>
                <b aria-hidden="true">+</b>
              </summary>
              <div className="journal-caption">
                {entry.caption.trim().split(/\n\s*\n/).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="food-section section-pad" id="am-thuc" aria-labelledby="food-title">
        <div className="food-main-image" aria-hidden="true" />
        <div className="food-copy">
          <p className="section-index section-index-light">05 · Ẩm thực</p>
          <h2 id="food-title">Một bữa ăn,<br /><em>một chiều chậm.</em></h2>
          <p>
            Thực đơn tại Long Cốc là một phần của chuyến đi: những món ăn và đồ uống để bạn ngồi lâu hơn, trò chuyện nhiều hơn, ngắm màu chè đổi theo nắng.
          </p>
          <div className="menu-previews" aria-label="Ảnh thực đơn Long Cốc">
            <div className="menu-preview menu-preview-one" aria-label="Trang thực đơn thứ nhất" />
            <div className="menu-preview menu-preview-two" aria-label="Trang thực đơn thứ hai" />
          </div>
          <p className="food-note">Thực đơn chi tiết và giá sẽ được cập nhật cùng tài liệu chính thức.</p>
        </div>
      </section>

      <section className="pricing-section section-pad" id="gia" aria-labelledby="pricing-title">
        <div className="pricing-heading">
          <p className="section-index section-index-light">06 · Giá phòng</p>
          <h2 id="pricing-title">Rõ ràng trước<br />khi bạn lên đường.</h2>
        </div>
        <ul className="price-table" aria-label="Bảng giá phòng ưu đãi">
          <li className="price-row"><span>Bungalow đồi chè</span><strong>1.200.000đ / 2 khách</strong></li>
          <li className="price-row"><span>Nhà cổ</span><strong>640.000đ / 2 khách</strong></li>
          <li className="price-row"><span>Bungalow view hồ</span><strong>1.280.000đ / 2 khách</strong></li>
          <li className="price-row"><span>Nhà sàn đồi</span><strong>3.360.000đ / 10 khách</strong></li>
          <li className="price-row"><span>Nhà sàn Ao</span><strong>Từ 280.000đ / giường</strong></li>
          <li className="price-note">Mức giá ưu đãi 20% theo bảng giá khách lẻ, đã bao gồm ăn sáng. Phụ thu Nhà sàn Ao: 300.000đ / khách, tối đa 4 khách.</li>
        </ul>
      </section>

      <section className="location-section section-pad" id="vi-tri" aria-labelledby="location-title">
        <div className="location-copy">
          <p className="section-index">07 · Vị trí</p>
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
          <p className="section-index">08 · Đặt phòng</p>
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
