export const navigation = [
  {
    name: 'Catálogos',
    icon: 'icon-layers',
    url: '',
    children: [
      {
        name: 'Partidas',
        icon: 'icon-book-open',
        url: '',
        children: [
          {
            name: 'Registrar',
            url: '/warehouse/concept/create',
            icon: 'icon-note'
          },
          {
            name: 'Consultar',
            url: '/warehouse/concept/all',
            icon: 'icon-magnifier',
          }
        ]
      },
      {
        name: 'Claves Presupuestales',
        icon: 'icon-key',
        url: '',
        children: [
          {
            name: 'Registrar',
            url: '/warehouse/budget-key/create',        
            icon: 'icon-note',
          },
          {
            name: 'Consultar',
            url: '/warehouse/budget-key/all',        
            icon: 'icon-magnifier',
          }      
        ]
      },
      {
        name: 'Proveedores',
        icon: 'icon-phone',
        url: '',
        children: [
          {
            name: 'Registrar',
            url: '/warehouse/provider/create',        
            icon: 'icon-note',
          },
          {
            name: 'Consultar',
            url: '/warehouse/provider/all',        
            icon: 'icon-magnifier',
          }      
        ]
      },
      {
        name: 'Proyectos',
        icon: 'icon-rocket',
        url: '',
        children: [
          {
            name: 'Registrar',
            url: '/warehouse/project/create',
            icon: 'icon-note',
          },
          {
            name: 'Consultar',
            url: '/warehouse/project/all',
            icon: 'icon-magnifier',
          }
        ]
      },
      {
        name: 'Subdirecciones',
        icon: 'icon-globe',
        url: '',
        children: [
          {
            name: 'Registrar',
            url: '/warehouse/subdirection/create',
            icon: 'icon-note',
          },
          {
            name: 'Consultar',
            url: '/warehouse/subdirection/all',
            icon: 'icon-magnifier',
          }
        ]
      },
      {
        name: 'Programas',
        icon: 'icon-paypal',
        url: '',
        children: [
          {
            name: 'Registrar',
            url: '/warehouse/program/create',
            icon: 'icon-note',
          },
          {
            name: 'Consultar',
            url: '/warehouse/program/all',
            icon: 'icon-magnifier',
          }
        ]
      },
      {
        name: 'Departamentos',
        icon: 'icon-home',
        url: '',
        children: [
          {
            name: 'Registrar',
            url: '/warehouse/department/create',
            icon: 'icon-note',
          },
          {
            name: 'Consultar',
            url: '/warehouse/department/all',
            icon: 'icon-magnifier',
          }
        ]
      }
      
    ],
    
  },
  {
    name: 'Procesos',
    icon: 'icon-map',
    url: '',
    children: [
      {
        name: 'Requisición',
        icon: 'icon-map',
        url: '',
        children: [
          {
            name: 'Registrar',
            url: '/processes/requisition/create',
            icon: 'icon-note',
          },
          {
            name: 'Consultar',
            url: '/processes/requisition/all',
            icon: 'icon-note',
          }
        ] 
      },
      {
        name: 'Entradas-Salidas',
        icon: 'icon-map',
        url: '',
        children: [
          {
            name: 'Registrar',
            url: '/processes/input-output/all',
            icon: 'icon-note',
          },
          {
            name: 'Consultar',
            url: '/processes/input-output/all-generated',
            icon: 'icon-note',
          }
        ] 
      },
      {
        name: 'Aceptar requis',
        url: '',
        icon: 'icon-user-follow',
        children: [
          {
            name: 'Subdirector',
            url: '/acceptances/vice/all',
            icon: 'icon-note',
          },
          {
            name: 'Planeación',
            url: '/acceptance/planning',
            icon: 'icon-note',
          }
        ] 
      },
      {
        name: 'Órdenes de compra',
        icon: 'icon-map',
        url: '',
        children: [
          {
            name: 'Registrar',
            url: '/processes/purchase-order/create',
            icon: 'icon-note',
          },
          // {
          //   name: 'Consultar',
          //   url: '/processes/requisition/all',
          //   icon: 'icon-note',
          // }
        ] 
      },    
      
    ]
  },
  { 
    name: 'Usuarios',
    icon: 'icon-people',
    url: '',
    children: [
      {
        name: 'Asignar roles',
        url: '/roles',
        icon: 'icon-user-follow',
      }
    ]
  }, 
  // Esta opción sólo se mostrará cuando sea un usuario de tipo "VicePrincipal"
  {
    name: 'Aprobaciones',
    icon: 'icon-check',
    url: '/aprovements/vice-principal',
  },
  // Esta opción sólo se mostrará cuando sea un usuario de tipo "Planning"
  {
    name: 'Aprobaciones',
    icon: 'icon-check',
    url: '/aprovements/planning',
  }
  
];


  
  
