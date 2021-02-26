import { getKeyParam, getAPIBaseURL } from "./helpers";

export default {
  fetchMovieByID: (id) =>
    fetch(`${getAPIBaseURL()}/movie/${id}?${getKeyParam()}`).then((r) =>
      r.json()
    ),
};
