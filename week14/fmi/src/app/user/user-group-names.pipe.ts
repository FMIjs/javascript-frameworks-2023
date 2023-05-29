import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userGroupNames',
  pure: true
})
export class UserGroupNamesPipe implements PipeTransform {

  transform(user: any, ...args: []): string[] {
    return user.groups.map((g: any) => g.name);
  }

}
