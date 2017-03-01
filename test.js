const items = {
  name: {
    firstName: 'Adil',
    someMore: 'Else'
  },
  experiences: [{
      company: 'Edunuts',
      profile: 'Developer'
    }, {
      year: '2016',
      date: 'somedate'
    }, {
      responsible: {
        code: true,
        play: 'yes',
        eat: {
          rice: 'rice',
          chapati: [
            {
              roti: 'roti',
              paratha: 'paratha',
              dosa: [
                {
                  1: 'masala dosa',
                  2: 'rawa dosa'
                }, {
                  sdhg: [
                    {
                      sdjkfh: 'sdkjh'
                    }
                  ]
                }
              ]
            }
          ],
          cholleBhature: [
            {
              chole: 'chole',
              bhature: 'bhature'
            }
          ]
        }
      }
    }],
  somemore: {
    ex: 'ex',
    1: 'fds',
    2: [
      {
        3: 'sdf',
        4: 'sdf'
      }
    ]
  }
};

const h = require('./index');

const newObj = new h(items);

console.log(newObj);
