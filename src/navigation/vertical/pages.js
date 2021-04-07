import { FileText, Circle, Settings } from 'react-feather'
export default [
  {
    id: 'pages',
    title: 'Settings',
    icon: <Settings size={20} />,
    children: [
      
      {
        id: 'accountSettings',
        title: 'Account Settings',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/account-settings'
      }
    ]
  }
]
