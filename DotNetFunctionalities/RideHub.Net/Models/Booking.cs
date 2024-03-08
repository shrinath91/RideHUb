using System;
using System.Collections.Generic;

namespace RideHub.Net.Models
{
    public partial class Booking
    {
        public int BookingId { get; set; }
        public int RideId { get; set; }
        public int? PassId { get; set; }
        public DateTime? BookingTime { get; set; }
        public int? Capacity { get; set; }
        public int TotalAmmt { get; set; }

        public virtual Passenger? Pass { get; set; }
        public virtual Ride Ride { get; set; } = null!;
    }
}
