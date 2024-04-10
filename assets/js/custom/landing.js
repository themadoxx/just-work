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
        // Définissez ici les caractéristiques propres à chaque sous-type
        const features = {
            "Oreillers en duvet Confort": [
                "Duvet Downproof 100% coton",
                "Confort exceptionnel",
                "Souplesse et maintien"
            ],
            "Oreillers en Microfibres": [
                "Microfibre de haute qualité pour une douceur optimale",
                "Support souple adapté à toutes les positions de sommeil",
                "Facile d'entretien et durable"
            ],
            "Couettes mi-saison en Duvet": [
                "Remplissage en duvet pour une chaleur naturelle",
                "Légèreté et confort toute l'année",
                "Respirabilité supérieure pour éviter l'accumulation d'humidité"
            ],
            "Couettes en Microfibres": [
                "Isolation thermique sans l'excès de poids",
                "Toucher doux et enveloppant",
                "Hypoallergénique et anti-acarien"
            ],
            "Sur-Matelas en Duvet": [
                "Couche supérieure en duvet pour un confort de sommeil de luxe",
                "Améliore le soutien et prolonge la durée de vie de votre matelas",
                "Régulation thermique pour une température de sommeil idéale"
            ],
            "Sur-Matelas en Microfibres": [
                "Confort amélioré grâce à une couche supplémentaire de soutien",
                "Microfibre respirante pour un sommeil frais",
                "Facile à installer et à entretenir"
            ]
        };
        

        let taillesHtml = '<h3>Tailles Disponibles</h3>';
        let infoHtml = `<h3>Info sur ${subType}</h3>`;

        
    // Utilisez les caractéristiques propres à chaque sous-type
    const subTypeFeatures = features[subType];
    if (subTypeFeatures && subTypeFeatures.length > 0) {
        subTypeFeatures.forEach(feature => {
            infoHtml += `<span class="badge badge-primary m-1">${feature}</span>`;
        });
    }

    const tailles = {
        "Oreillers en duvet Confort": [
            "50/70",
            "50/90",
            "60/60",
            "Tailles sur demande"
        ],
        "Oreillers en Microfibres": [
            "50/70",
            "50/90",
            "60/60",
            "Tailles sur demande"
        ],
        "Couettes mi-saison en Duvet": [
            "170x230",
            "220x240",
            "240x260",
            "260x280",
            "Tailles sur demande"
        ],
        "Couettes en Microfibres": [
            "170x230",
            "220x240",
            "240x260",
            "260x280",
            "Tailles sur demande"
        ],
        "Sur-Matelas en Duvet": [
            "170x230",
            "220x240",
            "240x260",
            "260x280",
            "Tailles sur demande"
        ],
        "Sur-Matelas en Microfibres": [
            "170x230",
            "220x240",
            "240x260",
            "260x280",
            "Tailles sur demande"
        ]
    };

   
    const selectedTailles = tailles[subType];
    if (selectedTailles) {
        selectedTailles.forEach(taille => {
            const badgeClass = taille === "Tailles sur demande" ? "badge-light-success" : "badge-light-primary";
            taillesHtml += `<span class="badge ${badgeClass}">${taille}</span> `;
        });
    }
    taillesHtml += '</div>';

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
