using System;
using System.Collections.Generic;
using System.Text;

namespace PaintedProsthetics.Users.Models
{
    public class User
    {
        public string _FirstName { get; set; }
        public string _LastName { get; set; }
        public DateTime _BirthDate { get; set; }
        public string _Password { get; set; }
        public string _Email { get; set; }
        public DateTime SignUpDate { get; set; }
    }
}
