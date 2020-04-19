window.onload = function () {

    const getData = () => {
        fetch('http://api.tvmaze.com/shows/431?embed[]=episodes&embed[]=cast')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                yearlyEpisodesChart(json);
            });
    };

    const yearlyEpisodesChart = (json) => {
        let ninety41 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('1994') && (episodes.airdate.includes('01-') || episodes.airdate.includes('02-') || episodes.airdate.includes('03-'))).length;
        let ninety42 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('1994')&& (episodes.airdate.includes('04-') || episodes.airdate.includes('05-') || episodes.airdate.includes('06-'))).length;
        let ninety43 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('1994')&& (episodes.airdate.includes('07-') || episodes.airdate.includes('08-') || episodes.airdate.includes('09-'))).length;
        let ninety44 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('1994')&& (episodes.airdate.includes('10-') || episodes.airdate.includes('11-') || episodes.airdate.includes('12-'))).length;

        let ninety51 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('1995') && (episodes.airdate.includes('01-') || episodes.airdate.includes('02-') || episodes.airdate.includes('03-'))).length;
        let ninety52 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('1995')&& (episodes.airdate.includes('04-') || episodes.airdate.includes('05-') || episodes.airdate.includes('06-'))).length;
        let ninety53 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('1995')&& (episodes.airdate.includes('07-') || episodes.airdate.includes('08-') || episodes.airdate.includes('09-'))).length;
        let ninety54 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('1995')&& (episodes.airdate.includes('10-') || episodes.airdate.includes('11-') || episodes.airdate.includes('12-'))).length;

        let ninety61 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('1996') && (episodes.airdate.includes('01-') || episodes.airdate.includes('02-') || episodes.airdate.includes('03-'))).length;
        let ninety62 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('1996')&& (episodes.airdate.includes('04-') || episodes.airdate.includes('05-') || episodes.airdate.includes('06-'))).length;
        let ninety63 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('1996')&& (episodes.airdate.includes('07-') || episodes.airdate.includes('08-') || episodes.airdate.includes('09-'))).length;
        let ninety64 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('1996')&& (episodes.airdate.includes('10-') || episodes.airdate.includes('11-') || episodes.airdate.includes('12-'))).length;

        let ninety71 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('1997') && (episodes.airdate.includes('01-') || episodes.airdate.includes('02-') || episodes.airdate.includes('03-'))).length;
        let ninety72 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('1997')&& (episodes.airdate.includes('04-') || episodes.airdate.includes('05-') || episodes.airdate.includes('06-'))).length;
        let ninety73 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('1997')&& (episodes.airdate.includes('07-') || episodes.airdate.includes('08-') || episodes.airdate.includes('09-'))).length;
        let ninety74 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('1997')&& (episodes.airdate.includes('10-') || episodes.airdate.includes('11-') || episodes.airdate.includes('12-'))).length;

        let ninety81 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('1998') && (episodes.airdate.includes('01-') || episodes.airdate.includes('02-') || episodes.airdate.includes('03-'))).length;
        let ninety82 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('1998')&& (episodes.airdate.includes('04-') || episodes.airdate.includes('05-') || episodes.airdate.includes('06-'))).length;
        let ninety83 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('1998')&& (episodes.airdate.includes('07-') || episodes.airdate.includes('08-') || episodes.airdate.includes('09-'))).length;
        let ninety84 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('1998')&& (episodes.airdate.includes('10-') || episodes.airdate.includes('11-') || episodes.airdate.includes('12-'))).length;

        let ninety91 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('1999') && (episodes.airdate.includes('01-') || episodes.airdate.includes('02-') || episodes.airdate.includes('03-'))).length;
        let ninety92 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('1999')&& (episodes.airdate.includes('04-') || episodes.airdate.includes('05-') || episodes.airdate.includes('06-'))).length;
        let ninety93 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('1999')&& (episodes.airdate.includes('07-') || episodes.airdate.includes('08-') || episodes.airdate.includes('09-'))).length;
        let ninety94 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('1999')&& (episodes.airdate.includes('10-') || episodes.airdate.includes('11-') || episodes.airdate.includes('12-'))).length;

        let oh01 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('2000') && (episodes.airdate.includes('01-') || episodes.airdate.includes('02-') || episodes.airdate.includes('03-'))).length;
        let oh02 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('2000')&& (episodes.airdate.includes('04-') || episodes.airdate.includes('05-') || episodes.airdate.includes('06-'))).length;
        let oh03 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('2000')&& (episodes.airdate.includes('07-') || episodes.airdate.includes('08-') || episodes.airdate.includes('09-'))).length;
        let oh04 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('2000')&& (episodes.airdate.includes('10-') || episodes.airdate.includes('11-') || episodes.airdate.includes('12-'))).length;

        let oh11 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('2001') && (episodes.airdate.includes('01-') || episodes.airdate.includes('02-') || episodes.airdate.includes('03-'))).length;
        let oh12 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('2001')&& (episodes.airdate.includes('04-') || episodes.airdate.includes('05-') || episodes.airdate.includes('06-'))).length;
        let oh13 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('2001')&& (episodes.airdate.includes('07-') || episodes.airdate.includes('08-') || episodes.airdate.includes('09-'))).length;
        let oh14 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('2001')&& (episodes.airdate.includes('10-') || episodes.airdate.includes('11-') || episodes.airdate.includes('12-'))).length;

        let oh21 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('2002') && (episodes.airdate.includes('01-') || episodes.airdate.includes('02-') || episodes.airdate.includes('03-'))).length;
        let oh22 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('2002')&& (episodes.airdate.includes('04-') || episodes.airdate.includes('05-') || episodes.airdate.includes('06-'))).length;
        let oh23 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('2002')&& (episodes.airdate.includes('07-') || episodes.airdate.includes('08-') || episodes.airdate.includes('09-'))).length;
        let oh24 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('2002')&& (episodes.airdate.includes('10-') || episodes.airdate.includes('11-') || episodes.airdate.includes('12-'))).length;

        let oh31 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('2003') && (episodes.airdate.includes('01-') || episodes.airdate.includes('02-') || episodes.airdate.includes('03-'))).length;
        let oh32 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('2003')&& (episodes.airdate.includes('04-') || episodes.airdate.includes('05-') || episodes.airdate.includes('06-'))).length;
        let oh33 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('2003')&& (episodes.airdate.includes('07-') || episodes.airdate.includes('08-') || episodes.airdate.includes('09-'))).length;
        let oh34 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('2003')&& (episodes.airdate.includes('10-') || episodes.airdate.includes('11-') || episodes.airdate.includes('12-'))).length;

        let oh41 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('2004') && (episodes.airdate.includes('01-') || episodes.airdate.includes('02-') || episodes.airdate.includes('03-'))).length;
        let oh42 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('2004')&& (episodes.airdate.includes('04-') || episodes.airdate.includes('05-') || episodes.airdate.includes('06-'))).length;
        let oh43 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('2004')&& (episodes.airdate.includes('07-') || episodes.airdate.includes('08-') || episodes.airdate.includes('09-'))).length;
        let oh44 = json._embedded.episodes.filter(episodes => episodes.airdate.includes('2004')&& (episodes.airdate.includes('10-') || episodes.airdate.includes('11-') || episodes.airdate.includes('12-'))).length;

        c3.generate({
            bindto: "#chart4",
            data: {
                x: 'x',
                columns: [
                    ['x', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004'],
                    ['Jan - Mar', ninety41, ninety51, ninety61, ninety71, ninety81, ninety91, oh01, oh11, oh21, oh31, oh41],
                    ['Apr - Jun', ninety42, ninety52, ninety62, ninety72, ninety82, ninety92, oh02, oh12, oh22, oh32, oh42],
                    ['Jul - Sep', ninety43, ninety53, ninety63, ninety73, ninety83, ninety93, oh03, oh13, oh23, oh33, oh43],
                    ['Oct - Dec', ninety44, ninety54, ninety64, ninety74, ninety84, ninety94, oh04, oh14, oh24, oh34, oh44]
                ],
                type: 'bar',
                groups: [
                    ['Jan - Mar', 'Apr - Jun', 'Jul - Sep', 'Oct - Dec']
                ]
            },
            axis: {
                x: {
                    type: 'category'
                }
            }
        });
        
    };

    getData();
};