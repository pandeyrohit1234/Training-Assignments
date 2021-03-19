using System;

namespace myfirstappp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine("Enter Your name");
            var name =Console.ReadLine();
            var date=DateTime.Now;
            Console.WriteLine($"Hello {name} on {date}");
            
        }
    }
}
