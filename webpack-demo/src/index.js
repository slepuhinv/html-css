import _ from 'Lodash';

function component() {
    let element = document.createElement('div');

    element.innerHTML = "Heello webpack!!!" + _.range(1, 5);

    return element;
}

export { component };