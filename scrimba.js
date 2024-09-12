// ==UserScript==
// @name         Run Code Scrimba
// @namespace    https://v2.scrimba.com/
// @version      0.1
// @description  Click the "Run Code" button using Alt+S shortcut
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(e) {
        // Check if Alt+S is pressed
        if (e.altKey && e.key === 's') {
            e.preventDefault(); // Prevent default Alt+S behavior

            // Find the button
            const runButton = document.querySelector('op-button[data-id="s03mg0d/run"]');

            // Click the button if found
            if (runButton) {
                runButton.click();
                console.log('Run Code button clicked via Alt+S shortcut');
            } else {
                console.log('Run Code button not found');
            }
        }
    });
})();