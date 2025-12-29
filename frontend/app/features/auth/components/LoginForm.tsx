"use client";

import { useRouter } from "next/navigation";
import * as S from "../styles/LoginForm.style";
import React, { useState } from "react";
import { ReqAuth } from "../auth.type";
import { authService } from "../auth.service";
import Link from "next/link";
const LoginForm = () => {
  const router = useRouter();

  const [form, setForm] = useState<ReqAuth>({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await authService.login(form);

      // router.push('')
    } catch (err) {
      console.error(err);
      setError("Invalid username or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Container>
      <S.Title>Login</S.Title>
      {error && <S.ErrorText>{error}</S.ErrorText>}

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <S.Input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <S.Input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <S.Button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Sign In"}
        </S.Button>

        <S.RegisterLink>
          Don&apos;t have an account?{" "}
          <Link href={"/pages/register"}>Sign Up</Link>
        </S.RegisterLink>
      </form>
    </S.Container>
  );
};

export default LoginForm;
