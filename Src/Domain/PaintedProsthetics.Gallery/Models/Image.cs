using System;
using System.Collections.Generic;
using System.Text;

namespace PaintedProsthetics.Gallery.Models
{
    public class Image
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string AltText { get; set; }
        public string ImageUrl { get; set; }
        public string Artist { get; set; }
    }
}
