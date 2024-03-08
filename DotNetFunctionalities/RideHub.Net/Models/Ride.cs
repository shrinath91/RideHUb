using System;
using System.Collections.Generic;

namespace RideHub.Net.Models
{
    public partial class Ride
    {
        public Ride()
        {
            Bookings = new HashSet<Booking>();
            Passengers = new HashSet<Passenger>();
        }

        public int RideId { get; set; }
        public int RideDriverId { get; set; }
        public string StartLocation { get; set; } = null!;
        public string EndLocation { get; set; } = null!;
        public DateTime? RideTime { get; set; }
        public float? Fare { get; set; }
        public int TotalCapacity { get; set; }
        public int CurrentCapacity { get; set; }
        public string? RideStatus { get; set; }

        public virtual Driver RideDriver { get; set; } = null!;
        public virtual ICollection<Booking> Bookings { get; set; }

        public virtual ICollection<Passenger> Passengers { get; set; }
    }
}
