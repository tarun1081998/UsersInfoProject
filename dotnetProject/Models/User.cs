using System;

namespace dotnetProject.Models
{
    public class User
    {
        public int Id { get; set; }

        public string Fname { get; set; }

        public string Lname { get; set; }

        public DateTime Dob { get; set; }

        public UInt64 Mnumber { get; set; }

        public string City { get; set; }
    }
}