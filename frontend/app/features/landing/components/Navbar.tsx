/* eslint-disable jsx-a11y/alt-text */
"use client";
import {
  SquaresFour,
  ImageSquare,
  ClipboardText,
  ShoppingCart,
  UserCircle,
  MagnifyingGlass,
  Image,
  DotsThree,
} from "phosphor-react";
import * as S from "../styles/Navbar.styles";

export const Navbar = () => {
  return (
    <S.Header>
      <S.Container>
        <S.Logo>
          <span>❖</span> XSURFACE
        </S.Logo>

        <S.SearchWrapper>
          <S.SearchIconLeft>
            <MagnifyingGlass size={18} />
          </S.SearchIconLeft>
          <S.SearchInput placeholder="ค้นหาสินค้า" />
          <S.ImageSearchBtn>
            <Image size={18} /> ค้นหาด้วยรูป
          </S.ImageSearchBtn>
        </S.SearchWrapper>

        <S.MenuGroup>
          <S.MenuItem>
            <SquaresFour size={28} />
            คอลเลคชั่น
          </S.MenuItem>
          <S.MenuItem>
            <ImageSquare size={28} />
            แมททีเรียลอัลบั้ม
          </S.MenuItem>
          <S.MenuItem>
            <ClipboardText size={28} />
            แมททีเรียลบอร์ด
          </S.MenuItem>
          <S.MenuItem>
            <ShoppingCart size={28} />
            ตะกร้า
          </S.MenuItem>
          <S.MenuItem>
            <UserCircle size={28} />
            โปรไฟล์
          </S.MenuItem>
          <S.LoginButton>Log in</S.LoginButton>
          <DotsThree size={32} />
        </S.MenuGroup>
      </S.Container>
    </S.Header>
  );
};

export default Navbar;
