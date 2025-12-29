"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ReqRegister } from "../auth.type";
import { authService } from "../auth.service";
import * as S from "../styles/RegisterForm.style";

const RegisterForm = () => {
  const router = useRouter();
  const [form, setForm] = useState<ReqRegister>({
    name: "",
    email: "",
    age: 0,
    telephone: "",
    password: "",
  });
  const [confirmPassword, setConformPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangeTelephone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setForm({ ...form, telephone: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (form.password !== confirmPassword) {
      setError("Password do not match!");
      return;
    }

    if (form.telephone.length !== 10) {
      setError("Telephone number must be 10 digits");
      return;
    }

    try {
      await authService.register(form);
      alert("Register Success! Please Login.");
      router.push("/login");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
  };
  return (
    <S.Container>
      <S.Title>Create Account</S.Title>
      {error && <S.ErrorText>{error}</S.ErrorText>}

      <form onSubmit={handleSubmit}>
        <S.Input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <S.Input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <S.Input
          type="number"
          placeholder="Age"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: Number(e.target.value) })}
          required
        />
        <S.Input
          type="tel"
          placeholder="Telephone number (Digits only)"
          value={form.telephone}
          maxLength={10}
          onChange={handleChangeTelephone}
          required
        />
        <S.Input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <S.Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConformPassword(e.target.value)}
          style={{
            borderColor:
              confirmPassword && form.password !== confirmPassword
                ? "red"
                : undefined,
          }}
          required
        />

        <S.Button type="submit">Register</S.Button>
      </form>
    </S.Container>
  );
};

export default RegisterForm;
