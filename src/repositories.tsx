export const repositories = [
    {
      name: 'paymentlist',
      environment: [
        {
          name: 'local',
          platform: [
            {
              name: 'ml',
              url: 'http://localhost:3000/paymentlist',
            },
            {
              name: 'mp',
              url: 'http://localhost:3001/paymentlist',
            },
            {
              name: 'backoffice',
              url: 'http://localhost:3002/bo/paymentlist',
            }
          ]
        },
        {
          name: 'test',
          platform: [
            {
              name: 'ml',
              url: 'http://test.mercadolibre/paymentlist',
            },
            {
              name: 'mp',
              url: 'http://test.mercadopago/paymentlist',
            },
            {
              name: 'backoffice',
              url: 'http://test.backoffice/paymentlist',
            }
          ]
        },
        {
          name: 'prod',
          platform: [
            {
              name: 'ml',
              url: 'http://mercadolibre/paymentlist',
            },
            {
              name: 'mp',
              url: 'http://mercadopago/paymentlist',
            },
            {
              name: 'backoffice',
              url: 'http://backoffice/paymentlist',
            }
          ]
        }
      ],
      casuisticas: [
        {
          userId: '123455',
          description: 'User with no payments',
        },
        {
          userId: '1254455',
          description: 'User with payments',
        },
        {
          userId: '123735',
          description: 'User with no payments and no payment methods',
        }
      ]
    },
    {
      name: 'detail',
      environment: [
        {
          name: 'local',
          platform: [
            {
              name: 'ml',
              url: 'http://localhost:3000/details',
            },
            {
              name: 'mp',
              url: 'http://localhost:3001/details',
            },
            {
              name: 'backoffice',
              url: 'http://localhost:3002/details',
            }
          ]
        },
        {
          name: 'mobile',
          platform: [
            {
              name: 'ml',
              url: 'meli://localhost:3000/details',
            },
            {
              name: 'mp',
              url: 'meli://localhost:3001/details',
            },
          ]
        },
        {
          name: 'test',
          platform: [
            {
              name: 'ml',
              url: 'http://test.mercadolibre/details',
            },
            {
              name: 'mp',
              url: 'http://test.mercadopago/details',
            },
            {
              name: 'backoffice',
              url: 'http://test.backoffice/details',
            }
          ]
        }
      ],
    },
  ];
