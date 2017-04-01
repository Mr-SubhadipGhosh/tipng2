import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
	name : "stringModi"
})

export class StringModi implements PipeTransform{
	 transform(value: string, x: string, postFix: boolean): string {
		return postFix?x + value: value;
	}
}