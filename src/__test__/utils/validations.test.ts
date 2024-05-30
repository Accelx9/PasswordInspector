import { expect, describe, it } from "vitest";
import {
  hasNoConsecutiveLetters,
  hasNumbers,
  hasSpecialCharacters,
  hasUpperCases,
} from "../../utils/validations";

describe("string checking functions", () => {
  it("returns true if word has an upper case letter", () => {
    expect(hasUpperCases("Hi")).toBe(true);
  });

  it("returns false if word has not an upper case letter", () => {
    expect(hasUpperCases("hi")).toBe(false);
  });

  it("returns true if a word has a number in it", () => {
    expect(hasNumbers("h1 b3st b8dd9")).toBe(true);
  });

  it("returns false if a word has not a number in it", () => {
    expect(hasNumbers("hi, best buddy")).toBe(false);
  });

  it("returns true if a word has a special character in it", () => {
    const testfail = "Greetings";
    const test0 = "Greetings!";
    const test1 = "Hello, my friend";
    const text2 = "Happy_life";
    const text3 = "123¡";
    const text4 = "¿How are you?";
    const text5 = "Go/jo";
    const text6 = "Ka-shi-mo";
    const text7 = "'air quotes'";
    const text8 = '"more air quotes"';
    const text9 = "#123";
    const text10 = "123\\";
    const text11 = "123|";
    const text12 = "123$";
    const text13 = "123%";
    const text14 = "123^";
    const text15 = "123&";
    const text16 = "123*";
    const text17 = "123(";
    const text18 = "123)";
    const text19 = "123{";
    const text20 = "123}";
    const text21 = "123>";
    expect(hasSpecialCharacters(testfail)).toBe(false);
    expect(hasSpecialCharacters(test0)).toBe(true);
    expect(hasSpecialCharacters(test1)).toBe(true);
    expect(hasSpecialCharacters(text2)).toBe(true);
    expect(hasSpecialCharacters(text3)).toBe(true);
    expect(hasSpecialCharacters(text4)).toBe(true);
    expect(hasSpecialCharacters(text5)).toBe(true);
    expect(hasSpecialCharacters(text6)).toBe(true);
    expect(hasSpecialCharacters(text7)).toBe(true);
    expect(hasSpecialCharacters(text8)).toBe(true);
    expect(hasSpecialCharacters(text9)).toBe(true);
    expect(hasSpecialCharacters(text10)).toBe(true);
    expect(hasSpecialCharacters(text11)).toBe(true);
    expect(hasSpecialCharacters(text12)).toBe(true);
    expect(hasSpecialCharacters(text13)).toBe(true);
    expect(hasSpecialCharacters(text14)).toBe(true);
    expect(hasSpecialCharacters(text15)).toBe(true);
    expect(hasSpecialCharacters(text16)).toBe(true);
    expect(hasSpecialCharacters(text17)).toBe(true);
    expect(hasSpecialCharacters(text18)).toBe(true);
    expect(hasSpecialCharacters(text19)).toBe(true);
    expect(hasSpecialCharacters(text20)).toBe(true);
    expect(hasSpecialCharacters(text21)).toBe(true);
  });

  it("returns true if a word has not a special character in it", () => {
    const testWord = "this doesnt have a special character 123";
    expect(hasSpecialCharacters(testWord)).toBe(false);
  });

  it("returns true if a word has no consecutive letters", () => {
    const testWord = "n0 c0n$3c";
    expect(hasNoConsecutiveLetters(testWord)).toBe(true);
  });

  it("returns true if a word has no consecutive letters", () => {
    const testWord = "this is a consecutive letter word";
    expect(hasNoConsecutiveLetters(testWord)).toBe(false);
  });
});
