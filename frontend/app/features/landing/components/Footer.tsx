"use client";
import * as S from "../styles/Footer.styles";

export const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.Container>
        {/* 1. Logo & Tagline */}
        <S.TopHeader>
          <h2>
            <span>❖</span> XSURFACE
          </h2>
          <p>เมื่อวัสดุปิดผิว การตกแต่ง มารวมกันในแพลตฟอร์มที่เน้นการออกแบบ</p>
        </S.TopHeader>

        {/* 2. Main Columns */}
        <S.MainContent>
          {/* Column 1: Links */}
          <S.Column>
            <h3>เกี่ยวกับเรา</h3>
            <S.LinkList>
              <a href="#">เกี่ยวกับเรา</a>
              <a href="#">สมัครงาน</a>
              <a href="#">คำถามที่พบบ่อย</a>
            </S.LinkList>
          </S.Column>

          {/* Column 2: Contact */}
          <S.Column>
            <h3>ติดต่อเรา</h3>
            <S.ContactInfo>
              <p>
                เอ็กซ์เซอร์เฟส 53 ซอย สุขุมวิท 62, บางจาก,
                <br />
                พระโขนง, กรุงเทพฯ 10260
              </p>
              <p>
                <span className="label">อีเมล:</span> support@xsurface.com
              </p>
              <p>
                <span className="label">เบอร์:</span> +66 65-656-2887
              </p>
            </S.ContactInfo>
          </S.Column>

          {/* Column 3: CTA */}
          <S.Column>
            <h3>สมัครง่ายๆ ก็ลงขายกับเราได้เลย ฟรี ไม่มีค่าใช้จ่าย</h3>
            <S.CtaButton>ลงขายสินค้ากับเรา</S.CtaButton>
          </S.Column>
        </S.MainContent>

        {/* 3. Bottom Section */}
        <S.BottomBar>
          <S.SocialIcons>
            {/* ใส่ Icon จริงแทนตัวอักษรได้เลย (เช่น FontAwesome) */}
            <div className="icon-circle">f</div>
            <div className="icon-circle">IG</div>
            <div className="icon-circle">♪</div>
          </S.SocialIcons>

          <S.CopyText>
            © 2021 . Copyright of <span>XSURFACE Co. , Ltd.</span>
          </S.CopyText>

          <S.PolicyLinks>
            <a href="#">นโยบายความเป็นส่วนตัว</a>
            <a href="#">ข้อกำหนด และนโยบาย</a>
          </S.PolicyLinks>
        </S.BottomBar>
      </S.Container>
    </S.FooterWrapper>
  );
};

export default Footer;
