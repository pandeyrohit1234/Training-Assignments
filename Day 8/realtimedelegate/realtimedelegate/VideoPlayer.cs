using System;
using System.Collections.Generic;
using System.Text;

namespace realtimedelegate
{
    class VideoPlayer
    {
        private int VideoPlayerStatus;
        public int PlayVideoFile(string type)
        {
            if (type != "mp4")
            {
                VideoPlayerStatus = 0;
            }
            else
            {
                VideoPlayerStatus = -1;
            }
            return VideoPlayerStatus;
        }
    }
}
