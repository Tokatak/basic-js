const CustomError = require( "../extensions/custom-error" );

module.exports = function transform( array ) {
    let result = [];

    let nextDiscarded = false;
    for ( let i = 0; i < array.length; i++ ) {
        switch ( array[ i ] ) {
            case "--discard-next":
                nextDiscarded = true;
                i++;
                break;
            case "--discard-prev":
                if ( nextDiscarded )
                    break;
                if ( result.length > 0 )
                    result.pop();
                break;
            case "--double-next":
                if ( i + 1 < array.length ) {
                    result.push( array[ i + 1 ] );
                }
                break;
            case "--double-prev":
                if ( nextDiscarded )
                    break;
                if ( result.length > 0 ) {
                    result.push( result[ result.length - 1 ] );
                }
                break;
            default:
                result.push( array[ i ] );
                nextDiscarded = false;
                break;
        }

    }

    return result;
};
