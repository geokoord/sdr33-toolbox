
export function fillUp(inP: string, len: number): string {
  let Res = inP;

  if (Res.length > len) {
    Res = Res.substring(0, len);
  } else if (Res.length < len) {
    while (Res.length < len) {
      Res += ' ';
    }
  }
  return Res
}



