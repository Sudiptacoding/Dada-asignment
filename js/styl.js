// (Box1 & Box4 & Box5)
const handelTriangle = (text) => {
    const B = document.getElementById('Triangle-b').value
    const H = document.getElementById('Triangle-h').value

    const A = document.getElementById('Rhombus-b').value
    const C = document.getElementById('Rhombus-h').value

    const P = document.getElementById('Pentagon-b').value
    const Q = document.getElementById('Pentagon-h').value

    if (B < 0 || H < 0 || A < 0 || C < 0 || P < 0 || Q < 0) {
        alert("Please input posative value 😔")
    }
    else if (B && H > 0 || A && C > 0 || P && Q > 0) {
        const Outputs = 0.5 * (B | A | P) * (H | C | Q);
        const Output = Math.floor(Outputs)
        const Create = document.createElement('li');
        Create.innerHTML = text + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + Output + `cm<sup>2</sup>` + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + `<button class="Convat" onclick="handelConvat(${Output})">Covert to m<sup>2</sup></button>`;
        document.getElementById('Show').appendChild(Create);
    }
    document.getElementById('Triangle-b').value = '';
    document.getElementById('Triangle-h').value = '';
    document.getElementById('Rhombus-b').value = '';
    document.getElementById('Rhombus-h').value = '';
    document.getElementById('Pentagon-b').value = '';
    document.getElementById('Pentagon-h').value = ''

}
// (Box2  & Box3)
const handelRectangle = (text) => {
    const B = document.getElementById('Rectangle-b').value
    const H = document.getElementById('Rectangle-h').value

    const D = document.getElementById('Parallelogram-b').value
    const E = document.getElementById('Parallelogram-h').value

    if (B < 0 || H < 0 || D < 0 || E < 0) {
        alert("Please input posative value 😔")
    }
    else if (B && H > 0 || D && E > 0) {
        const Outputs = (B | D) * (H | E);
        const Output = Math.floor(Outputs)
        const Create = document.createElement('li');
        Create.innerHTML = text + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + Output + `cm<sup>2</sup>` + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + `<button class="Convat" onclick="handelConvat(${Output})">Covert to m<sup>2</sup></button>`;
        document.getElementById('Show').appendChild(Create);
    }
    document.getElementById('Rectangle-b').value = '';
    document.getElementById('Rectangle-h').value = '';
    document.getElementById('Parallelogram-b').value = '';
    document.getElementById('Parallelogram-h').value = ''
}
// Box6
const handelEllipse = (text) => {
    const B = document.getElementById('Ellipse-b').value
    const H = document.getElementById('Ellipse-h').value
    if (B < 0 || H < 0) {
        alert("Please input posative value 😔")
    } else {
        const Change = 3.14 * B * H;
        const Output = Change.toFixed(2)
        const Create = document.createElement('li');
        Create.innerHTML = text + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + Output + `cm<sup>2</sup>` + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + `<button class="Convat" onclick="handelConvat(${Output})">Covert to m<sup>2</sup></button>`;
        document.getElementById('Show').appendChild(Create);
    }
    document.getElementById('Ellipse-b').value = '';
    document.getElementById('Ellipse-h').value = ''
}
// Handel Convat
const handelConvat = (value) => {
    const inputValue = value;
    const convats = inputValue / 100;
    const convat = convats.toFixed(4);
    document.getElementById('Value1').innerText = inputValue;
    document.getElementById('Value2').innerText = convat;
    document.getElementById('convat-value').style.display = 'block'
    document.getElementById('container').style.display = 'none';

}
const handelShowValue = () => {
    document.getElementById('convat-value').style.display = 'none'
    document.getElementById('container').style.display = 'block';
}


// new page
const handelNewPage = () => {
    document.getElementById('container').style.display = 'none';
    document.getElementById("new-page").style.display = 'block'
}
const handelMainPage = () => {
    document.getElementById('container').style.display = 'block';
    document.getElementById("new-page").style.display = 'none'
}
// randomly color change
const handelHover = (text) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const Style = document.getElementById(text);
    Style.style.backgroundColor = "#" + randomColor;
    Style.style.transition = 'all .5s';
}
const handelOuthover = (text1) => {
    document.getElementById(text1).style.backgroundColor = '';
}
