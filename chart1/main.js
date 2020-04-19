window.onload = function () {

    const getData = () => {
        fetch('http://api.tvmaze.com/shows/431?embed[]=episodes&embed[]=cast')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                guntherChart(json);
            });
    };

    const guntherChart = (json) => {
        let gunther =  json._embedded.episodes.filter(episodes => episodes.summary.includes('Gunther')).length;
        let other = json._embedded.episodes.length - gunther;

        c3.generate({
            bindto: "#chart1",
            data: {
                columns: [
                    ['Gunther Episodes', gunther],
                    ['All Other Episodes', other],
                ],
                type: 'pie'
            }
        });

    };

    getData();
};