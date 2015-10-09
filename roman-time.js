// Перевод в Римскую систему (для чисел < 100)
function toRoman(iValue) {
    var res = "";
    if (iValue === 0) return "-";
    var numbers = [50, 40, 10, 9, 5, 4, 1];
    for (i in numbers) {
        while (iValue >= numbers[i]) {
            iValue -= numbers[i];
            res += numbersRoman[numbers[i]];
        }
    }
    return res;
}

// Вывод в консоль
function asciiPrint(rHours, rMinutes) {
    var res = '';
    for (var i = 0; i < 8; i++) {
        for (var j in rHours) {
            res += romanASCII[rHours[j]][i];
        }
        res += romanASCII[':'][i];
        for (var j in rMinutes) {
            res += romanASCII[rMinutes[j]][i];
        }
        res += '\n'
    }
    console.log(res);
}

// Типа словарь
var numbersRoman = {};
numbersRoman[1] = 'I';
numbersRoman[4] = 'IV';
numbersRoman[5] = 'V';
numbersRoman[9] = 'IX';
numbersRoman[10] = 'X';
numbersRoman[40] = 'XL';
numbersRoman[50] = 'L';

// Еще словарь
var romanASCII = {};
romanASCII[':'] =
    [
        '              ',
        '              ',
        '    (_)(_)    ',
        '    (_)(_)    ',
        '              ',
        '    (_)(_)    ',
        '    (_)(_)    ',
        '              '
    ];
romanASCII['-'] =
    [
        '              ',
        '              ',
        '              ',
        ' (_)(_)(_)(_) ',
        ' (_)(_)(_)(_) ',
        '              ',
        '              ',
        '              '
    ];
romanASCII['I'] =
    [
        '    _  _  _    ',
        '   (_)(_)(_)   ',
        '      (_)      ',
        '      (_)      ',
        '      (_)      ',
        '      (_)      ',
        '    _ (_) _    ',
        '   (_)(_)(_)   '
    ];
romanASCII['V'] =
    [
        '  _           _  ',
        ' (_)         (_) ',
        ' (_)         (_) ',
        ' (_)         (_) ',
        ' (_)_       _(_) ',
        '   (_)_   _(_)   ',
        '     (_)_(_)     ',
        '       (_)       '
    ];
romanASCII['X'] =
    [
        '  _           _  ',
        ' (_)_       _(_) ',
        '   (_)_   _(_)   ',
        '     (_)_(_)     ',
        '      _(_)_      ',
        '    _(_) (_)_    ',
        '  _(_)     (_)_  ',
        ' (_)         (_) '
    ];
romanASCII['L'] =
    [
        '  _            ',
        ' (_)           ',
        ' (_)           ',
        ' (_)           ',
        ' (_)           ',
        ' (_)           ',
        ' (_) _  _  _   ',
        ' (_)(_)(_)(_)  '
    ];

var hours = process.argv[2];
var minutes = process.argv[3];
var rHours, rMinutes;

hours = parseInt(hours, 10);
minutes = parseInt(minutes, 10);
if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
    rHours = toRoman(hours);
    rMinutes = toRoman(minutes);
    asciiPrint(rHours, rMinutes);
}
else {
    console.log('Время указано не верно');
}