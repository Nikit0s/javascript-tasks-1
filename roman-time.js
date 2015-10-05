// Перевод в Римскую систему (для чисел < 100)
function toRoman(iValue) {
    var res = "";
    if (iValue == 0) return "-";
    var numbers = [50, 40, 10, 9, 5, 4, 1];
    for (i in numbers) {
        while (iValue >= numbers[i]) {
            iValue -= numbers[i];
            res += dRoman[numbers[i]];
        }
    }
    return res;
}

// Вывод в консоль
function asciiPrint(rHours, rMinutes) {
    var res = [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ]
    for (var i = 0; i < 8; i++) {
        for (j in rHours) {
            res[i] += dASCII[rHours[j]][i];
        }
    }
    for (var i = 0; i < 8; i++) {
        res[i] += dASCII[':'][i];
    }
    for (var i = 0; i < 8; i++) {
        for (j in rMinutes) {
            res[i] += dASCII[rMinutes[j]][i];
        }
    }
    for (i in res) {
        console.log(res[i]);
    }
}

var hours = process.argv[2];
var minutes = process.argv[3];

// Типа словарь
dRoman = {};
dRoman[1] = 'I';
dRoman[4] = 'IV';
dRoman[5] = 'V';
dRoman[9] = 'IX';
dRoman[10] = 'X';
dRoman[40] = 'XL';
dRoman[50] = 'L';

// Еще словарь
dASCII = {};
dASCII[':'] =
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
dASCII['-'] =
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
dASCII['I'] =
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
dASCII['V'] =
    [
        '  _           _  ',
        ' (_)         (_) ',
        ' (_)         (_) ',
        ' (_)         (_) ',
        ' (_)_       _(_) ',
        '   (_)_   _(_)   ',
        '     (_)_(_)     ',
        '       (_)       ',
    ];
dASCII['X'] =
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
dASCII['L'] =
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

iHours = parseInt(hours);
iMinutes = parseInt(minutes);
if (iHours >= 0 && iHours <= 23 && iMinutes >= 0 && iMinutes <= 59) {
    rHours = toRoman(iHours);
    rMinutes = toRoman(iMinutes);
    console.log(rHours);
    asciiPrint(rHours, rMinutes);
}
else {
    console.log('Время указано не верно');
}