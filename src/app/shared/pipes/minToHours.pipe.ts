import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toTime' })
export class MinutesToHoursPipe implements PipeTransform {
    transform(value: string): string {
        const timeInMinutes = parseInt(value);
        const hours = (timeInMinutes / 60);
        const roundHours = Math.floor(hours);
        const minutes = (hours - roundHours) * 60;
        const roundMinutes = Math.round(minutes);
        let timeString = '';
        if (roundHours > 0) {
            timeString += `${roundHours} hours `;
        }
        if (roundMinutes > 0) {
            timeString += `${roundMinutes} minutes`;
        }
        return timeString;
    }
}