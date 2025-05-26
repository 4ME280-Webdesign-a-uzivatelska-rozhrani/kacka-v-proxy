export default {
  async fetch(request) {
    const auth = request.headers.get("Authorization");
    const expected = "Basic " + btoa("user:heslo"); // nahraď reálným heslem

    if (auth !== expected) {
      return new Response("Unauthorized", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="wishlist"',
        },
      });
    }

    // Přepošli request na GitHub Pages
    const url = new URL(request.url);
    url.hostname = "USERNAME.github.io"; // změň na svoje GitHub Pages URL
    return fetch(url.toString(), request);
  }
};
