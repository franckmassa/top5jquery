// On utilise le raccourci d'écriture de $(document).ready(function(){function name(parameters) { }); 
$(function() {
// On déclare la variable $mainMenuItems et on y stocke tous les éléments li enfants de la liste non ordonnée du menu principal
    var $mainMenuItems = $('#main-menu ul').children('li'),
            // On déclare la variable totalMainMenuItems et on y stocke le nombre d'éléments que la propriété length retourns
            totalMainMenuItems = $mainMenuItems.length,
            // la valeur -1 correspondra à l'affichage initial, c'est à dire juste les phpotos sans les descriptions visibles
            openedIndex = -1
    ,
            // On initialise la fonction init
            init = function() {
            // On rattache le click aux images de tous les enfants qui ont la class .images
            $mainMenuItems.children('.images').click(function() {
            /* On déclare une variable var newIndex et y on stocke l'index du parent de l'image (élément) sur 
             * laquelle on a cliqué.
             * $(this) se rapporte à l'élément sur lequel on a cliqué
             */
            var newIndex = $(this).parent().index(),
                    // On déclare la variable $item et on y rattache l'index du parent
                    $item = $mainMenuItems.eq(newIndex);
                    animateItem($item, true, 250);
                    openedIndex = newIndex;
            });
            },
                    // On initialise la fonction animate
                    animateItem = function($item, toOpen, speed) {
                    var $colorImage = $item.find('.color'),
                            // Si on ouvre, la largeur de l'item passe à 420px sinon la largeur passe à 140px
                            itemParam = toOpen ? {width: '420px'}:{width: '140px'},
                            /* Si on ouvre, l'item couleur sera placé à 0px de la gauche pour le voir, 
                             * sinon il sera placé à 140px de la gauche pour le cacher
                             */
                            colorImageParam = toOpen ? {left: '0px'}:{left: '140px'};
                            $colorImage.animate(colorImageParam, speed);
                            $item.animate(itemParam, speed);
                    };
            // On utilise la fonction init()
            init();
        });