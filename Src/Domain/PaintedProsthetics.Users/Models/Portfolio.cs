using System;
using System.Collections.Generic;
using System.Text;

namespace PaintedProsthetics.Users.Models
{
    public class Portfolio
    {
        public string Name { get; set; }
        public Image Image1 { get; set; }
        public Image Image2 { get; set; }
        public Image Image3 { get; set; }
        public Image Image4 { get; set; }
        public string PersonalLink { get; set; }
        public string Bio { get; set; }

    }
}
