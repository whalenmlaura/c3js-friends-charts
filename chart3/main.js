window.onload = function () {

    const getData = () => {
        fetch('http://api.tvmaze.com/shows/431?embed[]=episodes&embed[]=cast')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                characterChart(json);
            });
    };

    const characterChart = (json) => {
        let chandler = json._embedded.episodes.filter(episodes => episodes.name.includes('Chandler') || episodes.summary.includes('Chandler'))
            .reduce((sumOfEps, episodes) => {
                sumOfEps[episodes.season] = sumOfEps[episodes.season] + 1 || 1;
                return sumOfEps;
            }, {});

        let joey = json._embedded.episodes.filter(episodes => episodes.name.includes('Joey') || episodes.summary.includes('Joey'))
            .reduce((sumOfEps, episodes) => {
                sumOfEps[episodes.season] = sumOfEps[episodes.season] + 1 || 1;
                return sumOfEps;
            }, {});

        let monica = json._embedded.episodes.filter(episodes => episodes.name.includes('Monica') || episodes.summary.includes('Monica'))
            .reduce((sumOfEps, episodes) => {
                sumOfEps[episodes.season] = sumOfEps[episodes.season] + 1 || 1;
                return sumOfEps;
            }, {});

        let phoebe = json._embedded.episodes.filter(episodes => episodes.name.includes('Phoebe') || episodes.summary.includes('Phoebe'))
            .reduce((sumOfEps, episodes) => {
                sumOfEps[episodes.season] = sumOfEps[episodes.season] + 1 || 1;
                return sumOfEps;
            }, {});

        let rachel = json._embedded.episodes.filter(episodes => episodes.name.includes('Rachel') || episodes.summary.includes('Rachel'))
            .reduce((sumOfEps, episodes) => {
                sumOfEps[episodes.season] = sumOfEps[episodes.season] + 1 || 1;
                return sumOfEps;
            }, {});

        let ross = json._embedded.episodes.filter(episodes => episodes.name.includes('Ross') || episodes.summary.includes('Ross'))
            .reduce((sumOfEps, episodes) => {
                sumOfEps[episodes.season] = sumOfEps[episodes.season] + 1 || 1;
                return sumOfEps;
            }, {});

        let chart = c3.generate({
            bindto: "#chart3",
            data: {
                x: 'x',
                columns: [
                    ['x', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                    ['Chandler', chandler[1], chandler[2], chandler[3], chandler[4], chandler[5],
                        chandler[6], chandler[7], chandler[8], chandler[9], chandler[10]],
                ]
            }
        });

        setTimeout(function () {
            chart.load({
                columns: [
                    ['Joey', joey[1], joey[2], joey[3], joey[4], joey[5],
                        joey[6], joey[7], joey[8], joey[9], joey[10]],
                ]
            });
        }, 1500);

        setTimeout(function () {
            chart.load({
                columns: [
                    ['Monica', monica[1], monica[2], monica[3], monica[4], monica[5],
                        monica[6], monica[7], monica[8], monica[9], monica[10]],
                ]
            });
        }, 3000);

        setTimeout(function () {
            chart.load({
                columns: [
                    ['phoebe', phoebe[1], phoebe[2], phoebe[3], phoebe[4], phoebe[5],
                        phoebe[6], phoebe[7], phoebe[8], phoebe[9], phoebe[10]],
                ]
            });
        }, 4500);

        setTimeout(function () {
            chart.load({
                columns: [
                    ['Rachel', rachel[1], rachel[2], rachel[3], rachel[4], rachel[5],
                        rachel[6], rachel[7], rachel[8], rachel[9], rachel[10]],
                ]
            });
        }, 6000);

        setTimeout(function () {
            chart.load({
                columns: [
                    ['Ross', ross[1], ross[2], ross[3], ross[4], ross[5],
                        ross[6], ross[7], ross[8], ross[9], ross[10]],
                ]
            });
        }, 7500);

    };

    getData();
};