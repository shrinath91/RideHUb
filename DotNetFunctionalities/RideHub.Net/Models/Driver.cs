using System;
using System.Collections.Generic;

namespace RideHub.Net.Models
{
    public partial class Driver
    {
        public Driver()
        {
            Rides = new HashSet<Ride>();
        }

        public int DriverId { get; set; }
        public string Address { get; set; } = null!;
        public string Colour { get; set; } = null!;
        public string Contact { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string EmergencyContact { get; set; } = null!;
        public string Fname { get; set; } = null!;
        public string Lname { get; set; } = null!;
        public string Make { get; set; } = null!;
        public string NoPlate { get; set; } = null!;
        public string Model { get; set; } = null!;
        public string RegistrationNo { get; set; } = null!;
        public int DriverUserId { get; set; }
        public string LicenceNo { get; set; } = null!;
        public int? Rating { get; set; }

        public virtual User DriverUser { get; set; } = null!;
        public virtual ICollection<Ride> Rides { get; set; }
    }
}
