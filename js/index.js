'use strict'

const form = document.querySelector('.js-form');
form.addEventListener('submit', onFilter);
const template = document.querySelector('#card-template').innerHTML.trim();
const compileTemplate = Handlebars.compile(template);
const cardSection = document.querySelector('.card-section');
const sizeInputs = document.querySelectorAll('input[type="checkbox"][name="size"]');
const colorInputs = document.querySelectorAll('input[type="checkbox"][name="color"]');
const dateInputs = document.querySelectorAll('input[type="checkbox"][name="release_date"]');
let filter;

function onFilter(event) {
    event.preventDefault();
    filter = { size: [], color: [], release_date: []};
    cardSection.innerHTML = '';
    sizeInputs.forEach(input => {
        if (input.checked) {
            filter.size.push(Number(input.value));
        }
    });
    colorInputs.forEach(input => {
        if (input.checked) {
            filter.color.push(input.value);
        }
    });
    dateInputs.forEach(input => {
        if (input.checked) {
            filter.release_date.push(Number(input.value));
        }
    });
    let filtredLaptops = laptops.filter((el) => {
        if (filter.size.includes(el.size) && filter.color.includes(el.color) && filter.release_date.includes(el.release_date)){
            return el;
        };
    })

    let cardMarkup = filtredLaptops.reduce((acc, elem) => acc + compileTemplate(elem), '');
    cardSection.insertAdjacentHTML('afterbegin', cardMarkup);
}

const laptops = [
    {
      size: 13,
      color: 'white',
      price: 28000,
      release_date: 2015,
      name: 'Macbook Air White 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'gray',
      price: 32000,
      release_date: 2016,
      name: 'Macbook Air Gray 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'black',
      price: 35000,
      release_date: 2017,
      name: 'Macbook Air Black 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'white',
      price: 45000,
      release_date: 2015,
      name: 'Macbook Air White 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'gray',
      price: 55000,
      release_date: 2016,
      name: 'Macbook Pro Gray 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'black',
      price: 45000,
      release_date: 2017,
      name: 'Macbook Pro Black 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'white',
      price: 65000,
      release_date: 2015,
      name: 'Macbook Air White 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'gray',
      price: 75000,
      release_date: 2016,
      name: 'Macbook Pro Gray 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'black',
      price: 80000,
      release_date: 2017,
      name: 'Macbook Pro Black 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
  ];