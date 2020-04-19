window.onload = function () {

    const getData = () => {
        fetch('http://api.tvmaze.com/shows/431?embed[]=episodes&embed[]=cast')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                episodesChart(json);
            });
    };

    const episodesChart = (json) => {
        let seasonTally = json._embedded.episodes.reduce((sumOfEps, episodes) => {
            sumOfEps[episodes.season] = sumOfEps[episodes.season] + 1 || 1;
            return sumOfEps;
        }, {});

        c3.generate({
            bindto: '#chart2',
            padding: {
                left: 100,
            },    
            data: {
                x: 'x',
                columns: [
                    ['x', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                    ['Episode Count', seasonTally[1], seasonTally[2], seasonTally[3], seasonTally[4], seasonTally[5],
                    seasonTally[6], seasonTally[7], seasonTally[8], seasonTally[9], seasonTally[10]]
                ],
                type: 'bar',
                labels: true
            },
            axis: {
                x: {
                    type: 'category'
                }
            },
        });
    };

    getData();
};