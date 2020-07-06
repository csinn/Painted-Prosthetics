using System;
using System.Collections.Generic;
using System.Text;

namespace PaintedProsthetics.Donations.Models
{
    public class Donation
    {
        public string Donator { get; }
        public DateTime Date { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string status { get; set; }
    }
}
