"use client";
import * as S from "../styles/Navbar.styles";

export const Navbar = () => {
  return (
    <S.Header>
      <S.Container>
        {/* Logo */}
        <S.Logo>
          <span>❖</span> XSURFACE
        </S.Logo>

        {/* Search Bar */}
        <S.SearchWrapper>
          <S.SearchIconLeft>🔍</S.SearchIconLeft>
          <S.SearchInput placeholder="ค้นหาสินค้า" />
          <S.ImageSearchBtn>📷 ค้นหาด้วยรูป</S.ImageSearchBtn>
        </S.SearchWrapper>

        {/* Menu Items */}
        <S.MenuGroup>
          <S.MenuItem>
            <span className="icon">🍱</span>คอลเลคชั่น
          </S.MenuItem>
          <S.MenuItem>
            <span className="icon">🧱</span>แมททีเรียลอัลบั้ม
          </S.MenuItem>
          <S.MenuItem>
            <span className="icon">📋</span>แมททีเรียลบอร์ด
          </S.MenuItem>
          <S.MenuItem>
            <span className="icon">🛒</span>ตะกร้า
          </S.MenuItem>
          <S.MenuItem>
            <span className="icon">👤</span>โปรไฟล์
          </S.MenuItem>
          <S.LoginButton>Log in</S.LoginButton>
          <div style={{ cursor: "pointer" }}>•••</div>
        </S.MenuGroup>
      </S.Container>
    </S.Header>
  );
};

export default Navbar;
