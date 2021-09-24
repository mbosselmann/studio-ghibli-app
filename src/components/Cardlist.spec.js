import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Cardlist from "./Cardlist";

describe("Cardlist", () => {
  // test data
  const filmTitle = "Castle in the Sky";
  const originalFilmTitle = "天空の城ラピュタ";
  const originalFilmTitleRomanised = "(Tenkū no shiro Rapyuta)";
  const director = "Hayao Miyazaki";
  const producer = "Isao Takahata";
  const releaseDate = "1986";
  const runningTime = "124";
  const filmId = "42";

  //tests
  it("renders", () => {
    render(
      <Router>
        <Cardlist
          filmTitle={filmTitle}
          originalFilmTitle={originalFilmTitle}
          originalFilmTitleRomanised={originalFilmTitleRomanised}
          director={director}
          producer={producer}
          releaseDate={releaseDate}
          runningTime={runningTime}
        />
      </Router>
    );

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
  });

  it("renders a listitem with correct text", () => {
    render(
      <Router>
        <Cardlist
          filmTitle={filmTitle}
          originalFilmTitle={originalFilmTitle}
          originalFilmTitleRomanised={originalFilmTitleRomanised}
          director={director}
          producer={producer}
          releaseDate={releaseDate}
          runningTime={runningTime}
        />
      </Router>
    );

    const textFilmTitle = screen.getByRole("list", { name: "film-title" });
    expect(textFilmTitle).toBeInTheDocument(
      `Film Title: ${filmTitle}`,
      `Original Film Title: ${originalFilmTitle}`,
      `(${originalFilmTitleRomanised})`
    );

    const textFilmDetails = screen.getByRole("list", { name: "film-content" });
    expect(textFilmDetails).toBeInTheDocument(
      `Director: ${director}`,
      `Producer: ${producer}`,
      `Release Date: ${releaseDate}`,
      `Running Time: ${runningTime} mins`
    );
  });

  it("displays emoji", () => {
    render(
      <Router>
        <Cardlist />
      </Router>
    );

    const emoji = screen.getByText("🎬");
    expect(emoji).toBeInTheDocument();
  });

  it("calls the correct link", () => {
    render(
      <Router>
        <Cardlist id={filmId} />
      </Router>
    );

    const correctLink = screen.getByRole("link");
    expect(correctLink).toBeInTheDocument(`/films/${filmId}`);
  });
});
