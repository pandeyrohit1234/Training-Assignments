using System;
using System.Collections.Generic;
using System.Text;

namespace realtimedelegate
{
    class Audioplayer
    {
        private int AudioPlayerStatus;
        public int PlayAudioFile(string type)
        {
            if (type != "mp3")
            {
                AudioPlayerStatus = -1;
            }
            else
            {
                AudioPlayerStatus = 0;
            }
            return AudioPlayerStatus;
        }
    }
}
