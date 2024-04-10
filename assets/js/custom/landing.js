"use strict";var KTLandingPage={init:function(){}};"undefined"!=typeof module&&(module.exports=KTLandingPage),KTUtil.onDOMContentLoaded((function(){KTLandingPage.init()}));

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn.btn-sm.btn-flex.btn-secondary.fw-bold').forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            const taillesContainer = document.getElementById('tailles');
            let taillesHtml = '<h3>Tailles Disponibles</h3>';

            if (product === 'oreillers') {
                taillesHtml += `
                <span class="badge badge-light-primary">50/70</span>
                <span class="badge badge-light-primary">50/90</span>
                <span class="badge badge-light-primary">60/60</span>
                <span class="badge badge-light-success">Tailles sur demande</span>
                 `;
            } else { // Couettes et Sur-Matelas partagent les mêmes tailles
                taillesHtml += `
                <span class="badge badge-light-primary">170x230</span>
                <span class="badge badge-light-primary">220x240</span>
                <span class="badge badge-light-primary">240x260</span>
                <span class="badge badge-light-primary">260x280</span>
                <span class="badge badge-light-success">Tailles sur demande</span>
                `;
            }

            taillesContainer.innerHTML = taillesHtml;
        });
    });
});
