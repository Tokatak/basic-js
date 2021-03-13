const CustomError = require( "../extensions/custom-error" );

class VigenereCipheringMachine {
    letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split( "" );

    constructor( direct ) {
        if ( direct === true || direct === undefined ) {
            this.inverse = false;
        }

        if ( direct === false ) {
            this.inverse = true;
        }
    }

    encrypt( message, key ) {
        if ( !message || !key )
            throw  "Wrong";

        message = message.toUpperCase();
        let messageLength = message.length;

        let fullKey = key.toUpperCase();
        let result = "";
        for ( let i = 0, ix = 0; i < messageLength; i++ ) {
            let messageIndex = this.letters.indexOf( message[ i ] );
            if ( messageIndex === -1 ) {
                result += message[ i ];
                continue;
            }
            let keyIndex = this.letters.indexOf( fullKey[ ix % key.length ] );
            let encreptedIndex = ( messageIndex + keyIndex ) % this.letters.length;
            result += this.letters[ encreptedIndex ];
            ix++;
        }

        if ( this.inverse ) {
            return result.split( "" ).reverse().join( "" );
        } else {
            return result;
        }
    }

    decrypt( message, key ) {
        if ( !message || !key )
            throw  "Wrong";

        message = message.toUpperCase();
        let messageLength = message.length;

        let fullKey = key.toUpperCase();
        let result = "";
        for ( let i = 0, ix = 0; i < messageLength; i++ ) {
            let messageIndex = this.letters.indexOf( message[ i ] );
            if ( messageIndex === -1 ) {
                result += message[ i ];
                continue;
            }
            let keyIndex = this.letters.indexOf( fullKey[ ix % key.length ] );

            let encreptedIndex = ( messageIndex - keyIndex );
            if ( encreptedIndex < 0 )
                encreptedIndex += this.letters.length;
            result += this.letters[ encreptedIndex ];
            ix++;
        }

        if ( this.inverse ) {
            return result.split( "" ).reverse().join( "" );
        } else {
            return result;
        }
    }
}


module.exports = VigenereCipheringMachine;
