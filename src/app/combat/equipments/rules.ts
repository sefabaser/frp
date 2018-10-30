
export const WoodenHitPoint = 1;
export const SteelHitPoint = 4;
export const LargeShieldHitPointDifference = 1;
export const WeaponHitPointDifference = 1;

export function IsValidDualWeapon(main: string, offhand: string): boolean {
  let result = false;

  if (offhand === 'Handaxe') {
    result = main === 'Battleaxe' || main === 'Handaxe' || main === 'Mace';
  } else if (offhand === 'Dagger') {
    result = main === 'Handaxe' || main === 'Short sword' || main === 'Dagger';
  } else if (offhand === 'Short sword') {
    result = main === 'Long sword' || main === 'Short sword' || main === 'Handaxe';
  }

  console.log(main, offhand, result);
  return result;
}
