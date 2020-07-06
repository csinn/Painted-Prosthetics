using System;
using System.Collections.Generic;
using System.Text;

namespace PaintedProsthetics.Users.Models
{
    public class Amputee : User
    {
        public string proof { get; set; }
        public string country { get; set; }
        public string city { get; set; }
        public string street { get; set; }
        public string bodypart { get; set; }
        public string requestStatus { get; set; }

    }
}
