import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "absent",
})
export class AbsentPipe implements PipeTransform {
  transform(values: any[], args: any[]): any {
    console.log(args);
    // return values.filter((item) => item.statut == "1");
    return values.filter((item) => item.statut.indexOf(args.statut) !== -1);
  }
}
