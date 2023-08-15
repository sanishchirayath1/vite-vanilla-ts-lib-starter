import { describe, expect, it } from "vitest";
import HttpClient from "../src/httpClient";

describe("HttpClient", () => {
  it("should be defined", () => {
    expect(HttpClient).toBeDefined();
  });

  it("should have get method", () => {
    expect(HttpClient.get).toBeDefined();
  });

  it("get should accept a url as parameter", async () => {
    await expect(HttpClient.get).rejects.toThrowError("URL is required");
  });

  it("should accept config as an optional parameter", async () => {
    await expect(
      HttpClient.get("https://jsonplaceholder.typicode.com/todos/1", {
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).resolves.toBeDefined();
  });

  it("get method should return a promise", () => {
    expect(
      HttpClient.get("https://jsonplaceholder.typicode.com/todos/1")
    ).toBeInstanceOf(Promise);
  });

  it("should have post method", () => {
    expect(HttpClient.post).toBeDefined();
  });

  it("post should accept a url as parameter", async () => {
    await expect(HttpClient.post).rejects.toThrowError("URL is required");
  });

  it("should accept config as an optional parameter", async () => {
    await expect(
      HttpClient.post("https://jsonplaceholder.typicode.com/todos/1", {
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).resolves.toBeDefined();
  });

  it("post method should return a promise", () => {
    expect(
      HttpClient.post("https://jsonplaceholder.typicode.com/todos/1")
    ).toBeInstanceOf(Promise);
  });

  it("should have put method", () => {
    expect(HttpClient.put).toBeDefined();
  });

  it("put should accept a url as parameter", async () => {
    await expect(HttpClient.put).rejects.toThrowError("URL is required");
  });

  it("should accept config as an optional parameter", async () => {
    await expect(
      HttpClient.put("https://jsonplaceholder.typicode.com/todos/1", {
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).resolves.toBeDefined();
  });

  it.skip("should have patch method", () => {
    expect(HttpClient.patch).toBeDefined();
  });

  it.skip("should have delete method", () => {
    expect(HttpClient.delete).toBeDefined();
  });
});
