

export function circleArea(yarıcap){

    const pi =3.14;
    var area = pi*yarıcap*yarıcap;

    console.log(`Yarıçapı ${yarıcap} olan dairenin alani: ${area} `);

}


export function circleCircumference(yarıcap){

    const pi =3.14;
    var area = pi*yarıcap*2

    console.log(`Yarıçapı ${yarıcap} olan dairenin cevresi: ${area} `);

}


module.exports = {
    circleArea:circleArea,
    circleCircumference:circleCircumference
};
