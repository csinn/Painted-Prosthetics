using System;
using System.Collections.Generic;
using System.Text;

namespace PaintedProsthetics.Users.Models
{
    public class Artist : User
    {
        public Portfolio Portofolio { get; }

        public Artist()
        {
            Portofolio = new Portfolio();
        }
    }
}
