export interface IMember {
  name: string,
  position: string,
  photoSrc: string
}

export const defaultMemberPhoto = '/images/default_profile.svg';

export function getAllMembers(): IMember[] {
  return [
    {
      name: 'Alexandru Constantin',
      position: 'Co-Director',
      photoSrc: 'https://res.cloudinary.com/gamedev-unicsmcr/image/upload/v1609274544/12H-12_-_Alexandru_Constantin_cvvdc0.jpg',
    },
    {
      name: 'Mikolaj Lenczewski',
      position: 'Co-Director',
      photoSrc: 'https://res.cloudinary.com/gamedev-unicsmcr/image/upload/v1626540010/20201209_124138_g8f546.jpg',
    },
  ];
}
