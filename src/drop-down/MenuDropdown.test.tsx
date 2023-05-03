import { render, fireEvent } from "@testing-library/react";
import MenuDropdownHeadless from "./MenuDropdownHeadless";
import { vi } from 'vitest'

describe("MenuDropdown", () => {
  const items = [
    { name: "Vue" },
    { name: "Svelte" },
    { name: "React" },
    { name: "Angular"}
  ];

  it("renders the dropdown button text", () => {
    const { getByText } = render(
      <MenuDropdownHeadless items={items} onSelect={() => {}} />
    );
    expect(getByText("Options")).toBeTruthy();
  });

  it("renders the dropdown menu when clicking the button", () => {
    const { getByText, queryByText } = render(
      <MenuDropdownHeadless items={items} onSelect={() => {}} />
    );
    const button = getByText("Options");
    fireEvent.click(button);
    expect(queryByText("Vue")).toBeTruthy();
    expect(queryByText("Svelte")).toBeTruthy();
    expect(queryByText("Angular")).toBeTruthy();
  });

  it("calls the onSelect callback with the selected item", () => {
    const onSelectMock = vi.fn();
    const { getByText, queryByText } = render(
      <MenuDropdownHeadless items={items} onSelect={onSelectMock} />
    );
    const button = getByText("Options");
    fireEvent.click(button);
    const item = getByText("Svelte");
    fireEvent.click(item);
    expect(onSelectMock).toHaveBeenCalledWith({ name: "Svelte" });
  });
});