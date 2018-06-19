/**
 * Main script.
 */
(function () {
    /**
     * Updates the payment link with relevant additional client info.
     */
    function updateLink () {
        const p = new URLSearchParams(window.location.search);
        const a = document.querySelector('#payment-options [href^="https://www.paypal.com/cgi-bin/webscr"]');
        let qs = new URLSearchParams(a.search);
        qs.set('custom', p.get('custom') || '');
        const url = a.protocol + "//" + a.host + a.pathname + "?" + qs.toString();
        a.setAttribute('href', url);
    }
    document.addEventListener('DOMContentLoaded', updateLink);
})()
