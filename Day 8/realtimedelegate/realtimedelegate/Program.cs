using System;

namespace realtimedelegate
{
    class Program
    {
        static void Main(string[] args)
        {
            MediaStorage m = new MediaStorage();
            Audioplayer ap = new Audioplayer();
            VideoPlayer vp = new VideoPlayer();
            MediaStorage.PlayerMedia playerDelegate = ap.PlayAudioFile;

            m.ReportResult(playerDelegate, "mp3");
            playerDelegate = vp.PlayVideoFile;
            m.ReportResult(playerDelegate, "mp4");

        }
    }
}
