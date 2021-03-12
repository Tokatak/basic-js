const CustomError = require( "../extensions/custom-error" );

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample( sample ) {

    let parsed = parseFloat( sample);
    if ( !sample || typeof ( sample ) != "string" || sample < 0 || isNaN( parsed ) || sample > 15 || parsed === 0 )
        return false;

    return Math.ceil( -HALF_LIFE_PERIOD * Math.log2( parsed / MODERN_ACTIVITY ) );
};
