using System;
using System.Collections.Generic;
using System.Text;

namespace PaintedProsthetics.Users.Models
{
    public class Image
    {
        public string Name { get; set; }
        public string FilePath { get; set; } //not sure
        public int Likes { get; set; }
        public bool SetAsMain { get; set; }

    }
}
