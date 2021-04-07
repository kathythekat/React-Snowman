import React from "react";
import { screen, render, userEvent, waitFor } from "@testing-library/react";
import Snowman from "./Snowman";

it("hides gallows after max wrong guesses", async function() {
  const { container } = render(< Snowman />);
  let wrongButtonB = container.querySelector('#button-b')
  let wrongButtonC = container.querySelector('#button-c')
  let wrongButtonD = container.querySelector('#button-d')
  let wrongButtonF = container.querySelector('#button-f')
  let wrongButtonG = container.querySelector('#button-g')
  let wrongButtonH = container.querySelector('#button-h')
  userEvent.click(wrongButtonB)
  userEvent.click(wrongButtonC)
  userEvent.click(wrongButtonD)
  userEvent.click(wrongButtonF)
  userEvent.click(wrongButtonG)
  userEvent.click(wrongButtonH)
  
  await waitFor(() => expect(screen.queryByTestId('snowman-letter-buttons')).not.toBeInTheDocument());
})