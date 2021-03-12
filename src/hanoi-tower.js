const CustomError = require( "../extensions/custom-error" );

module.exports = function calculateHanoi( disksNumber, turnsSpeedPerHour ) {
    let tps = turnsSpeedPerHour / ( 60 * 60 );
    let turns = ( 2 ** disksNumber ) - 1;
    let result = {};
    result.turns = turns;
    result.seconds = Math.floor( turns / tps );
    return result;
};
