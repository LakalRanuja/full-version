import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Briefcase} from 'react-feather'

export default [
  
  {
    header: 'Apps & Pages'
  },
  {
    id: 'calendar',
    title: 'Calendar',
    icon: <Calendar size={20} />,
    navLink: '/apps/calendar'
  },
  {
    id: 'users',
    title: 'Teacher',
    icon: <User size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/apps/user/list'
      }
      // {
      //   id: 'view',
      //   title: 'View',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/user/view'
      // },
      // {
      //   id: 'edit',
      //   title: 'Edit',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/user/edit'
      // }
    ]
  },
  {
    id: 'todo',
    title: 'Classes',
    icon: <CheckSquare size={20} />,
    navLink: '/apps/todo'
  },
  {
        id: 'blog',
        title: 'Subjects',
        icon: <Briefcase size={12} />,
        children: [
          // {
          //   id: 'blogList',
          //   title: 'List',
          //   icon: <Circle size={12} />,
          //   permissions: ['admin', 'editor'],
          //   navLink: '/pages/blog/list'
          // },
          // 
          {
            id: 'blogDetail',
            title: 'Add Subjects',
            icon: <Circle size={12} />,
            permissions: ['admin', 'editor'],
            navLink: '/pages/blog/editNew'
          },
          {
            id: 'blogEdit',
            title: 'Assign Subjects',
            icon: <Circle size={12} />,
            permissions: ['admin', 'editor'],
            //  navLink: '/misc/coming-soon'
            navLink: '/pages/blog/edit'
          }
          
        ]
      }
]
