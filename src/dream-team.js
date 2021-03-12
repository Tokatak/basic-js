const CustomError = require( "../extensions/custom-error" );

module.exports = function createDreamTeam( members ) {
    if ( !Array.isArray( members ) )
        return false;

    let result = members.filter( x => typeof ( x ) === "string" ).map( x => x.trim()[ 0 ].toUpperCase() ).sort().join( "" );
    if ( result === "" )
        return false;
    return result;
};
