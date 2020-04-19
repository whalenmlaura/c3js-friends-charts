window.onload = function () {

    const getData = () => {
        fetch('http://api.tvmaze.com/shows/431?embed[]=episodes&embed[]=cast')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                episodeKeywords(json);
            });
    };

    const episodeKeywords = (json) => {
        let fight = json._embedded.episodes.filter(episodes => episodes.summary.includes('fight') || episodes.name.includes('fight')).length;
        let love = json._embedded.episodes.filter(episodes => episodes.summary.includes('lov') || episodes.name.includes('lov')).length;
        let relationship = json._embedded.episodes.filter(episodes => episodes.summary.includes('relationship') || episodes.name.includes('relationship')).length;
        let wedding = json._embedded.episodes.filter(episodes => episodes.summary.includes('wedding') || episodes.name.includes('wedding')).length;
        let kiss = json._embedded.episodes.filter(episodes => episodes.summary.includes('kiss') || episodes.name.includes('kiss')).length;
        let mad = json._embedded.episodes.filter(episodes => episodes.summary.includes('mad') || episodes.name.includes('mad')).length;

        c3.generate({
            bindto: "#chart5",
            data: {
                columns: [
                    ['Wedding', wedding],
                    ['Love', love],
                    ['Relationship', relationship],
                    ['Kiss', kiss],
                    ['Fight', fight],
                    ['Mad', mad]
                ],
                type : 'donut'
            },
            donut: {
                title: "Keywords"
            }
        });
        
    };

    getData();
};