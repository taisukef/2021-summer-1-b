import { Server } from "./deps.js";
import { getPlace, getPlaces, test } from "./controllers/api.js";

class MyServer extends Server {
  api(path, req) {
    switch (path) {
      case "/api/test":
        return test(path);
      // no queries
      case "/api/places":
        return getPlaces();
      // with queries
      case "/api/places/":
        return getPlace(path, req);
      default:
        return;
    }
  }
}

new MyServer(8000);
