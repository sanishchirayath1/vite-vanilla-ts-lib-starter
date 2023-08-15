export class HttpClient {
  static async get<T>(url: string, config?: RequestInit) {
    if (!url) {
      return Promise.reject(new Error("URL is required"));
    }

    const modConfig = {
      ...config,
      method: "GET",
    };

    const res = await fetch(url, modConfig);
    const data = await res.json();
    return {
      data: data as T,
      status: res.status,
      statusText: res.statusText,
    };
  }
  static async post(url: string, config?: RequestInit) {
    if (!url) {
      return Promise.reject(new Error("URL is required"));
    }

    const modConfig = {
      ...config,
      method: "POST",
    };

    const res = await fetch(url, modConfig);
    const data = await res.json();
    return {
      data: data,
      status: res.status,
      statusText: res.statusText,
    };
  }
  static async put(url: string, config?: RequestInit) {
    if (!url) {
      return Promise.reject(new Error("URL is required"));
    }

    const modConfig = {
      ...config,
      method: "PUT",
    };

    const res = await fetch(url, modConfig);
    const data = await res.json();

    return {
      data: data,
      status: res.status,
      statusText: res.statusText,
    };
  }
  static async patch(url: string, config?: RequestInit) {
    if (!url) {
      return Promise.reject(new Error("URL is required"));
    }

    const modConfig = {
      ...config,
      method: "PATCH",
    };

    const res = await fetch(url, modConfig);
    const data = await res.json();

    return {
      data: data,
      status: res.status,
      statusText: res.statusText,
    };
  }
  static async delete(url: string, config?: RequestInit) {
    if (!url) {
      return Promise.reject(new Error("URL is required"));
    }

    const modConfig = {
      ...config,
      method: "DELETE",
    };

    const res = await fetch(url, modConfig);
    const data = await res.json();

    return {
      data: data,
      status: res.status,
      statusText: res.statusText,
    };
  }
}

export default HttpClient;
