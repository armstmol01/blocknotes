/**
 * Uses the Apple music api to create wall of top songs
 */
"use strict";
(function() {
  const URL = "https://api.spotify.com/v1";

  /**
   * Called when an error occurs in the fetch call chain
   * Displays a message to the user that an error has occured
   * and reenables the "Restart button"
   * @param {*} err the err details of the request
   */
  function handleError(err) {
  }

  /**
   * Checks the status of the API response from the fetch call
   * @param {*} res response
   * @return {object} res response object from API
   */
  async function checkStatus(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  /**
   * Returns the DOM object with the given id attribute.
   * @param {string} id - element ID
   * @returns {object} DOM object associated with id (null if not found).
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the newly created DOM object with the given tag name.
   * @param {string} tagName - element tag
   * @returns {object} DOM object with tag name
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
})();