export interface TeamMember {
  id: number
  name: string
  image: string
  position: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Bismark Arroyo',
    image:
      'https://scontent.fsyq5-1.fna.fbcdn.net/v/t39.30808-6/435294774_375022345530879_7995175268353081566_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KvQdSjvzDWwQ7kNvgHAh941&_nc_ht=scontent.fsyq5-1.fna&oh=00_AYC5dLo0evdiQAm6XA8WPUDw048qyNPyd7V-TfSULB4I-A&oe=668695AF',
    position: 'Senior Web Developer'
  },
  {
    id: 2,
    name: 'Michael Chen',
    image:
      'https://scontent.fsyq5-1.fna.fbcdn.net/v/t39.30808-6/435294774_375022345530879_7995175268353081566_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KvQdSjvzDWwQ7kNvgHAh941&_nc_ht=scontent.fsyq5-1.fna&oh=00_AYC5dLo0evdiQAm6XA8WPUDw048qyNPyd7V-TfSULB4I-A&oe=668695AF',
    position: 'UX/UI Designer'
  },
  {
    id: 3,
    name: 'Sophia Rodriguez',
    image:
      'https://scontent.fsyq5-1.fna.fbcdn.net/v/t39.30808-6/435294774_375022345530879_7995175268353081566_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KvQdSjvzDWwQ7kNvgHAh941&_nc_ht=scontent.fsyq5-1.fna&oh=00_AYC5dLo0evdiQAm6XA8WPUDw048qyNPyd7V-TfSULB4I-A&oe=668695AF',
    position: 'Project Manager'
  }
]
