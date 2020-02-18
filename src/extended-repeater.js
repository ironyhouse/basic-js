module.exports = function repeater(str, options) {
    if (options.repeatTimes === undefined) {
        options.repeatTimes = 1;
    }
    if (options.separator === undefined) {
        options.separator = '+';
    }
    if (options.addition === undefined) {
        options.additionRepeatTimes = 0;
    }
    if (options.additionRepeatTimes === undefined) {
        options.additionRepeatTimes = 1;
    }

    let string = '';
    for (let i = 0; i < options.repeatTimes; i++) {
        string += str;

        for (let j = 0; j < options.additionRepeatTimes; j++) {
            string += options.addition;

            if (j + 1 !== options.additionRepeatTimes)
                string += options.additionSeparator;
        }

        if (i + 1 !== options.repeatTimes)
            string += options.separator;
    }
    return string;
};
  