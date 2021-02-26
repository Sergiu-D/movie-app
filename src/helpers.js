//replace [] enclosed parameters in an URI string
const replaceParams = (u, p) => {
  let r = u;
  let qs = [];
  for (let k of p) {
    qs.push(`${k}=${p[k]}`);
  }
  //append API KEY
  qs.push(`&api_key=${process.env.REACT_APP_API_KEY}`);

  r = `${r}?${qs.join("&")}`;
  console.log(`Fetching ${r}`);
  return r;
};

const getKeyParam = () => `api_key=${process.env.REACT_APP_API_KEY}`;
const getAPIBaseURL = () => `${process.env.REACT_APP_API_BASE_URL}`;

export { replaceParams };
export { getKeyParam };
export { getAPIBaseURL };
