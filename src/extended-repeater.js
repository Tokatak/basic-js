const CustomError = require( "../extensions/custom-error" );

module.exports = function repeater( str, options ) {


    function getMeLine(line,repeatTimes,separator) {
        let result = "";
        for ( let i = 0; i < repeatTimes; i++ ) {
            if ( i == 0 && repeatTimes > 1 ) {
                //first
                result += line + separator;
            } else if ( i == repeatTimes - 1 ) {
                //last
                //inbetween
                result += line;

            } else {
                result += line + separator;

            }
        }
        return result;
    }

    // additions
    let additionsRepeat = options.additionRepeatTimes;
    if ( options.addition && !additionsRepeat ) {
        additionsRepeat = 1;
    }
    let addition = getMeLine( options.addition,additionsRepeat,options.additionSeparator  || "|" );



    let separator = options.separator || "+";
    let repeatTimes = options.repeatTimes || 1;
    let result = "";
    for ( let i = 0; i < repeatTimes; i++ ) {

        if ( i == 0 && options.repeatTimes > 1 ) {
            //first
            result += str + addition + separator;
        } else if ( i == repeatTimes - 1 ) {
            //last
            //inbetween
            result += str + addition;

        } else {
            result += str + addition + separator;

        }
    }
    return result;
};
  