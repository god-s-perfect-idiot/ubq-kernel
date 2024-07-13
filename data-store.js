/* Data store synchronises data with local storage */

function commit(key, state) {
  if (typeof window !== "undefined")
    localStorage.setItem(key, JSON.stringify(state));
}

function load(key) {
  if (typeof window !== "undefined")
    return JSON.parse(localStorage.getItem(key));
  return null;
}

module.exports = { commit, load };
