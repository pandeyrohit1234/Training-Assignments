﻿using System;
using System.Collections.Generic;
using System.Text;

namespace realtimeevent
{
    public class DisplayClock
    {
        public void Subscribe(Clock theClock)
        {
            theClock.SecondChanged += new Clock.SecondChangeHandler(TimeHasChanged);
        }

        public void TimeHasChanged(object theClock, TimeInfoEventArgs ti)
        {
            Console.WriteLine("current time: {0}:{1}:{2}", ti.hour.ToString(), ti.minute.ToString(), ti.second.ToString());
        }
    }
}
