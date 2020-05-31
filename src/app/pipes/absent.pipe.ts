import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "absent",
})
export class AbsentPipe implements PipeTransform {
  transform(values: any[], args: any[]): any {
    if (args != null) {
      return values.filter(item => item.onsite_session_status.toString().indexOf(args.onsite_session_status) !== -1);
    } else {
      return values;
    }
  }
}
