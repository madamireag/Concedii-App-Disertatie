﻿using Concediu_WebApi.Models;

namespace Concediu_WebApi.Utils
{
    public static class DateCalculator
    {


        public static int businessDaysBetween(this DateTime firstDay, DateTime lastDay, List<ZileLibereAnCurent> bankHolidays)
        {
            firstDay = firstDay.Date;
            lastDay = lastDay.Date;
            if (firstDay > lastDay)
                throw new ArgumentException("Incorrect last day " + lastDay);

            TimeSpan span = lastDay - firstDay;
            int businessDays = span.Days + 1;
            int fullWeekCount = businessDays / 7;
            // find out if there are weekends during the time exceedng the full weeks
            if (businessDays > fullWeekCount * 7)
            {
                // we are here to find out if there is a 1-day or 2-days weekend
                // in the time interval remaining after subtracting the complete weeks
                int firstDayOfWeek = firstDay.DayOfWeek == DayOfWeek.Sunday
                    ? 7 : (int)firstDay.DayOfWeek;
                int lastDayOfWeek = lastDay.DayOfWeek == DayOfWeek.Sunday
                    ? 7 : (int)lastDay.DayOfWeek;
                if (lastDayOfWeek < firstDayOfWeek)
                    lastDayOfWeek += 7;
                if (firstDayOfWeek <= 6)
                {
                    if (lastDayOfWeek >= 7)// Both Saturday and Sunday are in the remaining time interval
                        businessDays -= 2;
                    else if (lastDayOfWeek >= 6)// Only Saturday is in the remaining time interval
                        businessDays -= 1;
                }
                else if (firstDayOfWeek <= 7 && lastDayOfWeek >= 7)// Only Sunday is in the remaining time interval
                    businessDays -= 1;
            }

            // subtract the weekends during the full weeks in the interval
            businessDays -= fullWeekCount + fullWeekCount;

            // subtract the number of bank holidays during the time interval
            foreach ( ZileLibereAnCurent zc in bankHolidays)
            {
                try
                {
                    foreach (Date date in zc.date)
                    {
                        DateTime bh = date.date;
                        if (firstDay <= bh && bh <= lastDay && bh.DayOfWeek != DayOfWeek.Saturday && bh.DayOfWeek != DayOfWeek.Sunday)
                            businessDays--;
                    }
                }
                catch (Exception)
                {
                    
                }
            }

            return businessDays;
        }
    }





}

