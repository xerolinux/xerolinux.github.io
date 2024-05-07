document.addEventListener('DOMContentLoaded', function() {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        if (links[i].hostname !== window.location.hostname) {
            links[i].setAttribute('target', '_blank');
            links[i].setAttribute('rel', 'noopener noreferrer');
        }
    }
});