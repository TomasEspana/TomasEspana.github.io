
document.addEventListener('DOMContentLoaded', () => {
    const topicsContainer = document.getElementById('topics');
    const papersContainer = document.getElementById('papers');
    let publications = [];

    const VENUE_ORDER = [
        'ECP journal',
        'Preprint',
    ];

    function orderKey(venue) {
        if (!venue) return Number.MAX_SAFE_INTEGER;
        const idx = VENUE_ORDER.findIndex(x => x.toLowerCase() === venue.trim().toLowerCase());
        return idx === -1 ? Number.MAX_SAFE_INTEGER : idx;
    }

    // Fetch publications from JSON file
    fetch('publications.json')
        .then(response => response.json())
        .then(data => {
            publications = data;
            renderVenues(publications);
            renderPapers();
            setupVenueFiltering();
        })
        .catch(error => console.error('Error fetching publications:', error));

    function getUniqueVenues(list) {
        const set = new Set();
        list.forEach(p => { if (p.venue) set.add(p.venue); });
        return Array.from(set).sort();
    }

    function renderVenues(list) {
        const venues = getUniqueVenues(list).sort((a, b) => {
            const ka = orderKey(a);
            const kb = orderKey(b);
            if (ka !== kb) return ka - kb;
            return (a || '').localeCompare(b || '');
        });
        venues.forEach(venue => {
            const venueElement = document.createElement('div');
            venueElement.classList.add('topic');
            venueElement.innerHTML = `
                <label for="${venue}">
                    <input type="checkbox" id="${venue}" name="venue" value="${venue}">
                    ${venue}
                </label>
            `;
            topicsContainer.appendChild(venueElement);
        });
    }

    function renderPapers(selectedVenues = []) {
        papersContainer.innerHTML = '';
        const filteredPublications = publications.filter(pub =>
            selectedVenues.length === 0 || selectedVenues.includes(pub.venue)
        );

        filteredPublications.forEach(pub => {
            const paperElement = document.createElement('div');
            paperElement.classList.add('paper');

            let linksHTML = '';
            for (const [name, url] of Object.entries(pub.links)) {
                linksHTML += `[<a href="${url}">${name}</a>] `;
            }

            paperElement.innerHTML = `
                <p>
                    <b>${pub.title}</b><br>
                    ${pub.authors}<br>
                    ${pub.publication}<br>
                    ${linksHTML}
                </p>
            `;
            papersContainer.appendChild(paperElement);
        });
    }

    function setupVenueFiltering() {
        document.querySelectorAll('input[name="venue"]').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const selectedVenues = Array.from(document.querySelectorAll('input[name="venue"]:checked')).map(el => el.value);
                renderPapers(selectedVenues);
            });
        });
    }
});
