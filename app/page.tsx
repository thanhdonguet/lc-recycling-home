import { BookingForm } from './booking-form';
import { ImageLightbox } from './image-lightbox';
import blog1Caption from '../src/blogs/blog1/blog1.txt?raw';
import blog2Caption from '../src/blogs/blog2/blog2.txt?raw';
import blog3Caption from '../src/blogs/blog3/blog3.txt?raw';

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#noi-dung">
        Bỏ qua điều hướng
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Long Cốc Recycling Home">
          <span className="brand-logo" aria-hidden="true" />
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
            <ImageLightbox className="hero-photo" src="/images/long-coc/hero-recycling-home.jpg" alt="Không gian nghỉ tại Long Cốc Recycling Home" />
          </div>
          <figcaption>
            <span>Long Cốc Recycling Home</span>
            <span>Đồi chè Long Cốc</span>
          </figcaption>
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
            Từ bungalow 35m² dành cho hai người đến nhà sàn cho đoàn đông — chọn một nhịp nghỉ hợp với chuyến đi của bạn. Tất cả giá đã bao gồm ăn sáng.
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
              <p>10 căn, mỗi căn 35m². Căn 1–5 có 1 giường 2 × 2,2m; căn 6–10 có 2 giường 1,6 × 2m. Phù hợp cho 2 khách.</p>
              <span className="room-status">1.200.000đ / 2 khách · đã giảm 20%</span>
            </div>
          </article>

          <article className="room-card room-card-reverse">
            <div className="room-placeholder room-placeholder-yellow" aria-label="Thông tin Nhà cọ">
              <span>2 giường lớn</span><strong>02</strong>
            </div>
            <div className="room-content">
              <p className="room-number">02 / HẠNG PHÒNG</p>
              <h3>Khu nhà cọ</h3>
              <p>Gồm Nhà cọ 1 và 2, mỗi căn có 2 giường 1,6 × 2m. Lựa chọn tiết kiệm, phù hợp nhóm nhỏ hoặc gia đình.</p>
              <span className="room-status">640.000đ / 2 khách · đã giảm 20%</span>
            </div>
          </article>
        </div>

        <ul className="room-catalogue" aria-label="Các lựa chọn lưu trú khác">
          <li><strong>Bungalow view hồ</strong><span>35m² · tiêu chuẩn 2 khách</span><em>1.280.000đ / 2 khách</em></li>
          <li><strong>Khu nhà sàn đồi</strong><span>2 tầng · 120m² · tiêu chuẩn 10–12 khách</span><em>3.360.000đ / 10 khách</em></li>
          <li><strong>Khu nhà sàn Ao</strong><span>250m² · tối đa 30 khách · tính giá theo giường</span><em>Từ 280.000đ / giường</em></li>
        </ul>
      </section>

      <section className="experiences-section section-pad" id="trai-nghiem" aria-labelledby="experiences-title">
        <div className="experience-heading">
          <p className="section-index">03 · Những lát cắt ở Long Cốc</p>
          <h2 id="experiences-title">Đi chậm lại,<br /><em>thấy nhiều hơn.</em></h2>
        </div>
        <div className="experience-grid">
          <article className="experience-card experience-card-tall">
            <ImageLightbox className="experience-image experience-image-materials" src="/images/long-coc/story-materials.jpg" alt="Vật liệu tái chế tại Long Cốc" />
            <details className="experience-story">
              <summary className="experience-card-copy">
                <p>01 · Vòng đời mới</p>
                <h3>Vẻ đẹp của những điều được làm lại.</h3>
                <span>Đọc caption đầy đủ <b aria-hidden="true">+</b></span>
              </summary>
              <div className="experience-caption">
                {blog1Caption.trim().split(/\n\s*\n/).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </details>
          </article>
          <article className="experience-card">
            <ImageLightbox className="experience-image experience-image-stream" src="/images/long-coc/story-stream.jpg" alt="Dòng suối ở Long Cốc" />
            <details className="experience-story">
              <summary className="experience-card-copy">
                <p>02 · Giữa thiên nhiên</p>
                <h3>Dòng suối và bình yên.</h3>
                <span>Đọc caption đầy đủ <b aria-hidden="true">+</b></span>
              </summary>
              <div className="experience-caption">
                {blog2Caption.trim().split(/\n\s*\n/).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </details>
          </article>
          <article className="experience-card experience-card-accent">
            <ImageLightbox className="experience-image experience-image-reborn" src="/images/long-coc/story-reborn.jpg" alt="Góc tái chế đầy màu sắc tại Long Cốc" />
            <details className="experience-story">
              <summary className="experience-card-copy">
                <p>03 · Những bông hoa không héo</p>
                <h3>Câu chuyện sống lại của rác.</h3>
                <span>Đọc caption đầy đủ <b aria-hidden="true">+</b></span>
              </summary>
              <div className="experience-caption">
                {blog3Caption.trim().split(/\n\s*\n/).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </details>
          </article>
        </div>
      </section>

      <section className="food-section section-pad" id="am-thuc" aria-labelledby="food-title">
        <ImageLightbox className="food-main-image" src="/images/long-coc/meal.jpg" alt="Món ăn tại Long Cốc" />
        <div className="food-copy">
          <p className="section-index section-index-light">04 · Ẩm thực</p>
          <h2 id="food-title">Một bữa ăn,<br /><em>một chiều chậm.</em></h2>
          <p>
            Thực đơn tại Long Cốc là một phần của chuyến đi: những món ăn và đồ uống để bạn ngồi lâu hơn, trò chuyện nhiều hơn, ngắm màu chè đổi theo nắng.
          </p>
          <div className="food-gallery" aria-label="Một số món ăn tại Long Cốc">
            <ImageLightbox className="food-gallery-image food-gallery-image-two" src="/images/long-coc/meal-2.jpg" alt="Món ăn Long Cốc số 1" />
            <ImageLightbox className="food-gallery-image food-gallery-image-three" src="/images/long-coc/meal-3.jpg" alt="Món ăn Long Cốc số 2" />
            <ImageLightbox className="food-gallery-image food-gallery-image-four" src="/images/long-coc/meal-4.jpg" alt="Món ăn Long Cốc số 3" />
            <ImageLightbox className="food-gallery-image food-gallery-image-five" src="/images/long-coc/meal-5.jpg" alt="Món ăn Long Cốc số 4" />
            <ImageLightbox className="food-gallery-image food-gallery-image-six" src="/images/long-coc/meal-6.jpg" alt="Món ăn Long Cốc số 5" />
          </div>
          <div className="menu-previews" aria-label="Ảnh thực đơn Long Cốc">
            <ImageLightbox className="menu-preview menu-preview-one" src="/images/long-coc/menu-1.jpg" alt="Trang thực đơn thứ nhất" />
            <ImageLightbox className="menu-preview menu-preview-two" src="/images/long-coc/menu-2.jpg" alt="Trang thực đơn thứ hai" />
          </div>
          <p className="food-note">Thực đơn chi tiết và giá sẽ được cập nhật cùng tài liệu chính thức.</p>
        </div>
      </section>

      <section className="pricing-section section-pad" id="gia" aria-labelledby="pricing-title">
        <div className="pricing-heading">
          <p className="section-index section-index-light">05 · Giá phòng</p>
          <h2 id="pricing-title">Rõ ràng trước<br />khi bạn lên đường.</h2>
        </div>
        <ul className="price-table" aria-label="Bảng giá phòng ưu đãi">
          <li className="price-row">
            <div><b>Khu nhà sàn Ao</b><span>250m² · tối đa 30 khách · tính giá theo giường</span></div>
            <div className="price-values"><del>350.000đ / giường 1m</del><strong>280.000đ / giường 1m</strong><del>600.000đ / giường 1,6m (2 khách)</del><strong>480.000đ / giường 1,6m</strong></div>
          </li>
          <li className="price-row">
            <div><b>Khu Bungalow đồi chè</b><span>10 căn · 35m² · tiêu chuẩn 2 khách</span></div>
            <div className="price-values"><del>1.500.000đ / 2 khách</del><strong>1.200.000đ / 2 khách</strong></div>
          </li>
          <li className="price-row">
            <div><b>Khu nhà cọ</b><span>Nhà cọ 1 &amp; 2 · 2 giường 1,6 × 2m</span></div>
            <div className="price-values"><del>800.000đ / 2 khách</del><strong>640.000đ / 2 khách</strong></div>
          </li>
          <li className="price-row">
            <div><b>Bungalow view hồ</b><span>35m² · tiêu chuẩn 2 khách</span></div>
            <div className="price-values"><del>1.600.000đ / 2 khách</del><strong>1.280.000đ / 2 khách</strong></div>
          </li>
          <li className="price-row">
            <div><b>Khu nhà sàn đồi</b><span>2 tầng · 120m² · tiêu chuẩn 10–12 khách</span></div>
            <div className="price-values"><del>4.200.000đ / 10 khách</del><strong>3.360.000đ / 10 khách</strong></div>
          </li>
          <li className="price-note">Giá ưu đãi đã giảm 20% và bao gồm ăn sáng. Phụ thu Bungalow và Nhà cọ: 300.000đ / khách, tối đa 4 khách / phòng.</li>
        </ul>
      </section>

      <section className="location-section section-pad" id="vi-tri" aria-labelledby="location-title">
        <div className="location-copy">
          <p className="section-index">06 · Vị trí</p>
          <h2 id="location-title">Tìm về vùng đồi chè Long Cốc.</h2>
          <p>
            Mở bản đồ để nhận chỉ đường trực tiếp đến Long Cốc Recycling Home.
          </p>
          <a className="location-link" href="https://maps.app.goo.gl/QLFe5JZVfRAG4nDJ6?g_st=ac" target="_blank" rel="noreferrer">
            Mở chỉ đường trên Google Maps <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="map-frame">
          <iframe
            title="Bản đồ Long Cốc Recycling Home"
            src="https://www.google.com/maps?q=Long+Coc+Recycling+Home,+B%C3%B4ng,+2,+Long+C%E1%BB%91c,+Ph%C3%BA+Th%E1%BB%8D+290000&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p>Điểm ghim Long Cốc Recycling Home.</p>
        </div>
      </section>

      <section className="booking-section section-pad" id="dat-phong" aria-labelledby="booking-title">
        <div className="booking-heading">
          <p className="section-index">07 · Đặt phòng</p>
          <h2 id="booking-title">Bạn chọn ngày.<br /><em>Chúng tôi chuẩn bị trà.</em></h2>
          <p>Gửi yêu cầu để Long Cốc kiểm tra phòng trống và chuẩn bị cho chuyến nghỉ của bạn.</p>
        </div>
        <BookingForm />
      </section>

      <footer className="site-footer">
        <div className="footer-brand"><span className="brand-mark" aria-hidden="true">LC</span><strong>Long Cốc<br />Recycling Home</strong></div>
        <p>Homestay tái chế · Vùng đồi chè Long Cốc</p>
        <div className="footer-contact">
          <a href="https://www.facebook.com/profile.php?id=61590562556980" target="_blank" rel="noreferrer">Facebook Long Cốc</a>
          <a href="https://zalo.me/0388005474" target="_blank" rel="noreferrer">Zalo: 0388 005 474</a>
          <a href="tel:0388005474">Gọi: 0388 005 474</a>
        </div>
      </footer>
    </main>
  );
}
