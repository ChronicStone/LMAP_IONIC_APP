import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "present",
})
export class PresentPipe implements PipeTransform {
  transform(values: any[], args: Object): any {
    console.log(args);
    return values.filter((item) => item.statut == "1");
  }
}
