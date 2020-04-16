// Eric Lau, Yaru Luo -- YikEs
// SoftDev2 pd1
// K18 -- Come Up For Air
// 2020-04-21

let created = false;

let visualization = document.getElementById('visualization')

let decade = 1950;

let somethingElse;

const getData = async() => {
    // dates = ARRAY ["1960", "1961", "1965", "1966", "1966", "1968", "1968",...]
    somethingElse = await getData();
    console.log( somethingElse);
    let data = await d3.csv( "static/csv/scrubbed.csv");
    let dates = [];
    let UFOstates = [];
    for( index = 0;
	 index < data.length;
	 index++){
	let country = data[ index][ 'country'];
	let date = data[ index][ 'datetime'];
	let state = data[ index][ 'state'];
	let thisDate = date.substring( date.indexOf( " ") - 4, date.indexOf( " "))
	if( country == "us" && thisDate >= "1950"){
	    dates.push( thisDate);
	    UFOstates.push( state);
	}
    }
    console.log( dates);
    console.log( UFOstates);

    let states = { "AL": "Alabama", "AK": "Alaska", "AS": "American Samoa", "AZ": "Arizona", "AR": "Arkansas", "CA": "California", "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware", "DC": "District Of Columbia", "FM": "Federated States Of Micronesia", "FL": "Florida", "GA": "Georgia", "GU": "Guam", "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa", "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MH": "Marshall Islands", "MD": "Maryland", "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi", "MO": "Missouri", "MT": "Montana", "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico", "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "MP": "Northern Mariana Islands", "OH": "Ohio", "OK": "Oklahoma", "OR": "Oregon", "PW": "Palau", "PA": "Pennsylvania", "PR": "Puerto Rico", "RI": "Rhode Island", "SC": "South Carolina", "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VT": "Vermont", "VI": "Virgin Islands", "VA": "Virginia", "WA": "Washington", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming" };
    for (const state in states) {
        states[state.toLowerCase()] = states[state];
        delete states[state];
    }

    let stateData = new Object();
    for(let i = 1950; i < 2020; i+=10) {
        stateData[String(i)] = new Object();
        for(const state in states) {
            stateData[String(i)][states[state]] = 0;
        }
    }

    console.log(stateData);

    console.log(states);

    for( index = 0;
    	 index < dates.length;
    	 index++){
    	let currentDecade = dates[ index].substring( 0, 3)+'0';
    	let currentAbb = UFOstates[ index];
	let currentState = states[ currentAbb];
	stateData[ currentDecade][ currentState] += 1;
    }
    console.log( stateData);

    return stateData;
};

document.getElementById('render-button').addEventListener('click', () => {
    if (!created) {
        let svg = createSVG();
        render(svg);
        created = true;
    }
    window.scrollTo(0, visualization.offsetTop);
});

const createSVG = () => {
    visualization.innerHTML += `
        <div class="container-fluid vh-100">
            <div class="col">
                <div class="row py-5 justify-content-center align-items-center">
                    <div class="h2"><b>Decade: <span id="decade">${decade}</span>s<b></div>
                </div>
                <div class="row justify-content-center align-items-center pb-2" id="svg-container">
                </div>
                <div class="row d-flex justify-content-between pt-5">
                <div class="h3 px-5 button" id="previous"><b>&#9664; Previous Decade</b></div>
                <div class="h3 px-5 button" id="next"><b>Next Decade &#9654;</b></div>
                </div>
            </div>
        </div>`
    return d3.select('#svg-container').append('svg')
        .attr("viewBox", [0, 0, 975, 610])
        .attr("width", "60%");
};

const render = async (svg) => {
    let us = await d3.json('static/json/states-albers-10m.json');

    svg.append("g")
        .selectAll("path")
        .data(topojson.feature(us, us.objects.states).features)
        .join("path")
        .attr("fill", ( d) => {
	    console.log( d);
	    let stateName = d[ 'properties'][ 'name'];
	    console.log( somethingElse);
	    console.log( String( decade));
	    let numOfSightings = data[ String( decade)][ stateName];
	    console.log( numOfSightings);
	    return 'red';
	})
        .attr("d", d3.geoPath());
    // console.log( us.objects.states);
};

const getThing = async( svg) => {
    let data = await d3.csv( "static/csv/scrubbed.csv");
    console.log( data[ 0]);
}

