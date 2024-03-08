using System;
using System.Collections.Generic;

namespace RideHub.Net.Models
{
    public partial class Passenger
    {
        public Passenger()
        {
            Bookings = new HashSet<Booking>();
            Requests = new HashSet<Request>();
            Transactions = new HashSet<Transaction>();
            Rides = new HashSet<Ride>();
        }

        public int PassengerId { get; set; }
        public int PassengerUserId { get; set; }
        public string Fname { get; set; } = null!;
        public string Lname { get; set; } = null!;
        public string Contact { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Address { get; set; } = null!;
        public int? Rating { get; set; }
        public string EmergencyContact { get; set; } = null!;

        public virtual User PassengerUser { get; set; } = null!;
        public virtual ICollection<Booking> Bookings { get; set; }
        public virtual ICollection<Request> Requests { get; set; }
        public virtual ICollection<Transaction> Transactions { get; set; }

        public virtual ICollection<Ride> Rides { get; set; }
    }
}
