let data =
[
    {
        name: 'Atika',
        age:'22'
    },
    {
        name: 'Asra',
        age: '12'
    },
    {
        name: 'Mahay',
        age: '7'
    },
    {
        name: 'Atika',
        age:'22'
    },
    {
        name: 'Asra',
        age: '12'
    },
    {
        name: 'Mahay',
        age: '7'
    }
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>'+ item.name + ' is '+ item.age + ' years old' + '</div>';
});


info.innerHTML = details.join('\n');