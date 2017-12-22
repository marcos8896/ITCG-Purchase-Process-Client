export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    },
  },
  {
    name: 'Partidas',
    icon: 'icon-book-open',
    url: '',
    children: [
      {
        name: 'Registrar',
        url: '/warehouse/concept/create',
        icon: 'icon-note',
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
      }
    ]
  }
];
