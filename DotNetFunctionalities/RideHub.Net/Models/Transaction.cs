using System;
using System.Collections.Generic;

namespace RideHub.Net.Models
{
    public partial class Transaction
    {
        public int TransId { get; set; }
        public DateTime TransDate { get; set; }
        public decimal Ammount { get; set; }
        public string? Description { get; set; }
        public int PassengerId { get; set; }
        public int DriverId { get; set; }

        public virtual Passenger Passenger { get; set; } = null!;
    }
}
