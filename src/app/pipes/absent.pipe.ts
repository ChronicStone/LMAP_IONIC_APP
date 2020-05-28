import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "absent",
})
export class AbsentPipe implements PipeTransform {
  transform(values: any[], args: Object): any {
    console.log(args);
    return values.filter((item) => item.statut == "1");
  }
}
