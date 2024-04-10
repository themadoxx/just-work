"use strict";var KTLandingPage={init:function(){}};"undefined"!=typeof module&&(module.exports=KTLandingPage),KTUtil.onDOMContentLoaded((function(){KTLandingPage.init()}));

document.addEventListener('DOMContentLoaded', () => {
    const subProductContainer = document.querySelector('.sub-product-container');
    const infoContainer = document.querySelector('.info-container');
    
    // Fonction pour créer des boutons de sous-types
    function createSubTypeButtons(productType) {
        const subTypes = {
            oreillers: ['Oreillers en duvet Confort', 'Oreillers en Microfibres'],
            couettes: ['Couettes mi-saison en Duvet', 'Couettes en Microfibres'],
            surmatelas: ['Sur-Matelas en Duvet', 'Sur-Matelas en Microfibres']
        };
        
        return subTypes[productType].map(subType => 
            `<button class="btn btn-sm btn-flex btn-light btn-active-light-primary fw-bold sub-product-button" data-sub-product="${subType}">${subType}</button>`
        ).join('');
    }
    
    // Fonction pour afficher les infos et tailles de sous-types
    function displaySubProductInfo(subType) {
        let taillesHtml = '<h3>Tailles Disponibles</h3>';
        let infoHtml = `<h3>Info sur ${subType}</h3>`;
        
        if (subType.includes('Oreillers')) {
            taillesHtml += `
                <span class="badge badge-light-primary">50/70</span>
                <span class="badge badge-light-primary">50/90</span>
                <span class="badge badge-light-primary">60/60</span>
                <span class="badge badge-light-success">Tailles sur demande</span>
            `;
            infoHtml += `
            <span class="badge badge-primary">Duvet Downproof 100% coton</span>
            <span class="badge badge-primary">Confort </span>
            <span class="badge badge-primary">Souplesse </span>
            `;
        } else {
            taillesHtml += `
                <span class="badge badge-light-primary">170x230</span>
                <span class="badge badge-light-primary">220x240</span>
                <span class="badge badge-light-primary">240x260</span>
                <span class="badge badge-light-primary">260x280</span>
                <span class="badge badge-light-success">Tailles sur demande</span>
            `;
            infoHtml += `
                <span class="badge badge-primary">Confort</span>
                <span class="badge badge-primary">Souplesse </span>
            `;
        }

        document.getElementById('tailles').innerHTML = taillesHtml;
        infoContainer.querySelector('.garnissage').innerHTML = infoHtml;
    }
    
    // Gestionnaire d'événements pour les boutons de types de produits
    document.querySelectorAll('.product-button').forEach(button => {
        button.addEventListener('click', function() {
            const productType = this.getAttribute('data-product');
            subProductContainer.innerHTML = createSubTypeButtons(productType);
            subProductContainer.style.display = 'flex';
            infoContainer.style.display = 'none'; // Cache les infos jusqu'à la sélection d'un sous-type
        });
    });
    
    // Gestionnaire d'événements délégué pour les boutons de sous-types (nécessite que les boutons existent dans le DOM)
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('sub-product-button')) {
            const subType = event.target.getAttribute('data-sub-product');
            displaySubProductInfo(subType);
            infoContainer.style.display = 'block';
        }
    });
});
