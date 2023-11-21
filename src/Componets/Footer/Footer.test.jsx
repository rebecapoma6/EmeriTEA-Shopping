import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  test("renders", () => {
    render(<Footer />);
    expect(screen.getByText("Politica de Privacidad")).toBeDefined();
    expect(screen.getByText("Aviso Legal")).toBeDefined();
    expect(screen.getByText("Política de Cookies")).toBeDefined();
    expect(screen.getByText("Copyright © 2019 EmeriTEA")).toBeDefined();
    expect(screen.getByText("Emerite@emeritea.com")).toBeDefined();
  });
});
