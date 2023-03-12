function a(timestamp: number, bool?: false): string;
function a(timestamp: number, bool?: true): number;
function a(timestamp: number, bool?: boolean): any {
  console.log(timestamp);
  return 1;
}


function b<T extends (boolean | void) = void>(timestamp: number, bool?: T): T extends void ? string : T extends boolean ? T extends true ? number : string : string {
  return 'sda' as any;
}

const r = b(2313);
const r1 = b(23123, false);
const r2 = b(23123, true);

