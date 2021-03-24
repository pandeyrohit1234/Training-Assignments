using System;
using System.Collections.Generic;
using System.Text;

namespace realtimeevent
{
    public class Inventory
    {
        public void Subscribe(Clock theClock)
        {
            theClock.SecondChanged += new Clock.SecondChangeHandler(InventoryTimeHasChanged);
        }

        public void InventoryTimeHasChanged(object theClock, TimeInfoEventArgs ti)
        {
            Console.WriteLine("Inventory  time: {0}:{1}:{2}", ti.hour.ToString(), ti.minute.ToString(), ti.second.ToString());
        }
    }
}