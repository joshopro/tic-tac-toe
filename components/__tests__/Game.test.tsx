import { render, screen, fireEvent } from "@testing-library/react";
import Game from "../Game";

describe("Tic tac toe game", () => {
  it("should renders Tic Tac Toe game", () => {
    render(<Game />);
    const board = screen.getByRole("board");
    expect(board).toBeInTheDocument();
  });

  it("should allow players to take turns", () => {
    render(<Game />);
    const cells = screen.getAllByRole("cell");
    fireEvent.click(cells[0]);
    expect(cells[0]).toHaveTextContent("X");
    fireEvent.click(cells[1]);
    expect(cells[1]).toHaveTextContent("O");
  });

  it("should detect a win", () => {
    render(<Game />);
    const cells = screen.getAllByRole("cell");
    fireEvent.click(cells[0]); // X
    fireEvent.click(cells[3]); // O
    fireEvent.click(cells[1]); // X
    fireEvent.click(cells[4]); // O
    fireEvent.click(cells[2]); // X wins
    const winnerMessage = screen.getByText(/Winner: X/i);
    expect(winnerMessage).toBeInTheDocument();
  });

  it("should detects a draw", () => {
    render(<Game />);
    const cells = screen.getAllByRole("cell");
    fireEvent.click(cells[0]); // X
    fireEvent.click(cells[1]); // O
    fireEvent.click(cells[2]); // X
    fireEvent.click(cells[4]); // O
    fireEvent.click(cells[3]); // X
    fireEvent.click(cells[5]); // O
    fireEvent.click(cells[7]); // X
    fireEvent.click(cells[6]); // O
    fireEvent.click(cells[8]); // X
    const drawMessage = screen.getByText(/It's a Draw!/i);
    expect(drawMessage).toBeInTheDocument();
  });

  it("should reset the game", () => {
    render(<Game />);
    const cells = screen.getAllByRole("cell");
    fireEvent.click(cells[0]); // X
    const resetButton = screen.getByText(/Reset/i);
    fireEvent.click(resetButton);
    cells.forEach((cell) => {
      expect(cell).toHaveTextContent("");
    });
  });
});
