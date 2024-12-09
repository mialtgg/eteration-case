import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Sidebar from "../components/Sidebar";

// Fetch'i global olarak mock'luyoruz
global.fetch = jest.fn();

describe("Sidebar Component", () => {
  beforeEach(() => {
    // Testlerin başında fetch mock'lanıyor
    fetch.mockClear();
  });

  test("shows loading spinner while fetching brands", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ["Brand1", "Brand2"],
    });

    render(<Sidebar onChange={jest.fn()} />);
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  test("shows error message if fetch fails", async () => {
    fetch.mockRejectedValueOnce(new Error("Veriler alınamadı!"));

    render(<Sidebar onChange={jest.fn()} />);
    const errorMessage = await screen.findByTestId("error-message");
    expect(errorMessage).toHaveTextContent("Veriler alınamadı!");
  });

  test("renders brands correctly after successful fetch", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ["Brand1", "Brand2"],
    });

    render(<Sidebar onChange={jest.fn()} />);

    await waitFor(() => {
      expect(screen.getByTestId("brand-Brand1")).toBeInTheDocument();
      expect(screen.getByTestId("brand-Brand2")).toBeInTheDocument();
    });
  });

  test("updates sort option on change", () => {
    const mockOnChange = jest.fn();
    render(<Sidebar onChange={mockOnChange} />);

    const sortNewest = screen.getByTestId("sort-newest");
    fireEvent.click(sortNewest);

    expect(mockOnChange).toHaveBeenCalledWith({
      sortOption: "newest",
      selectedBrands: [],
    });
  });
});
